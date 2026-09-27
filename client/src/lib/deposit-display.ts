type DepositMethodLike = { provider: string };

const METHOD_LABELS: Record<string, string> = {
  manual: "Transfert manuel",
  westpay: "Mobile Money par page sécurisée",
  inpay: "Mobile Money par redirection",
  ashtech: "Mobile Money avec code de validation",
  sendavapay: "Mobile Money avec confirmation sur téléphone",
  soleaspay: "Mobile Money avec confirmation sur téléphone",
  clapay: "Paiement Mobile Money",
};

const AGGREGATOR_NAMES = /clapay|ashtechpay|sendavapay|soleapay|westpay|inpay|omnipay|robotpay/gi;

export function getDepositMethodLabels(methods: readonly DepositMethodLike[]): string[] {
  const labels = methods.map(({ provider }) => METHOD_LABELS[provider.toLowerCase()] || "Paiement Mobile Money");
  const totals = new Map<string, number>();
  const seen = new Map<string, number>();

  for (const label of labels) totals.set(label, (totals.get(label) || 0) + 1);

  return labels.map((label) => {
    const total = totals.get(label) || 0;
    if (total < 2) return label;
    const ordinal = (seen.get(label) || 0) + 1;
    seen.set(label, ordinal);
    return `${label} (${ordinal})`;
  });
}

export function sanitizeDepositDisplayText(value: unknown, fallback: string): string {
  if (typeof value !== "string") return fallback;
  const sanitized = value.replace(AGGREGATOR_NAMES, "le service de paiement").trim();
  return sanitized || fallback;
}