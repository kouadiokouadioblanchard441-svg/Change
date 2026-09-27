type JsonRecord = Record<string, unknown>;

export type ClapayOperator = {
  id: string;
  name: string;
};

type RequestValues = Record<string, string | number>;

type ClapayConfig = {
  baseUrl: URL;
  apiKey: string;
  authHeader: string;
  authPrefix: string;
  initiatePath: string;
  initiateBodyTemplate: unknown;
  initiateSignaturePath: string;
  initiateRedirectPath: string;
  initiateMessagePath: string;
  statusPath: string;
  statusBodyTemplate: unknown;
  statusValuePath: string;
  successStatuses: Set<string>;
  failureStatuses: Set<string>;
  operatorsPath: string;
  operatorsCountryParam: string;
  operatorsResponsePath: string;
  operatorIdPath: string;
  operatorNamePath: string;
};

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Configuration Clapay manquante dans Plesk : ${name}`);
  return value;
}

function parseJsonEnv(name: string): unknown {
  const raw = requiredEnv(name);
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`La variable Plesk ${name} doit contenir un JSON valide`);
  }
}

function parseStatusSet(name: string): Set<string> {
  const values = requiredEnv(name)
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  if (!values.length) throw new Error(`La variable Plesk ${name} ne contient aucun statut`);
  return new Set(values);
}

function loadConfig(): ClapayConfig {
  const baseUrlRaw = requiredEnv("CLAPAY_API_BASE_URL");
  let baseUrl: URL;
  try {
    baseUrl = new URL(baseUrlRaw);
  } catch {
    throw new Error("CLAPAY_API_BASE_URL doit être une URL valide");
  }
  if (baseUrl.protocol !== "https:" && baseUrl.protocol !== "http:") {
    throw new Error("CLAPAY_API_BASE_URL doit utiliser HTTP ou HTTPS");
  }
  baseUrl.pathname = `${baseUrl.pathname.replace(/\/+$/, "")}/`;

  const authHeader = requiredEnv("CLAPAY_API_KEY_HEADER");
  if (!/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/.test(authHeader)) {
    throw new Error("CLAPAY_API_KEY_HEADER n'est pas un nom d'en-tête HTTP valide");
  }

  return {
    baseUrl,
    apiKey: requiredEnv("CLAPAY_API_KEY"),
    authHeader,
    authPrefix: process.env.CLAPAY_API_KEY_PREFIX?.trim() || "",
    initiatePath: requiredEnv("CLAPAY_INITIATE_PATH"),
    initiateBodyTemplate: parseJsonEnv("CLAPAY_INITIATE_REQUEST_TEMPLATE"),
    initiateSignaturePath: requiredEnv("CLAPAY_INITIATE_SIGNATURE_PATH"),
    initiateRedirectPath: process.env.CLAPAY_INITIATE_REDIRECT_PATH?.trim() || "",
    initiateMessagePath: process.env.CLAPAY_INITIATE_MESSAGE_PATH?.trim() || "",
    statusPath: process.env.CLAPAY_STATUS_PATH?.trim() || "/nowallet/api/check/status/payment",
    statusBodyTemplate: parseJsonEnv("CLAPAY_STATUS_REQUEST_TEMPLATE"),
    statusValuePath: requiredEnv("CLAPAY_STATUS_VALUE_PATH"),
    successStatuses: parseStatusSet("CLAPAY_STATUS_SUCCESS_VALUES"),
    failureStatuses: parseStatusSet("CLAPAY_STATUS_FAILURE_VALUES"),
    operatorsPath: process.env.CLAPAY_OPERATORS_PATH?.trim() || "/nowallet/api/operators/data",
    operatorsCountryParam: requiredEnv("CLAPAY_OPERATORS_COUNTRY_PARAM"),
    operatorsResponsePath: requiredEnv("CLAPAY_OPERATORS_RESPONSE_PATH"),
    operatorIdPath: requiredEnv("CLAPAY_OPERATOR_ID_PATH"),
    operatorNamePath: requiredEnv("CLAPAY_OPERATOR_NAME_PATH"),
  };
}

export function isClapayConfigured(): boolean {
  try {
    loadConfig();
    return true;
  } catch {
    return false;
  }
}

function getAtPath(value: unknown, path: string): unknown {
  if (!path) return value;
  return path.split(".").filter(Boolean).reduce<unknown>((current, key) => {
    if (!current || typeof current !== "object") return undefined;
    return (current as JsonRecord)[key];
  }, value);
}

function isAllowedClapayOperator(country: string, name: string): boolean {
  const normalizedCountry = country.trim().toUpperCase();
  const normalizedName = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  switch (normalizedCountry) {
    case "BF":
      return normalizedName.includes("orange") || normalizedName.includes("moov");
    case "TG":
      return normalizedName.includes("tmoney");
    case "CI":
      return normalizedName.includes("wave");
    default:
      return true;
  }
}

function fillTemplate(template: unknown, values: RequestValues): unknown {
  if (Array.isArray(template)) return template.map((value) => fillTemplate(value, values));
  if (template && typeof template === "object") {
    return Object.fromEntries(
      Object.entries(template).map(([key, value]) => [key, fillTemplate(value, values)]),
    );
  }
  if (typeof template !== "string") return template;

  const exactMatch = template.match(/^\{\{([A-Za-z][A-Za-z0-9_]*)\}\}$/);
  if (exactMatch) {
    const value = values[exactMatch[1]];
    if (value === undefined) throw new Error(`Variable Clapay inconnue : ${exactMatch[1]}`);
    return value;
  }
  return template.replace(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g, (_match, key: string) => {
    const value = values[key];
    if (value === undefined) throw new Error(`Variable Clapay inconnue : ${key}`);
    return String(value);
  });
}

function endpointUrl(config: ClapayConfig, path: string): URL {
  const url = new URL(path, config.baseUrl);
  if (url.origin !== config.baseUrl.origin) {
    throw new Error("Le chemin API Clapay doit rester sur l'hôte CLAPAY_API_BASE_URL");
  }
  return url;
}

async function callClapay(
  config: ClapayConfig,
  path: string,
  options: { method?: string; body?: unknown; query?: Record<string, string> } = {},
): Promise<unknown> {
  const url = endpointUrl(config, path);
  for (const [key, value] of Object.entries(options.query || {})) url.searchParams.set(key, value);

  const prefix = config.authPrefix
    ? `${config.authPrefix}${config.authPrefix.endsWith(" ") ? "" : " "}`
    : "";
  const headers: Record<string, string> = {
    Accept: "application/json",
    [config.authHeader]: `${prefix}${config.apiKey}`,
  };
  if (options.body !== undefined) headers["Content-Type"] = "application/json";

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  let response: Response;
  try {
    response = await fetch(url, {
      method: options.method || (options.body === undefined ? "GET" : "POST"),
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      signal: controller.signal,
    });
  } catch (error: any) {
    const reason = error?.name === "AbortError" ? "délai dépassé" : "connexion impossible";
    throw new Error(`Clapay : ${reason}`);
  } finally {
    clearTimeout(timeout);
  }

  const responseText = await response.text();
  let payload: unknown;
  try {
    payload = responseText ? JSON.parse(responseText) : {};
  } catch {
    throw new Error(`Clapay a renvoyé une réponse non JSON (HTTP ${response.status})`);
  }
  if (!response.ok) throw new Error(`Clapay a refusé la requête (HTTP ${response.status})`);
  return payload;
}

export async function getClapayOperators(country: string): Promise<ClapayOperator[]> {
  const config = loadConfig();
  const data = await callClapay(config, config.operatorsPath, {
    query: { [config.operatorsCountryParam]: country.trim().toUpperCase() },
  });
  const rawOperators = getAtPath(data, config.operatorsResponsePath);
  if (!Array.isArray(rawOperators)) {
    throw new Error("La réponse Clapay ne contient pas la liste d'opérateurs configurée");
  }

  const operators = rawOperators.map((operator) => {
    const id = getAtPath(operator, config.operatorIdPath);
    const name = getAtPath(operator, config.operatorNamePath);
    if ((typeof id !== "string" && typeof id !== "number") || typeof name !== "string") {
      throw new Error("Un opérateur Clapay ne contient pas l'identifiant ou le nom attendu");
    }
    return { id: String(id), name };
  });

  return operators.filter((operator) => isAllowedClapayOperator(country, operator.name));
}

export async function initiateClapayPayment(values: RequestValues): Promise<{
  signature: string;
  redirectUrl?: string;
  message?: string;
}> {
  const config = loadConfig();
  const body = fillTemplate(config.initiateBodyTemplate, values);
  const data = await callClapay(config, config.initiatePath, { method: "POST", body });
  const signature = getAtPath(data, config.initiateSignaturePath);
  if (typeof signature !== "string" && typeof signature !== "number") {
    throw new Error("La réponse Clapay ne contient pas la signature configurée");
  }
  const redirectValue = config.initiateRedirectPath
    ? getAtPath(data, config.initiateRedirectPath)
    : undefined;
  const messageValue = config.initiateMessagePath
    ? getAtPath(data, config.initiateMessagePath)
    : undefined;
  return {
    signature: String(signature),
    redirectUrl: typeof redirectValue === "string" ? redirectValue : undefined,
    message: typeof messageValue === "string" ? messageValue : undefined,
  };
}

export async function checkClapayPayment(signature: string): Promise<{
  rawStatus: string;
  status: "approved" | "rejected" | "pending";
}> {
  const config = loadConfig();
  const body = fillTemplate(config.statusBodyTemplate, { signature });
  const data = await callClapay(config, config.statusPath, { method: "POST", body });
  const rawStatusValue = getAtPath(data, config.statusValuePath);
  if (typeof rawStatusValue !== "string" && typeof rawStatusValue !== "number") {
    throw new Error("La réponse de vérification Clapay ne contient pas le statut configuré");
  }
  const rawStatus = String(rawStatusValue);
  const normalizedStatus = rawStatus.trim().toLowerCase();
  const status = config.successStatuses.has(normalizedStatus)
    ? "approved"
    : config.failureStatuses.has(normalizedStatus)
      ? "rejected"
      : "pending";
  return { rawStatus, status };
}