import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Check, ChevronRight, ClipboardCheck, Copy, ExternalLink, ImageIcon, Loader2, Phone, ShieldCheck } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { getCountriesForDisplay, type ApiCountry } from "@/lib/countries";
import { sanitizeDepositDisplayText } from "@/lib/deposit-display";
import type { PaymentNumber } from "@shared/schema";

type Provider = "ashtech" | "sendavapay" | "soleaspay" | "clapay";
type Operator = { id?: string; name?: string; operator?: string; slug?: string; code?: string; requiresOtp?: boolean; status?: string; provider?: Provider; manualNumber?: PaymentNumber };
type ProviderInfo = { provider: Provider; name: string; providers?: Array<{ provider: Provider; name: string }> };
type SoleaspayServiceResponse = {
  enabled: boolean;
  enabledCountries: string[];
  services: Record<string, Record<string, unknown>>;
};

const SOLEASPAY_PENDING_DEPOSIT_KEY = "soleaspay-pending-deposit";

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-between mb-7">
      {["Numéro de téléphone", "Informations de confirmation", "Paiement terminé"].map((label, i) => (
        <div key={label} className="flex items-center flex-1 last:flex-none">
          <div className={`flex flex-col items-center text-center ${i <= step ? "text-[#111827]" : "text-gray-400"}`}>
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${i <= step ? "border-[#111827] bg-[#FF7A14] text-[#111827] shadow-[0_2px_0_#111827]" : "border-gray-300 bg-white"}`}>
              {i < step ? <Check className="w-5 h-5" /> : i + 1}
            </div>
            <span className="text-[11px] leading-tight mt-1 w-24">{label}</span>
          </div>
          {i < 2 && <div className={`h-px flex-1 mx-1 mt-[-18px] ${i < step ? "bg-[#FF7A14]" : "bg-gray-300"}`} />}
        </div>
      ))}
    </div>
  );
}

export default function RobotPayPage() {
  const [, navigate] = useLocation();
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const phonePrefilled = useRef(false);
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const amount = Number(params.get("amount") || 0);
  const country = (params.get("country") || "").toUpperCase();
  const requestedProvider = (params.get("provider") || "").toLowerCase();
  const isSoleaspayFlow = requestedProvider === "soleaspay";
  const isManualFlow = requestedProvider === "manual";
  const forcedProvider = requestedProvider === "ashtech" || requestedProvider === "sendavapay" || requestedProvider === "clapay"
    ? requestedProvider
    : "";
  const feePaymentId = Number(params.get("feePaymentId") || 0) || undefined;
  const withdrawalAmount = Number(params.get("withdrawalAmount") || 0) || undefined;
  const isWithdrawalFeePayment = Boolean(feePaymentId);
  // 0 = operator, 1 = phone, 2 = confirmation, 3 = success
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState<Operator | null>(null);
  const [depositId, setDepositId] = useState<number | null>(null);
  const [transactionReference] = useState(() => `dépôt-${Math.floor(10000 + Math.random() * 90000)}`);
  const [paymentToken, setPaymentToken] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [otp, setOtp] = useState("");
  const [ashtechOtp, setAshtechOtp] = useState("");
  const [ashtechOtpRequired, setAshtechOtpRequired] = useState(false);
  const [ussd, setUssd] = useState("");
  const [message, setMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [status, setStatus] = useState("pending");
  const [screenshot, setScreenshot] = useState("");
  const [screenshotName, setScreenshotName] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [manualSubmitted, setManualSubmitted] = useState(false);

  const { data: loadedCountries, isError: countriesError } = useQuery<ApiCountry[]>({ queryKey: ["/api/countries"] });
  const countries = getCountriesForDisplay(loadedCountries, countriesError);
  const { data: providerInfo, isLoading: providerLoading, error: providerError } = useQuery<ProviderInfo>({
    queryKey: ["/api/deposit/provider", country, forcedProvider],
    queryFn: async () => {
      const providerQuery = forcedProvider ? `?provider=${encodeURIComponent(forcedProvider)}` : "";
      const res = await fetch(`/api/deposit/provider/${country}${providerQuery}`, { credentials: "include" });
      const data = await res.json();
      if (!res.ok) throw new Error(sanitizeDepositDisplayText(data.message, "Aucun canal automatique disponible"));
      return data;
    },
    enabled: !!country && !isSoleaspayFlow && !isManualFlow,
  });
  const provider: Provider = isSoleaspayFlow
    ? "soleaspay"
    : forcedProvider || providerInfo?.provider || "sendavapay";
  const activeProvider = operator?.provider || provider;
  const availableProviders = isSoleaspayFlow
    ? [{ provider: "soleaspay" as const, name: "SoleaPay" }]
    : providerInfo?.providers || (providerInfo ? [{ provider: providerInfo.provider, name: providerInfo.name }] : []);
  const countryInfo = countries.find(c => c.code === country && c.isActive);
  const currency = countryInfo?.currency || "FCFA";
  const phonePrefix = countryInfo && "phonePrefix" in countryInfo ? countryInfo.phonePrefix : "";
  const paymentPhone = phone.trim().startsWith("+")
    ? phone.trim()
    : phonePrefix
      ? `+${phonePrefix}${phone.replace(/\D/g, "")}`
      : phone.trim();

  const { data: manualNumbers = [], isLoading: manualNumbersLoading } = useQuery<PaymentNumber[]>({
    queryKey: ["/api/payment-numbers", country],
    queryFn: async () => {
      const res = await fetch(`/api/payment-numbers?country=${encodeURIComponent(country)}`, { credentials: "include" });
      if (!res.ok) throw new Error("Impossible de charger les numéros de paiement");
      return res.json();
    },
    enabled: !!country && !isSoleaspayFlow && (!forcedProvider || isManualFlow),
  });

  const { data: soleaspayServiceData, isLoading: soleaspayServicesLoading } = useQuery<SoleaspayServiceResponse>({
    queryKey: ["/api/soleaspay/services", country],
    queryFn: async () => {
      const res = await fetch("/api/soleaspay/services", { credentials: "include" });
      const data = await res.json();
      if (!res.ok) throw new Error(sanitizeDepositDisplayText(data.message, "Impossible de charger les opérateurs."));
      return data;
    },
    enabled: isSoleaspayFlow && !!country,
  });
  const soleaspayCountryEnabled = Boolean(
    soleaspayServiceData?.enabled &&
    soleaspayServiceData.enabledCountries?.some(code => code.toUpperCase() === country),
  );
  const soleaspayOperators: Operator[] = soleaspayCountryEnabled
    ? Object.keys(soleaspayServiceData?.services?.[country] || {}).map(name => ({
        id: name,
        name,
        provider: "soleaspay",
      }))
    : [];

  const { data: sendavaData, isLoading: sendavaLoading } = useQuery<{ success: boolean; data: Operator[] }>({
    queryKey: ["/api/sendavapay/operators", country],
    queryFn: async () => (await fetch(`/api/sendavapay/operators/${country}`, { credentials: "include" })).json(),
    enabled: !!providerInfo && availableProviders.some(item => item.provider === "sendavapay") && !!country,
  });
  const { data: ashtechData, isLoading: ashtechLoading } = useQuery<any[]>({
    queryKey: ["/api/ashtechpay/countries"],
    queryFn: async () => (await fetch("/api/ashtechpay/countries", { credentials: "include" })).json(),
    enabled: !!providerInfo && availableProviders.some(item => item.provider === "ashtech"),
  });
  const ashtechCountryList = Array.isArray(ashtechData)
    ? ashtechData
    : Array.isArray((ashtechData as any)?.countries)
      ? (ashtechData as any).countries
      : Array.isArray((ashtechData as any)?.data)
        ? (ashtechData as any).data
        : [];
  const ashtechOperators: Operator[] = availableProviders.some(item => item.provider === "ashtech")
    ? (ashtechCountryList.find((c: any) => c.code?.toUpperCase() === country)?.operators || [])
      .map((x: any) => typeof x === "string" ? { name: x, id: x, provider: "ashtech" as const } : { ...x, provider: "ashtech" as const })
    : [];
  const sendavaOperators: Operator[] = availableProviders.some(item => item.provider === "sendavapay")
    ? (sendavaData?.data || []).filter((x: Operator) => x.status === "online").map(x => ({ ...x, provider: "sendavapay" as const }))
    : [];
  const { data: clapayData, isLoading: clapayLoading } = useQuery<{ operators: Array<{ id: string; name: string }> }>({
    queryKey: ["/api/clapay/operators", country],
    queryFn: async () => {
      const res = await fetch(`/api/clapay/operators/${encodeURIComponent(country)}`, { credentials: "include" });
      const data = await res.json();
      if (!res.ok) throw new Error(sanitizeDepositDisplayText(data.message, "Impossible de charger les opérateurs."));
      return data;
    },
    enabled: !!providerInfo && availableProviders.some(item => item.provider === "clapay") && !!country,
  });
  const clapayOperators: Operator[] = (clapayData?.operators || []).map((item) => ({
    id: item.id,
    name: item.name,
    provider: "clapay",
  }));
  const automaticOperators: Operator[] = isSoleaspayFlow
    ? soleaspayOperators
    : [...ashtechOperators, ...sendavaOperators, ...clapayOperators];
  const operators: Operator[] = isManualFlow
    ? manualNumbers.map(number => ({
        id: `manual-${number.id}`,
        name: number.operatorName,
        manualNumber: number,
      }))
    : isSoleaspayFlow
      ? soleaspayOperators
      : forcedProvider
        ? automaticOperators
        : [
        ...automaticOperators,
        ...manualNumbers
          .map(number => ({
            id: `manual-${number.id}`,
            name: number.operatorName,
            manualNumber: number,
          })),
          ];
  const loadingOperators = isSoleaspayFlow
    ? soleaspayServicesLoading
     : manualNumbersLoading || providerLoading || sendavaLoading || ashtechLoading || clapayLoading;
  const sendavaMutation = useMutation({
    mutationFn: async () => {
      if (!operator?.id) throw new Error("Sélectionnez un opérateur");
      const created = await apiRequest("POST", "/api/sendavapay/create", {
        amount, country, operatorId: operator.id, operatorName: operator.name, payerPhone: paymentPhone,
        feePaymentId,
      });
      if (!created.ok) throw new Error((await created.json()).message || "Création impossible");
      const data = await created.json();
      setDepositId(data.depositId); setPaymentToken(data.paymentToken);
      const initiated = await apiRequest("POST", "/api/sendavapay/initiate", {
        paymentToken: data.paymentToken, payerCountry: country, operatorId: operator.id,
        depositId: data.depositId, payerPhone: paymentPhone,
      });
      if (!initiated.ok) throw new Error((await initiated.json()).message || "Initiation impossible");
      return initiated.json();
    },
    onSuccess: (data) => {
      setMessage(sanitizeDepositDisplayText(data.message, ""));
      if (data.requiresOtp && data.otpToken) { setOtpToken(data.otpToken); setUssd(data.ussdCode || ""); setStep(2); }
      else if (data.requiresRedirect && data.redirectUrl) { setRedirectUrl(data.redirectUrl); setStep(2); }
      else { setStep(2); setStatus("processing"); }
    },
     onError: (e: any) => toast({ title: "Paiement impossible", description: sanitizeDepositDisplayText(e.message, "Le paiement n'a pas pu être initié."), variant: "destructive" }),
  });
  const ashtechMutation = useMutation({
    mutationFn: async (otpCode?: string) => {
      if (!operator?.name) throw new Error("Sélectionnez un opérateur");
      const res = await apiRequest("POST", "/api/ashtechpay/collect", {
        amount, country, operator: operator.name, phone: phone.replace(/\D/g, ""),
        depositId: depositId || undefined, otp: otpCode || undefined,
        feePaymentId,
      });
      if (!res.ok) throw new Error((await res.json()).message || "Initiation impossible");
      return res.json();
    },
    onSuccess: (data) => {
       setAshtechOtpRequired(false);
      setDepositId(data.depositId); setMessage(sanitizeDepositDisplayText(data.message, "")); setUssd(data.ussdCode || "");
      if (data.waveUrl) setRedirectUrl(data.waveUrl);
      setStep(2); setStatus(data.status || "processing");
    },
    onError: (e: any) => {
      if (e.data?.requiresOtp) {
        setDepositId(e.data.depositId || depositId);
        setAshtechOtpRequired(true);
        setUssd(e.data.ussdCode || "");
        setMessage(sanitizeDepositDisplayText(e.message, "Composez le code indiqué puis saisissez votre OTP."));
        setStep(2);
        return;
      }
       toast({ title: "Paiement impossible", description: sanitizeDepositDisplayText(e.message, "Le paiement n'a pas pu être initié."), variant: "destructive" });
    },
  });
  const clapayMutation = useMutation({
    mutationFn: async () => {
      if (!operator?.id || !operator.name) throw new Error("Sélectionnez un opérateur");
      const res = await apiRequest("POST", "/api/clapay/initiate", {
        amount,
        country,
        operatorId: operator.id,
        operatorName: operator.name,
        phone: paymentPhone,
        feePaymentId,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(sanitizeDepositDisplayText(data.message, "Impossible d’initier le paiement."));
      return data as { depositId: number; redirectUrl?: string; message?: string };
    },
    onSuccess: (data) => {
      setDepositId(data.depositId);
      setRedirectUrl(data.redirectUrl || "");
      setMessage(sanitizeDepositDisplayText(data.message, "Confirmez le paiement sur votre téléphone."));
      setStatus("processing");
      setStep(2);
      queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
    },
    onError: (error: any) => toast({
      title: "Paiement impossible",
      description: sanitizeDepositDisplayText(error.message, "Le paiement n'a pas pu être initié."),
      variant: "destructive",
    }),
  });
  const soleaspayMutation = useMutation({
    mutationFn: async () => {
      if (!operator?.name) throw new Error("Sélectionnez un opérateur");
      const res = await apiRequest("POST", "/api/deposits", {
        amount,
        feePaymentId,
        accountName: user?.fullName || "",
        accountNumber: phone.trim() || user?.phone || "",
        paymentMethod: operator.name,
        country,
        useSoleaspay: true,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(sanitizeDepositDisplayText(data.message, "Dépôt non enregistré"));
      if (!data.deposit?.id) throw new Error("Le serveur n'a pas retourné de référence de dépôt.");
      try {
        sessionStorage.setItem(
          SOLEASPAY_PENDING_DEPOSIT_KEY,
          JSON.stringify({
            depositId: data.deposit.id,
            orderId: data.deposit.soleaspayOrderId || "",
          }),
        );
      } catch {
        // The payment status remains available from the server.
      }
      return data;
    },
    onSuccess: (data) => {
      setDepositId(data.deposit.id);
      setMessage(sanitizeDepositDisplayText(data.message, "Validez la demande de paiement sur votre téléphone."));
      setStatus("pending");
      setStep(2);
      queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
    },
    onError: (e: any) => toast({
      title: "Dépôt non enregistré",
      description: sanitizeDepositDisplayText(e.message, "Impossible d’enregistrer le dépôt."),
      variant: "destructive",
    }),
  });
  const manualMutation = useMutation({
    mutationFn: async () => {
      const number = operator?.manualNumber;
      if (!number) throw new Error("Numéro de paiement indisponible");
      if (!phone.trim()) throw new Error("Saisissez le numéro depuis lequel vous avez payé");
      if (!screenshot) throw new Error("Ajoutez la capture d'écran du paiement");
      const res = await apiRequest("POST", "/api/deposits", {
        amount,
        feePaymentId,
        accountName: user?.fullName || "",
        accountNumber: paymentPhone,
        paymentMethod: number.operatorName,
        country,
        paymentNumberId: number.id,
         channelName: number.paymentLink ? `${number.operatorName} - Lien de paiement` : `${number.operatorName} - ${number.phone}`,
        screenshot,
        paymentMessage: paymentMessage.trim() || null,
      });
      if (!res.ok) throw new Error((await res.json()).message || "Envoi impossible");
      return res.json();
    },
    onSuccess: (data) => {
      setDepositId(data.deposit?.id || null);
      setManualSubmitted(true);
      setStatus("pending");
      setStep(3);
      queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
    },
      onError: (e: any) => toast({ title: "Dépôt non enregistré", description: sanitizeDepositDisplayText(e.message, "Impossible d’enregistrer le dépôt."), variant: "destructive" }),
  });

  useEffect(() => {
    if (step !== 2 || !depositId || status === "approved" || status === "rejected") return;
    const timer = setInterval(async () => {
      try {
        const url = activeProvider === "ashtech"
          ? `/api/deposits/${depositId}/ashtechpay-status`
          : activeProvider === "soleaspay"
            ? `/api/deposits/${depositId}/verify`
            : activeProvider === "clapay"
              ? `/api/deposits/${depositId}/clapay-status`
              : `/api/deposits/${depositId}/sendavapay-status`;
        const res = await fetch(url, { credentials: "include" });
        const data = await res.json();
        if (!res.ok) return;
        setStatus(data.status);
        if (data.status === "approved") {
          setStep(3);
          clearInterval(timer);
          queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
          if (activeProvider === "soleaspay" || activeProvider === "clapay") refreshUser();
        }
        if (data.status === "rejected") {
          clearInterval(timer);
          toast({ title: "Paiement refusé", variant: "destructive" });
        }
      } catch {
        // Retry on the next poll after transient network errors.
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [step, depositId, status, activeProvider, refreshUser]);

  useEffect(() => {
    if (!phonePrefilled.current && user?.phone) {
      setPhone(user.phone);
      phonePrefilled.current = true;
    }
  }, [user?.phone]);

  const submitPhone = () => {
    if (!phone.trim()) { toast({ title: "Numéro requis", description: "Saisissez le numéro Mobile Money utilisé.", variant: "destructive" }); return; }
    if (!operator) { toast({ title: "Opérateur requis", description: "Sélectionnez votre opérateur.", variant: "destructive" }); return; }
    if (operator.manualNumber) manualMutation.mutate();
    else if (activeProvider === "ashtech") ashtechMutation.mutate(undefined);
    else if (activeProvider === "soleaspay") soleaspayMutation.mutate();
    else if (activeProvider === "clapay") clapayMutation.mutate();
    else sendavaMutation.mutate();
  };
  const submitOtp = async () => {
    if (activeProvider === "ashtech") {
      if (!ashtechOtp.trim()) return;
      ashtechMutation.mutate(ashtechOtp.trim());
      return;
    }
    const res = await apiRequest("POST", "/api/sendavapay/submit-otp", { otpToken, otp });
    if (!res.ok) { toast({ title: "OTP invalide", variant: "destructive" }); return; }
    setStep(2); setStatus("processing");
  };
  const busy = sendavaMutation.isPending || ashtechMutation.isPending || soleaspayMutation.isPending || clapayMutation.isPending || manualMutation.isPending;

  const copyPaymentNumber = async () => {
    const number = operator?.manualNumber;
    if (!number) return;
    try {
       const value = number.paymentLink || number.phone || "";
       await navigator.clipboard.writeText(value);
       toast({ title: number.paymentLink ? "Lien copié" : "Numéro copié", description: value });
    } catch {
       toast({ title: number.paymentLink || number.phone || "", description: number.paymentLink ? "Ouvrez le lien pour payer" : "Copiez ce numéro manuellement" });
    }
  };

  const handleScreenshotChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Fichier trop grand", description: "La capture doit faire 5 Mo maximum", variant: "destructive" });
      return;
    }
    setScreenshotName(file.name);
    const reader = new FileReader();
    reader.onload = () => setScreenshot(String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  const chooseOperator = (nextOperator: Operator) => {
    setOperator(nextOperator);
    setScreenshot("");
    setScreenshotName("");
    setPaymentMessage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setStep(1);
  };

   if (!amount || !country) return <main className="flex min-h-screen items-center justify-center bg-[#FF7A14] p-6 text-center text-[#111827]"><p className="rounded-xl border-2 border-[#111827] bg-white p-5 font-semibold shadow-[0_4px_0_#111827]">Données de dépôt invalides.</p></main>;
  return (
      <main className="min-h-screen bg-[#FF7A14] p-3 text-[#111827] sm:p-6">
      <div className="max-w-xl mx-auto">
         <div className="px-4 pb-5 pt-3 text-[#111827] sm:px-5 sm:pt-4 sm:pb-6">
           <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5b2500]">Montant du dépôt</p>
           <p className="mt-1 text-4xl font-extrabold tracking-tight">{amount.toLocaleString()} <span className="text-2xl font-bold">{currency}</span></p>
        </div>
         <section className="rounded-2xl border-2 border-[#111827] bg-white p-4 shadow-[0_5px_0_#111827,0_10px_18px_rgba(17,24,39,0.18)] sm:p-6">
          {step > 0 && <Stepper step={Math.max(0, Math.min(2, step - 1))} />}
          {step === 0 && (
            <div className="space-y-5">
               <p className="px-1 text-lg font-bold text-[#111827]">
                {isManualFlow
                  ? "Sélectionnez le numéro de paiement :"
                  : isSoleaspayFlow
                    ? "Sélectionnez votre opérateur Mobile Money :"
                    : "Sélectionnez le mode de paiement :"}
              </p>
               {loadingOperators ? <Loader2 className="w-7 h-7 animate-spin mx-auto text-[#FF7A14]" /> : operators.length === 0 ? <p className="text-center text-gray-500">{providerError instanceof Error ? sanitizeDepositDisplayText(providerError.message, "Aucun opérateur disponible pour ce pays.") : "Aucun opérateur disponible pour ce pays."}</p> : (
                  <div className="space-y-3">
                    {operators.map((op, i) => (
                      <button
                        key={`${op.id || op.name}-${i}`}
                        type="button"
                        onClick={() => chooseOperator(op)}
                        aria-label={`Sélectionner ${op.name || op.code || "cet opérateur"}`}
                        className={`group flex min-h-[68px] w-full items-center justify-between gap-4 rounded-xl border-2 border-[#111827] px-4 py-3.5 text-left transition duration-200 ease-out active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF7A14]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-5 ${
                          operator === op
                            ? "bg-[#fff1e6] ring-2 ring-[#FF7A14]/35 shadow-[0_3px_0_#111827,0_6px_12px_rgba(17,24,39,0.12)]"
                            : "bg-white shadow-[0_3px_0_#111827,0_6px_12px_rgba(17,24,39,0.12)] hover:-translate-y-0.5 hover:bg-[#fffaf6] hover:shadow-[0_5px_0_#111827,0_9px_16px_rgba(17,24,39,0.16)]"
                        }`}
                      >
                        <span className="min-w-0 flex-1 text-lg font-bold leading-snug text-[#111827]">
                          {op.name}
                        </span>
                        <ChevronRight
                          aria-hidden="true"
                          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                            operator === op
                              ? "translate-x-0.5 text-[#b84d00]"
                              : "text-gray-500 group-hover:translate-x-0.5 group-hover:text-[#b84d00]"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
              )}
            </div>
          )}
          {step === 1 && (
            <div className="space-y-5">
              {operator?.manualNumber && (
                <section
                  aria-label="Informations de paiement manuel"
                  className="mx-auto w-full max-w-md rounded-2xl border-2 border-[#111827] bg-white p-3 text-center shadow-[0_3px_0_#111827,0_7px_14px_rgba(17,24,39,0.14)]"
                >
                  <div className="mb-3 flex flex-col items-center border-b border-gray-200 pb-2.5 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      {operator.manualNumber.paymentLink ? "Lien de paiement" : "Numéro de paiement"}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-[#111827]">{operator.name || operator.code}</p>
                  </div>
                  {operator.manualNumber.paymentLink ? (
                    <div className="flex min-h-12 items-center justify-center rounded-xl border-2 border-[#111827] bg-white px-3 py-2 shadow-[0_2px_5px_rgba(17,24,39,0.12)]">
                      <a
                        href={operator.manualNumber.paymentLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-0 items-center justify-center gap-1.5 text-center text-sm font-semibold text-[#111827] underline decoration-[#FF7A14] underline-offset-2"
                      >
                        <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" /> Ouvrir le lien
                      </a>
                    </div>
                  ) : (
                    <div className="flex min-h-12 items-center justify-center rounded-xl border-2 border-[#111827] bg-white px-3 py-2 shadow-[0_2px_5px_rgba(17,24,39,0.12)]">
                      <p className="break-all text-center font-mono text-xl font-bold tabular-nums tracking-[0.08em] text-[#17324d]">
                        {operator.manualNumber.phone}
                      </p>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={copyPaymentNumber}
                    aria-label={operator.manualNumber.paymentLink
                      ? "Copier le lien de paiement"
                      : `Copier le numéro ${operator.manualNumber.phone}`}
                    className="mx-auto mt-2.5 flex h-10 min-w-28 items-center justify-center gap-1.5 rounded-[11px] border-2 border-[#111827] bg-[#FF7A14] px-4 text-xs font-bold text-[#111827] shadow-[0_3px_0_#111827,0_5px_10px_rgba(17,24,39,0.16)] transition duration-150 hover:brightness-95 active:translate-y-[2px] active:shadow-[0_1px_0_#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A14] focus-visible:ring-offset-2"
                  >
                    <Copy aria-hidden="true" className="h-4 w-4" /> Copier
                  </button>
                </section>
              )}
              <label htmlFor="robotpay-payer-phone" className="block text-sm font-semibold text-[#111827]">Votre numéro pour le paiement</label>
              <div className="flex items-center rounded-[11px] border-2 border-[#111827] px-3 shadow-[0_2px_5px_rgba(17,24,39,0.1)] transition focus-within:border-[#FF7A14] focus-within:ring-2 focus-within:ring-[#FF7A14]/20">
                <Phone className="h-4 w-4 text-[#111827]" />
                <span className="shrink-0 border-r border-gray-300 pr-2 text-[#111827]">+{phonePrefix}</span>
                <input id="robotpay-payer-phone" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 12))} type="tel" inputMode="numeric" placeholder="Numéro de téléphone" className="w-full px-3 py-3 text-[#111827] placeholder:text-gray-500 outline-none" />
              </div>
              {operator?.manualNumber && (
                <div className="space-y-4 border-t border-gray-200 pt-4 text-left">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#111827]">Capture d'écran du paiement <span className="text-red-500">*</span></p>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleScreenshotChange} className="hidden" />
                    <button onClick={() => fileInputRef.current?.click()} className="flex w-full flex-col items-center gap-2 rounded-[11px] border-2 border-dashed border-[#111827] bg-white py-5 transition duration-150 hover:border-[#FF7A14] hover:bg-[#fffaf6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A14] focus-visible:ring-offset-2">
                      {screenshot ? <><ClipboardCheck className="h-7 w-7 text-green-500" /><span className="text-sm text-green-600">{screenshotName}</span></> : <><ImageIcon className="h-7 w-7 text-gray-400" /><span className="text-sm text-gray-600">Ajouter la capture</span><span className="text-xs text-gray-400">JPG, PNG — max 5 Mo</span></>}
                    </button>
                    {screenshot && <img src={screenshot} alt="Aperçu de la capture" className="mt-2 max-h-44 w-full rounded-lg border object-contain" />}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#111827]">Message reçu après le paiement <span className="text-gray-500 font-normal">(recommandé)</span></label>
                    <textarea value={paymentMessage} onChange={e => setPaymentMessage(e.target.value)} rows={3} placeholder="Collez ici le SMS ou message de confirmation..." className="w-full resize-none rounded-[11px] border-2 border-[#111827] p-3 text-sm text-[#111827] placeholder:text-gray-500 outline-none transition focus:border-[#FF7A14] focus:ring-2 focus:ring-[#FF7A14]/20" />
                  </div>
                </div>
              )}
              <div className="flex items-center justify-center gap-5 pt-3">
                <button onClick={() => { setOperator(null); setStep(0); }} className="w-[43%] rounded-[11px] border-2 border-[#111827] bg-white py-3 font-semibold text-[#111827] shadow-[0_3px_0_#111827] transition active:translate-y-[2px] active:shadow-[0_1px_0_#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A14] focus-visible:ring-offset-2">&lt; Retour</button>
                <button onClick={submitPhone} disabled={busy || !phone.trim() || (!!operator?.manualNumber && !screenshot)} className="w-[43%] rounded-[11px] border-2 border-[#111827] bg-[#FF7A14] py-3 font-bold text-[#111827] shadow-[0_3px_0_#111827,0_5px_10px_rgba(17,24,39,0.16)] transition duration-150 hover:brightness-95 active:translate-y-[2px] active:shadow-[0_1px_0_#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">{busy ? <Loader2 className="mx-auto h-5 w-5 animate-spin" /> : operator?.manualNumber ? "Envoyer la demande" : "Continuer"}</button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-5 text-center">
              {redirectUrl ? (
                <>
                  <p className="text-gray-700">{message || "Ouvrez la page sécurisée pour terminer votre paiement."}</p>
                  <a
                    href={redirectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-[11px] border-2 border-[#111827] bg-[#FF7A14] py-3 font-bold text-[#111827] shadow-[0_3px_0_#111827,0_5px_10px_rgba(17,24,39,0.16)] transition hover:brightness-95 active:translate-y-[2px] active:shadow-[0_1px_0_#111827]"
                  >
                    Ouvrir la page de paiement
                  </a>
                </>
              ) : (otpToken || ashtechOtpRequired) ? (
                <>
                  {ussd && <p className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-3 text-center font-mono text-xl font-bold tracking-widest text-[#00a526]">{ussd}</p>}
                  <p className="text-sm text-gray-600">{ussd ? "Composez ce code sur votre téléphone pour obtenir le code OTP, puis saisissez-le ci-dessous." : "Un code OTP vous a été envoyé. Saisissez-le ci-dessous."}</p>
                  <input
                    value={activeProvider === "ashtech" ? ashtechOtp : otp}
                    onChange={e => activeProvider === "ashtech" ? setAshtechOtp(e.target.value.replace(/\D/g, "")) : setOtp(e.target.value)}
                    inputMode="numeric"
                    placeholder="Saisissez le code OTP"
                    className="w-full rounded-[11px] border-2 border-[#111827] p-3 text-center text-xl text-[#111827] outline-none transition focus:border-[#FF7A14] focus:ring-2 focus:ring-[#FF7A14]/20"
                  />
                  <button
                    onClick={submitOtp}
                    disabled={busy}
                    className="w-full rounded-[11px] border-2 border-[#111827] bg-[#FF7A14] py-3 font-bold text-[#111827] shadow-[0_3px_0_#111827,0_5px_10px_rgba(17,24,39,0.16)] transition hover:brightness-95 active:translate-y-[2px] active:shadow-[0_1px_0_#111827] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Confirmer
                  </button>
                </>
              ) : status === "rejected" ? (
                <>
                  <ShieldCheck className="mx-auto h-16 w-16 text-red-400" />
                  <p className="text-lg font-semibold text-red-600">Paiement refusé</p>
                  <p className="text-sm text-gray-500">Le paiement n’a pas été confirmé. Vous pouvez réessayer.</p>
                  <button
                    onClick={() => { setDepositId(null); setStatus("pending"); setStep(1); }}
                    className="w-full rounded-[11px] border-2 border-[#111827] bg-[#FF7A14] py-3 font-bold text-[#111827] shadow-[0_3px_0_#111827,0_5px_10px_rgba(17,24,39,0.16)] transition hover:brightness-95 active:translate-y-[2px] active:shadow-[0_1px_0_#111827]"
                  >
                    Réessayer
                  </button>
                </>
              ) : (
                <>
                  <ShieldCheck className="mx-auto h-16 w-16 animate-pulse text-green-400" />
                  <p className="text-lg font-semibold">Paiement en cours de confirmation</p>
                  <p className="text-sm text-gray-500">{message || "Validez la demande sur votre téléphone. La page se met à jour automatiquement."}</p>
                </>
              )}
            </div>
          )}
          {step === 3 && (
            manualSubmitted ? (
              <div className="space-y-5 py-5 text-center">
                <Check className="mx-auto h-24 w-24 rounded-full bg-green-500 p-4 text-white" />
                <h2 className="text-xl font-bold text-gray-900">Demande envoyée</h2>
                <p className="text-sm text-gray-600">Votre capture et les informations du paiement ont été transmises. Le dépôt sera crédité après vérification.</p>
                <div className="rounded-xl border-2 border-[#111827] bg-[#fffaf6] p-3 text-left text-sm leading-7 text-gray-800">
                  <b>Opérateur :</b> {operator?.name}<br />
                  <b>Montant :</b> {amount.toLocaleString()} {currency}<br />
                  <b>Statut :</b> En attente de validation
                </div>
                <button onClick={() => navigate("/")} className="text-lg font-semibold text-[#111827] underline decoration-[#FF7A14] underline-offset-4 hover:text-[#b84d00]">Retourner sur le site</button>
              </div>
            ) : (
              <div className="space-y-5 py-5 text-center">
                <div className="border-b border-gray-200 pb-3 text-left text-xl font-semibold text-gray-900">Paiement — {countryInfo?.name || country}</div>
                <p className="text-left text-2xl font-bold text-gray-900">{amount.toLocaleString()} {currency}</p>
                <Check className="mx-auto h-24 w-24 rounded-full bg-green-500 p-4 text-white" />
                <h2 className="text-xl font-bold text-gray-900">Votre paiement a été approuvé</h2>
                <div className="rounded-xl border-2 border-[#111827] bg-[#fffaf6] p-3 text-left text-sm leading-7 text-gray-800">
                  <b>Payeur :</b> {phone}<br />
                  <b>ID Transaction :</b> {transactionReference}<br />
                  <b>Date Paiement :</b> {new Date().toLocaleString("fr-FR")}
                </div>
                <p className="pt-6 text-gray-600">🔒 Paiement vérifié</p>
                <button onClick={() => navigate("/")} className="text-lg font-semibold text-[#111827] underline decoration-[#FF7A14] underline-offset-4 hover:text-[#b84d00]">Retourner sur le site</button>
              </div>
            )
          )}
        </section>
      </div>
    </main>
  );
}