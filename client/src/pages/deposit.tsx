import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  ChevronLeft, Info, Copy, CheckCircle, Upload, Phone, Loader2,
  ImageIcon, ArrowRight, Zap, RefreshCw, ExternalLink,
} from "lucide-react";
import { Link } from "wouter";
import { getCountriesForDisplay, parseOperators, type ApiCountry } from "@/lib/countries";
import type { PaymentNumber } from "@shared/schema";
import chargepointLogo from "@assets/chargepoint_1790147948102.jpg";
import chargepointPromo from "@/assets/auth-chargepoint-combined.png";

const TON_GREEN = "#FF7A14";
const TON_GREEN_DARK = "#E85D00";
const TON_GRADIENT = `linear-gradient(112deg, ${TON_GREEN} 0%, ${TON_GREEN_DARK} 100%)`;
const SOLEASPAY_PENDING_DEPOSIT_KEY = "soleaspay-pending-deposit";

const DEPOSIT_STEP_STYLES = `
  .deposit-step-shell {
    min-height: 100dvh;
    max-width: 512px;
    margin: 0 auto;
    overflow: hidden;
    background: #fff8f2;
    color: #111827;
    font-family: Inter, Arial, sans-serif;
  }
  .deposit-step-shell .deposit-step-header {
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 2px solid #111827;
    background: #fff8f2;
  }
  .deposit-step-shell .deposit-step-back {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 42px;
    padding: 8px 12px 8px 8px;
    border: 2px solid #111827;
    border-radius: 11px;
    background: #fff;
    color: #111827;
    font-size: 15px;
    font-weight: 800;
    box-shadow: 0 3px 0 #111827;
  }
  .deposit-step-shell .deposit-step-back:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #111827;
  }
  .deposit-step-shell .deposit-step-history {
    min-height: 40px;
    padding: 8px 12px;
    border: 2px solid #111827;
    border-radius: 11px;
    background: #fff;
    color: ${TON_GREEN_DARK};
    font-size: 12px;
    font-weight: 800;
  }
  .deposit-step-shell .deposit-step-content {
    padding: 16px;
  }
  .deposit-step-shell .deposit-step-summary {
    border: 2px solid #111827;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 4px 0 #111827;
  }
  .deposit-step-shell .deposit-step-card {
    border: 2px solid #111827;
    border-radius: 14px;
    background: #fff;
  }
  .deposit-step-shell .deposit-step-card-orange {
    border-color: ${TON_GREEN};
    background: #fff3e8;
  }
  .deposit-step-shell .deposit-step-field {
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  .deposit-step-shell .deposit-step-primary {
    min-height: 54px;
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: ${TON_GREEN} !important;
    color: #111827 !important;
    font-weight: 800 !important;
    box-shadow: 0 4px 0 #111827;
  }
  .deposit-step-shell .deposit-step-primary:active:not(:disabled) {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #111827;
  }
  .deposit-step-shell .deposit-step-secondary {
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: #fff !important;
    color: #111827 !important;
    font-weight: 800 !important;
  }
  .deposit-step-shell .deposit-step-icon {
    display: grid;
    width: 76px;
    height: 76px;
    place-items: center;
    border: 2px solid #111827;
    border-radius: 50%;
    background: #fff3e8;
  }
  .deposit-step-shell .deposit-step-icon svg {
    color: ${TON_GREEN};
  }
  .deposit-step-shell .deposit-step-operator {
    border: 2px solid #d1d5db !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  .deposit-step-shell .deposit-step-operator-selected {
    border-color: ${TON_GREEN} !important;
    background: #fff3e8 !important;
  }
  .deposit-step-shell .deposit-step-otp {
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  @media (max-width: 360px) {
    .deposit-step-shell .deposit-step-header { padding-right: 12px; padding-left: 12px; }
    .deposit-step-shell .deposit-step-content { padding: 12px; }
    .deposit-step-shell .deposit-step-back { font-size: 14px; }
  }
`;

function DepositStepStyles() {
  return <style>{DEPOSIT_STEP_STYLES}</style>;
}

type Step =
  | "amount"
  | "select"
  | "form"
  | "sv-operator"
  | "sv-waiting"
  | "sv-otp"
  | "sv-redirect"
  | "soleaspay-operator"
  | "soleaspay-waiting"
  | "westpay"
  | "ashtech-operator"
  | "ashtech-otp"
  | "ashtech-redirect"
  | "ashtech-waiting";

interface SvOperator {
  id: string;
  name: string;
  requiresOtp: boolean;
  status: string;
}

interface SoleaspayServiceResponse {
  enabled: boolean;
  services: Record<string, Record<string, number>>;
  enabledCountries: string[];
}

interface AshtechCountry {
  code: string;
  name: string;
  currency: string;
  operators: (string | { name?: string; code?: string; id?: string })[];
}

export default function DepositPage() {
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<Step>("amount");
  const [selectedNumber, setSelectedNumber] = useState<PaymentNumber | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const [amount, setAmount] = useState<number | "">("");
  const [depositCountry, setDepositCountry] = useState("");
  const [senderPhone, setSenderPhone] = useState(user?.phone || "");
  const [screenshot, setScreenshot] = useState<string>("");
  const [screenshotName, setScreenshotName] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [reference, setReference] = useState("");

  // SendavaPay state
  const [svCountry, setSvCountry] = useState(user?.country || "");
  const [svPhone, setSvPhone] = useState("");
  const [svOperator, setSvOperator] = useState<SvOperator | null>(null);
  const [svDepositId, setSvDepositId] = useState<number | null>(null);
  const [svPaymentToken, setSvPaymentToken] = useState<string>("");
  const [svOtpToken, setSvOtpToken] = useState<string>("");
  const [svOtp, setSvOtp] = useState<string>("");
  const [svUssdCode, setSvUssdCode] = useState<string>("");
  const [svOtpMessage, setSvOtpMessage] = useState<string>("");
  const [svRedirectUrl, setSvRedirectUrl] = useState<string>("");
  const [svStatus, setSvStatus] = useState<string>("");
  const [svPolling, setSvPolling] = useState(false);

  // SoleaPay state
  const [soleaspayOperator, setSoleaspayOperator] = useState("");
  const [soleaspayPhone, setSoleaspayPhone] = useState(user?.phone || "");
  const [soleaspayDepositId, setSoleaspayDepositId] = useState<number | null>(null);
  const [soleaspayStatus, setSoleaspayStatus] = useState("");
  const [soleaspayMessage, setSoleaspayMessage] = useState("");
  const [soleaspayPolling, setSoleaspayPolling] = useState(false);

  // AshtechPay state
  const [ashtechCountry, setAshtechCountry] = useState(user?.country || "");
  const [ashtechPhone, setAshtechPhone] = useState("");
  const [ashtechOperator, setAshtechOperator] = useState("");
  const [ashtechDepositId, setAshtechDepositId] = useState<number | null>(null);
  const [ashtechOtp, setAshtechOtp] = useState("");
  const [ashtechUssdCode, setAshtechUssdCode] = useState("");
  const [ashtechMessage, setAshtechMessage] = useState("");
  const [ashtechWaveUrl, setAshtechWaveUrl] = useState("");
  const [ashtechStatus, setAshtechStatus] = useState("");
  const [ashtechPolling, setAshtechPolling] = useState(false);

  const country = depositCountry;

  const { data: loadedCountries, isError: countriesError } = useQuery<ApiCountry[]>({
    queryKey: ["/api/countries"],
  });
  const apiCountries = getCountriesForDisplay(loadedCountries, countriesError);

  const countryInfo = apiCountries.find(c => c.code === country && c.isActive);
  const currency = countryInfo?.currency || "FCFA";

  const { data: platformSettings } = useQuery<Record<string, string>>({
    queryKey: ["/api/settings"],
  });
  const MIN_DEPOSIT = Math.max(3500, parseInt(platformSettings?.minDeposit || "3500"));
  const depositPresets = [
    3500, 5000, 10000, 25000, 50000,
    100000, 200000, 300000, 400000, 500000,
  ].filter((preset) => preset >= MIN_DEPOSIT);
  const sendavapayEnabled = platformSettings?.sendavapayEnabled === "true";
  const sendavapayChannelName = platformSettings?.sendavapayChannelName || "SendavaPay";
  const westpayEnabled = platformSettings?.westpayEnabled === "true";
  const westpayChannelName = platformSettings?.westpayChannelName || "WestPay";
  const westpayCountries = platformSettings?.westpayCountries || "";
  const westpayAvailable = westpayEnabled && (
    !westpayCountries || westpayCountries.split(",").map(c => c.trim().toUpperCase()).includes(country.toUpperCase())
  );
  const inpayEnabled = platformSettings?.inpayEnabled === "true";
  const inpayChannelName = platformSettings?.inpayChannelName || "InPay";
  const inpayCountries = platformSettings?.inpayCountries || "";
  const inpayAvailable = inpayEnabled && inpayCountries
    .split(",")
    .map(c => c.trim().toUpperCase())
    .includes(country.toUpperCase());
  const soleaspayEnabled = platformSettings?.soleaspayEnabled === "true";
  const soleaspayChannelName = platformSettings?.soleaspayChannelName || "SoleaPay";
  const soleaspayCountries = platformSettings?.soleaspayCountries || "";
  const soleaspayAvailable = soleaspayEnabled && soleaspayCountries
    .split(",")
    .map(c => c.trim().toUpperCase())
    .includes(country.toUpperCase());
  const ashtechEnabled = platformSettings?.ashtechEnabled === "true";
  const ashtechChannelName = platformSettings?.ashtechChannelName || "AshtechPay";
  const ashtechCountriesSetting = platformSettings?.ashtechCountries || "";
  const ashtechCountryAllowed = !ashtechCountriesSetting ||
    ashtechCountriesSetting.split(",").map(c => c.trim().toUpperCase()).includes(country.toUpperCase());
  const ashtechAvailable = ashtechEnabled && ashtechCountryAllowed;

  const activeDepositCountries = apiCountries.filter(c => c.isActive) as Array<{ code: string; name: string; currency: string }>;
  const ashtechConfiguredCountryCodes = ashtechCountriesSetting
    ? ashtechCountriesSetting.split(",").map(c => c.trim().toUpperCase()).filter(Boolean)
    : null;

  const { data: paymentNumbersList = [], isLoading: numbersLoading } = useQuery<PaymentNumber[]>({
    queryKey: ["/api/payment-numbers", country],
    queryFn: async () => {
      const res = await fetch(`/api/payment-numbers?country=${country}`, { credentials: "include" });
       if (!res.ok) throw new Error("Impossible de charger les numéros de paiement");
      return res.json();
    },
    enabled: !!country,
  });
  const normalizePaymentMethod = (value: unknown) =>
    String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
  const countryManualMethods = Array.from(new Set(
    parseOperators(countryInfo?.operators || "[]")
      .filter((name): name is string => typeof name === "string")
      .map(name => name.trim())
      .filter(Boolean),
  )).map(name => ({
    name,
    configured: paymentNumbersList.some(number =>
      normalizePaymentMethod(number.operatorName) === normalizePaymentMethod(name) &&
      Boolean(number.phone?.trim() || number.paymentLink?.trim()),
    ),
  }));

  // SendavaPay: load operators for selected country
  const { data: svOperatorsData, isLoading: svOperatorsLoading } = useQuery<{ success: boolean; data: SvOperator[] }>({
    queryKey: ["/api/sendavapay/operators", svCountry],
    queryFn: async () => {
      const res = await fetch(`/api/sendavapay/operators/${svCountry}`, { credentials: "include" });
       if (!res.ok) throw new Error("Impossible de charger les opérateurs SendavaPay");
      return res.json();
    },
    enabled: step === "sv-operator" && !!svCountry,
  });
  const svOperators = (svOperatorsData?.data || []).filter(op => op.status === "online");

  const { data: soleaspayServiceData, isLoading: soleaspayServicesLoading } = useQuery<SoleaspayServiceResponse>({
    queryKey: ["/api/soleaspay/services"],
    queryFn: async () => {
      const res = await fetch("/api/soleaspay/services", { credentials: "include" });
      if (!res.ok) throw new Error("Impossible de charger les opérateurs SoleaPay");
      return res.json();
    },
    enabled: step === "soleaspay-operator" && soleaspayAvailable,
  });
  const soleaspayOperators = Object.keys(
    soleaspayServiceData?.services?.[country.toUpperCase()] || {},
  );

  const { data: ashtechCountries = [], isLoading: ashtechCountriesLoading } = useQuery<AshtechCountry[]>({
    queryKey: ["/api/ashtechpay/countries"],
    queryFn: async () => {
      const res = await fetch("/api/ashtechpay/countries", { credentials: "include" });
      if (!res.ok) throw new Error("Impossible de charger les opérateurs");
      return res.json();
    },
    enabled: step === "ashtech-operator" && ashtechAvailable,
  });
  const availableAshtechCountries = ashtechCountries.filter(c =>
    activeDepositCountries.some(active => active.code.toUpperCase() === c.code.toUpperCase()) &&
    (!ashtechConfiguredCountryCodes || ashtechConfiguredCountryCodes.includes(c.code.toUpperCase()))
  );
  const selectedAshtechCountry = availableAshtechCountries.find(c => c.code === ashtechCountry);
  const ashtechOperators = selectedAshtechCountry?.operators || [];

  // Poll deposit status
  useEffect(() => {
    if (step !== "sv-waiting" || !svDepositId || !svPolling) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/deposits/${svDepositId}/sendavapay-status`, { credentials: "include" });
        const data = await res.json();
        setSvStatus(data.status);
        if (data.status === "approved") {
          clearInterval(interval);
          setSvPolling(false);
          toast({ title: "Paiement confirmé !", description: "Votre solde a été crédité." });
          refreshUser();
          queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
          // reset
          setStep("amount");
          setAmount("");
          setSvOperator(null);
          setSvDepositId(null);
          setSvPaymentToken("");
          setSvOtpToken("");
          setSvOtp("");
          setSvStatus("");
        } else if (data.status === "rejected") {
          clearInterval(interval);
          setSvPolling(false);
          toast({ title: "Paiement échoué", description: "Le paiement a été refusé ou annulé.", variant: "destructive" });
          setStep("sv-operator");
        }
      } catch (e) {
        // ignore polling errors
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [step, svDepositId, svPolling]);

  useEffect(() => {
    if (step !== "ashtech-waiting" || !ashtechDepositId || !ashtechPolling) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/deposits/${ashtechDepositId}/ashtechpay-status`, { credentials: "include" });
        const data = await res.json();
        setAshtechStatus(data.status);
        if (data.status === "approved") {
          clearInterval(interval);
          setAshtechPolling(false);
          toast({ title: "Paiement confirmé !", description: "Votre solde a été crédité." });
          refreshUser();
          queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
          setStep("amount");
          setAmount("");
          setAshtechDepositId(null);
          setAshtechStatus("");
        } else if (data.status === "rejected") {
          clearInterval(interval);
          setAshtechPolling(false);
          toast({ title: "Paiement échoué", description: "Le paiement a été refusé ou annulé.", variant: "destructive" });
          setStep("ashtech-operator");
        }
      } catch {
        // Keep polling; a transient provider error must not lose the payment flow.
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [step, ashtechDepositId, ashtechPolling]);

  useEffect(() => {
    if (!soleaspayPhone && user?.phone) setSoleaspayPhone(user.phone);
  }, [soleaspayPhone, user?.phone]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const returnStatus = params.get("soleaspayReturn");
    if (returnStatus !== "success" && returnStatus !== "failure") return;

    const returnedOrderId = params.get("orderId");
    let resumed = false;
    try {
      const pendingValue = sessionStorage.getItem(SOLEASPAY_PENDING_DEPOSIT_KEY);
      const pending = pendingValue ? JSON.parse(pendingValue) : null;
      const pendingDepositId = Number(pending?.depositId);
      const pendingOrderId = typeof pending?.orderId === "string" ? pending.orderId : "";
      if (
        Number.isInteger(pendingDepositId) &&
        pendingDepositId > 0 &&
        (!returnedOrderId || pendingOrderId === returnedOrderId)
      ) {
        setSoleaspayDepositId(pendingDepositId);
        setSoleaspayStatus("pending");
        setSoleaspayMessage(
          returnStatus === "success"
            ? "Retour de SoleaPay reçu. Vérification du paiement en cours..."
            : "Retour de SoleaPay reçu. Vérification de l'état final du paiement...",
        );
        setSoleaspayPolling(true);
        setStep("soleaspay-waiting");
        resumed = true;
      }
    } catch (error) {
      console.warn("[soleaspay] Could not resume pending deposit:", error);
    }

    if (!resumed) {
      toast({
        title: "Retour SoleaPay reçu",
        description: "Consultez l'historique des dépôts pour vérifier le statut du paiement.",
      });
    }

    params.delete("soleaspayReturn");
    params.delete("orderId");
    const search = params.toString();
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`,
    );
  }, [toast]);

  useEffect(() => {
    if (step !== "soleaspay-waiting" || !soleaspayDepositId || !soleaspayPolling) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/deposits/${soleaspayDepositId}/verify`, { credentials: "include" });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Vérification SoleaPay impossible");
        if (data.status) setSoleaspayStatus(data.status);
        if (data.status === "approved" || data.status === "rejected") {
          clearInterval(interval);
          setSoleaspayPolling(false);
          try {
            sessionStorage.removeItem(SOLEASPAY_PENDING_DEPOSIT_KEY);
          } catch {
            // The server-side payment status remains authoritative.
          }
          if (data.status === "approved") {
            toast({ title: "Paiement confirmé !", description: "Votre solde a été crédité." });
            refreshUser();
            queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
          }
        }
      } catch {
        // Continue polling after transient provider or network errors.
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [step, soleaspayDepositId, soleaspayPolling]);

  // ── Mutations ───────────────────────────────────────────────────────────────

  const copyPhone = async (number: PaymentNumber) => {
    const value = number.paymentLink || number.phone || "";
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(number.id);
      setTimeout(() => setCopiedId(null), 2000);
      toast({ title: number.paymentLink ? "Lien copié !" : "Numéro copié !", description: `${value} copié` });
    } catch {
      toast({ title: number.paymentLink || "Numéro: " + number.phone, description: number.paymentLink ? "Ouvrez le lien pour payer" : "Copiez ce numéro pour effectuer le transfert" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Fichier trop grand", description: "Maximum 5 Mo", variant: "destructive" });
      return;
    }
    setScreenshotName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => setScreenshot(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const depositMutation = useMutation({
    mutationFn: async () => {
      if (!selectedNumber) throw new Error("Aucun numéro sélectionné");
      const res = await apiRequest("POST", "/api/deposits", {
        amount: Number(amount),
        accountName: user?.fullName || "",
        accountNumber: senderPhone,
        paymentMethod: selectedNumber.operatorName,
        country,
        paymentNumberId: selectedNumber.id,
        channelName: selectedNumber.paymentLink
          ? `${selectedNumber.operatorName} - Lien de paiement`
          : `${selectedNumber.operatorName} - ${selectedNumber.phone}`,
        screenshot: screenshot || null,
        paymentMessage: paymentMessage || null,
        reference: reference || null,
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Dépôt non enregistré");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Demande envoyée !", description: "Votre dépôt est en attente de validation" });
      queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
      refreshUser();
      setStep("amount");
      setSelectedNumber(null);
      setAmount("");
      setSenderPhone(user?.phone || "");
      setScreenshot("");
      setScreenshotName("");
      setPaymentMessage("");
      setReference("");
    },
    onError: (e: any) => toast({ title: "Dépôt non enregistré", description: e.message, variant: "destructive" }),
  });

  // WestPay: create deposit + get redirect URL
  const [wpDepositId, setWpDepositId] = useState<number | null>(null);
  const [wpStatus, setWpStatus] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("wp_status");
    const did = params.get("wp_depositId");
    if (s) {
      setWpStatus(s);
      if (did) setWpDepositId(parseInt(did));
      // clean URL
      window.history.replaceState({}, "", "/deposit");
      if (s === "success") {
        toast({ title: "Paiement en cours de confirmation", description: "Votre dépôt sera crédité dès confirmation WestPay." });
        queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
      }
    }
  }, []);

  const soleaspayInitiateMutation = useMutation({
    mutationFn: async () => {
      const phone = soleaspayPhone.trim() || user?.phone || "";
      if (!soleaspayOperator || !phone) {
        throw new Error("Sélectionnez un opérateur et saisissez votre numéro Mobile Money");
      }
      const res = await apiRequest("POST", "/api/deposits", {
        amount: Number(amount),
        accountName: user?.fullName || "",
        accountNumber: phone,
        paymentMethod: soleaspayOperator,
        country,
        useSoleaspay: true,
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Dépôt SoleaPay non enregistré");
      }
      return res.json();
    },
    onSuccess: (data) => {
      if (!data.deposit?.id) {
        toast({
          title: "Dépôt SoleaPay non enregistré",
          description: "Le serveur n'a pas retourné de référence de dépôt.",
          variant: "destructive",
        });
        return;
      }
      try {
        sessionStorage.setItem(
          SOLEASPAY_PENDING_DEPOSIT_KEY,
          JSON.stringify({
            depositId: data.deposit.id,
            orderId: data.deposit.soleaspayOrderId || "",
          }),
        );
      } catch (error) {
        console.warn("[soleaspay] Could not save pending deposit for return:", error);
      }
      setSoleaspayDepositId(data.deposit.id);
      setSoleaspayStatus("pending");
      setSoleaspayMessage(data.message || "Validez la demande de paiement sur votre téléphone.");
      setSoleaspayPolling(true);
      setStep("soleaspay-waiting");
      queryClient.invalidateQueries({ queryKey: ["/api/deposits/history"] });
    },
    onError: (error: any) => toast({
      title: `Dépôt ${soleaspayChannelName} non enregistré`,
      description: error.message,
      variant: "destructive",
    }),
  });

  const wpInitiateMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/deposits", {
        amount: Number(amount),
        accountName: user?.fullName || "",
        accountNumber: user?.phone || "",
        paymentMethod: "WestPay",
        country,
        useWestpay: true,
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Dépôt WestPay non enregistré");
      }
      return res.json();
    },
    onSuccess: (data) => {
      if (data.westpayUrl) {
        window.location.href = data.westpayUrl;
      }
    },
    onError: (e: any) => toast({ title: "Dépôt WestPay non enregistré", description: e.message, variant: "destructive" }),
  });

  const inpayInitiateMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/deposits", {
        amount: Number(amount),
        accountName: user?.fullName || "",
        accountNumber: user?.phone || "",
        paymentMethod: "InPay",
        country,
        useInpay: true,
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Dépôt InPay non enregistré");
      }
      return res.json();
    },
    onSuccess: (data) => {
      if (data.inpayUrl) {
        window.location.href = data.inpayUrl;
      }
    },
    onError: (e: any) => toast({ title: `Dépôt ${inpayChannelName} non enregistré`, description: e.message, variant: "destructive" }),
  });

  const ashtechCollectMutation = useMutation({
    mutationFn: async (otp?: string) => {
      if (!ashtechOperator || !ashtechPhone.trim()) throw new Error("Sélectionnez un opérateur et saisissez votre numéro");
      const res = await apiRequest("POST", "/api/ashtechpay/collect", {
        amount: Number(amount),
        country: ashtechCountry,
        operator: ashtechOperator,
        phone: ashtechPhone.trim(),
        depositId: ashtechDepositId || undefined,
        otp: otp || undefined,
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Dépôt AshtechPay non enregistré");
      }
      return res.json();
    },
    onSuccess: (data: any) => {
      setAshtechDepositId(data.depositId);
      setAshtechMessage(data.message || "");
      setAshtechUssdCode(data.ussdCode || "");
      if (data.waveUrl) {
        setAshtechWaveUrl(data.waveUrl);
        setStep("ashtech-redirect");
      } else if (data.requiresOtp) {
        setStep("ashtech-otp");
      } else {
        setAshtechPolling(true);
        setAshtechStatus(data.status || "pending");
        setStep("ashtech-waiting");
      }
    },
    onError: (e: any) => {
      if (e.data?.requiresOtp) {
        setAshtechDepositId(e.data.depositId || ashtechDepositId);
        setAshtechUssdCode(e.data.ussdCode || "");
        setAshtechMessage(e.message || "Composez le code indiqué puis saisissez le code OTP.");
        setAshtechOtp("");
        setStep("ashtech-otp");
        return;
      }
      toast({ title: `Dépôt ${ashtechChannelName} non enregistré`, description: e.message, variant: "destructive" });
    },
  });

  // SendavaPay: create + initiate
  const svInitiateMutation = useMutation({
    mutationFn: async () => {
      if (!svOperator) throw new Error("Sélectionnez un opérateur");
      // Step 1: create payment on backend
      const createRes = await apiRequest("POST", "/api/sendavapay/create", {
        amount: Number(amount),
        country: svCountry,
        operatorId: svOperator.id,
        operatorName: svOperator.name,
        payerPhone: svPhone,
      });
      if (!createRes.ok) {
        const d = await createRes.json();
        throw new Error(d.message || "Création du paiement impossible");
      }
      const createData = await createRes.json();
      setSvDepositId(createData.depositId);
      setSvPaymentToken(createData.paymentToken);

      // Step 2: initiate payment
      const initRes = await apiRequest("POST", "/api/sendavapay/initiate", {
        paymentToken: createData.paymentToken,
        payerCountry: svCountry,
        operatorId: svOperator.id,
        depositId: createData.depositId,
        payerPhone: svPhone,
      });
      if (!initRes.ok) {
        const d = await initRes.json();
        throw new Error(d.message || "Initiation du paiement impossible");
      }
      return initRes.json();
    },
    onSuccess: (data: any) => {
      const isWave = svOperator?.name?.toLowerCase().includes("wave");
      if (data.requiresRedirect && data.redirectUrl && isWave) {
        // Seul Wave nécessite une redirection vers une page externe
        setSvRedirectUrl(data.redirectUrl);
        setStep("sv-redirect");
      } else if (data.requiresRedirect && !isWave) {
        // Les autres opérateurs (MTN, Moov, etc.) envoient un push USSD directement
        // sur le téléphone — pas besoin de redirection, on attend juste le webhook
        setSvPolling(true);
        setStep("sv-waiting");
      } else if (data.requiresOtp && data.otpToken) {
        // Orange Money (BF, CI, GN, ML, SN) — user must dial USSD then enter OTP
        setSvOtpToken(data.otpToken);
        setSvUssdCode(data.ussdCode || "");
        setSvOtpMessage(data.message || "");
        setStep("sv-otp");
      } else if (data.success) {
        // Standard push: invite sent directly to phone — wait for webhook
        setSvPolling(true);
        setStep("sv-waiting");
      } else {
        toast({ title: "Paiement SendavaPay impossible", description: data.error || data.message || "Le paiement n'a pas pu être initié.", variant: "destructive" });
      }
    },
    onError: (e: any) => toast({ title: "Paiement SendavaPay impossible", description: e.message, variant: "destructive" }),
  });

  // SendavaPay: retry failed payment
  const svRetryMutation = useMutation({
    mutationFn: async () => {
      if (!svPaymentToken) throw new Error("Token de paiement manquant");
      const res = await apiRequest("POST", "/api/sendavapay/retry", {
        paymentToken: svPaymentToken,
        depositId: svDepositId,
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Nouvelle tentative impossible");
      }
      return res.json();
    },
    onSuccess: () => {
      // Reset to operator selection to re-initiate
      setSvOtp("");
      setSvOtpToken("");
      setSvStatus("");
      setSvPolling(false);
      setStep("sv-operator");
      toast({ title: "Prêt à réessayer", description: "Sélectionnez un opérateur et relancez le paiement." });
    },
    onError: (e: any) => toast({ title: "Nouvelle tentative impossible", description: e.message, variant: "destructive" }),
  });

  // SendavaPay: submit OTP
  const svOtpMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/sendavapay/submit-otp", {
        otpToken: svOtpToken,
        otp: svOtp,
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Validation du code OTP impossible");
      }
      return res.json();
    },
    onSuccess: () => {
      setSvPolling(true);
      setStep("sv-waiting");
    },
    onError: (e: any) => toast({ title: "Validation du code OTP impossible", description: e.message, variant: "destructive" }),
  });

  const handleAmountNext = () => {
    if (!amount || Number(amount) < MIN_DEPOSIT) {
      toast({
        title: "Montant invalide",
        description: `Le minimum est de ${MIN_DEPOSIT.toLocaleString()} ${currency}`,
        variant: "destructive",
      });
      return;
    }
    setStep("select");
  };

  const openRobotPay = () => {
    if (!depositCountry) {
      toast({ title: "Pays requis", description: "Sélectionnez le pays du paiement.", variant: "destructive" });
      return;
    }
    if (soleaspayAvailable) {
      setSoleaspayOperator("");
      setStep("soleaspay-operator");
      return;
    }
    if (inpayAvailable) {
      if (!Number.isInteger(Number(amount)) || Number(amount) % 5 !== 0) {
        toast({
          title: "Montant InPay invalide",
          description: "Utilisez un montant entier multiple de 5 : 300, 305, 310…",
          variant: "destructive",
        });
        return;
      }
      inpayInitiateMutation.mutate();
      return;
    }
    if (westpayAvailable) {
      wpInitiateMutation.mutate();
      return;
    }
    if (ashtechAvailable) {
      setAshtechCountry(country);
      setAshtechPhone(user?.phone || "");
      setStep("ashtech-operator");
      return;
    }
    window.location.href = `/robotpay?amount=${encodeURIComponent(Number(amount))}&country=${encodeURIComponent(depositCountry)}`;
  };

  const openManualMethod = (method: string) => {
    window.location.href = `/robotpay?mode=manual&method=${encodeURIComponent(method)}&amount=${encodeURIComponent(Number(amount))}&country=${encodeURIComponent(depositCountry)}`;
  };

  const getOperatorIcon = (name: string): string | null => {
    const n = name.toLowerCase();
    if (n.includes("tmoney") || n.includes("t-money")) return "/operators/tmoney.png";
    if (n.includes("moov")) return "/operators/moov.jpg";
    if (n.includes("orange")) return "/operators/orange.png";
    if (n.includes("mtn")) return "/operators/mtn.png";
    if (n.includes("airtel")) return "/operators/airtel.png";
    if (n.includes("wave")) return "/operators/wave.png";
    return null;
  };

  const handleSubmit = () => {
    if (!senderPhone.trim()) {
      toast({ title: "Numéro requis", description: "Entrez le numéro depuis lequel vous avez payé", variant: "destructive" });
      return;
    }
    if (!screenshot) {
      toast({ title: "Capture requise", description: "Veuillez joindre la capture d'écran du paiement", variant: "destructive" });
      return;
    }
    depositMutation.mutate();
  };

  if (!user) return null;

  // ── STEP 1: Amount ─────────────────────────────────────────────────────────
  if (step === "amount") return (
    <main className="recharge-reference min-h-screen bg-[#f7f3f0]">
      <style>{`
        .recharge-reference {
          min-height: 100dvh;
          background: #fff8f2;
          color: #111827;
          font-family: Inter, Arial, sans-serif;
        }
        .recharge-reference .recharge-screen {
          width: 100%;
          max-width: 512px;
          min-height: 100dvh;
          margin: 0 auto;
          overflow: hidden;
          background: #fff8f2;
        }
        .recharge-reference .recharge-hero {
          position: relative;
          box-sizing: border-box;
          height: 286px;
          min-height: 0;
          padding: 0 16px 20px;
          background: #fff8f2;
          border-bottom: 2px solid #111827;
        }
        .recharge-reference .recharge-hero-art {
          position: relative;
          width: 100%;
          height: 166px;
          overflow: hidden;
          margin-top: 76px;
          border: 2px solid #111827;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 4px 0 #111827;
        }
        .recharge-reference .recharge-hero-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .recharge-reference .recharge-title {
          position: absolute;
          z-index: 2;
          top: 20px;
          right: 70px;
          left: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin: 0;
          color: #111827;
          font-size: 20px;
          font-weight: 800;
          line-height: 1.2;
        }
        .recharge-reference .recharge-title-logo {
          width: 38px;
          height: 38px;
          border: 2px solid #111827;
          border-radius: 50%;
          object-fit: cover;
        }
        .recharge-reference .history-button,
        .recharge-reference .recharge-back {
          position: absolute;
          z-index: 3;
          top: 14px;
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 2px solid #111827;
          border-radius: 11px;
          padding: 0;
          background: #fff;
          box-shadow: 0 3px 0 #111827;
        }
        .recharge-reference .history-button {
          right: 16px;
        }
        .recharge-reference .recharge-back {
          left: 16px;
        }
        .recharge-reference .history-button:active,
        .recharge-reference .recharge-back:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #111827;
        }
        .recharge-reference .history-icon {
          position: relative;
          width: 22px;
          height: 25px;
          border: 2px solid #111827;
          border-radius: 4px;
        }
        .recharge-reference .history-icon::before {
          position: absolute;
          top: 5px;
          left: 4px;
          width: 11px;
          height: 2px;
          content: "";
          background: #ff7a14;
          box-shadow: 0 6px 0 #ff7a14;
        }
        .recharge-reference .history-icon::after {
          position: absolute;
          right: -7px;
          bottom: -6px;
          width: 10px;
          height: 10px;
          border: 2px solid #111827;
          border-radius: 50%;
          content: "";
          background: #fff;
        }
        .recharge-reference .recharge-back::before {
          width: 13px;
          height: 13px;
          border-bottom: 3px solid #111827;
          border-left: 3px solid #111827;
          content: "";
          transform: rotate(45deg) translate(2px, -2px);
        }
        .recharge-reference .amount-panel {
          min-height: 252px;
          padding: 20px 16px 18px;
          background: #fff;
        }
        .recharge-reference .preset-row {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
        }
        .recharge-reference .preset {
          height: 48px;
          border: 2px solid #d1d5db;
          border-radius: 11px;
          background: #fff;
          color: #24252a;
          font-size: 15px;
          font-weight: 800;
        }
        .recharge-reference .preset.active {
          background: ${TON_GRADIENT};
          border-color: #111827;
          color: #111827;
          box-shadow: 0 3px 0 #111827;
        }
        .recharge-reference .amount-label {
          margin: 20px 0 9px;
          color: #111827;
          font-size: 16px;
          font-weight: 800;
        }
        .recharge-reference .amount-input {
          display: flex;
          height: 56px;
          align-items: center;
          overflow: hidden;
          border: 2px solid #111827;
          border-radius: 12px;
          background: #fff;
        }
        .recharge-reference .amount-input input {
          width: 100%;
          height: 100%;
          min-width: 0;
          padding: 0 14px;
          border: 0;
          outline: 0;
          color: #111827;
          background: transparent;
          font-size: 19px;
        }
        .recharge-reference .currency {
          padding: 0 13px 0 0;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
        }
        .recharge-reference .country-panel {
          margin: 14px 16px 0;
        }
        .recharge-reference .country-panel label {
          display: block;
          margin-bottom: 8px;
          color: #111827;
          font-size: 14px;
          font-weight: 800;
        }
        .recharge-reference .country-panel select {
          width: 100%;
          min-height: 52px;
          padding: 0 14px;
          border: 2px solid #111827;
          border-radius: 12px;
          outline: 0;
          background: #fff;
          color: #4b5563;
          font-size: 14px;
        }
        .recharge-reference .continue {
          display: flex;
          width: calc(100% - 32px);
          min-height: 57px;
          align-items: center;
          justify-content: center;
          margin: 14px 16px 0;
          border: 2px solid #111827;
          border-radius: 12px;
          background: ${TON_GRADIENT};
          color: #111827;
          font-size: 16px;
          font-weight: 800;
          box-shadow: 0 4px 0 #111827;
        }
        .recharge-reference .continue:active:not(:disabled) {
          transform: translateY(3px);
          box-shadow: 0 1px 0 #111827;
        }
        .recharge-reference .continue:disabled {
          opacity: .55;
        }
        .recharge-reference .instructions {
          margin: 18px 16px 24px;
          padding: 22px 16px 10px;
          border: 2px solid #111827;
          border-top: 5px solid #ff7a14;
          border-radius: 14px;
          background: #fff;
          color: #4b5563;
        }
        .recharge-reference .instructions-title {
          margin: 0 0 20px;
          color: #111827;
          font-size: 19px;
          font-weight: 800;
        }
        .recharge-reference .instructions-title::before {
          content: "•";
          margin-right: 8px;
          color: #ff7a14;
          font-size: 24px;
          line-height: 0;
        }
        .recharge-reference .instruction {
          position: relative;
          margin: 0 0 16px 20px;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.65;
        }
        .recharge-reference .instruction::before {
          position: absolute;
          top: 7px;
          left: -15px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          content: "";
          background: #ff7a14;
        }
        .recharge-reference .instruction strong { color: #111827; font-weight: 800; }
        @media (max-width: 360px) {
          .recharge-reference .recharge-hero { height: 270px; min-height: 0; padding-right: 12px; padding-left: 12px; }
          .recharge-reference .recharge-hero-art { height: 150px; }
          .recharge-reference .history-button { right: 12px; }
          .recharge-reference .recharge-back { left: 12px; }
          .recharge-reference .amount-panel { padding-right: 12px; padding-left: 12px; }
          .recharge-reference .country-panel { margin-right: 12px; margin-left: 12px; }
          .recharge-reference .continue { width: calc(100% - 24px); margin-right: 12px; margin-left: 12px; }
          .recharge-reference .preset-row { gap: 8px; }
          .recharge-reference .preset { height: 44px; font-size: 11px; }
          .recharge-reference .instruction { font-size: 15px; }
        }
      `}</style>

      <div className="recharge-screen">
        <section className="recharge-hero" aria-label="Dépôt">
          <div className="recharge-hero-art">
            <img src={chargepointPromo} alt="" />
          </div>
          <h1 className="recharge-title">
            <img className="recharge-title-logo" src={chargepointLogo} alt="" />
            <span>Dépôt</span>
          </h1>
          <Link href="/history">
            <button className="history-button" aria-label="Historique des transactions">
              <span className="history-icon" aria-hidden="true" />
            </button>
          </Link>
          <Link href="/account">
            <button className="recharge-back" aria-label="Retour" />
          </Link>
        </section>

        <section className="amount-panel" aria-label="Montant de recharge">
          <div className="preset-row">
            {depositPresets.map((preset) => (
              <button
                key={preset}
                className={`preset ${amount === preset ? "active" : ""}`}
                onClick={() => setAmount(preset)}
              >
                {preset}
              </button>
            ))}
          </div>

          <p className="amount-label">Veuillez saisir le montant de recharge</p>
          <label className="amount-input">
            <input
              type="number"
              inputMode="numeric"
              value={amount}
              onChange={(event) => setAmount(event.target.value ? Number(event.target.value) : "")}
              aria-label="Montant de recharge"
            />
            <span className="currency">{currency}</span>
          </label>
        </section>

        <section className="country-panel" aria-label="Pays du paiement">
          <label htmlFor="deposit-country">Pays du paiement</label>
          <select
            id="deposit-country"
            value={depositCountry}
            onChange={(event) => setDepositCountry(event.target.value)}
          >
            <option value="">Sélectionnez un pays</option>
            {activeDepositCountries.map((item) => (
              <option key={item.code} value={item.code}>{item.name} ({item.currency})</option>
            ))}
          </select>
          {countriesError && <p className="mt-2 text-xs text-amber-700">Liste locale temporaire affichée.</p>}
        </section>

        <button
          className="continue"
          onClick={handleAmountNext}
          disabled={!depositCountry || inpayInitiateMutation.isPending || wpInitiateMutation.isPending}
        >
          Recharger maintenant
        </button>
        <section className="instructions" aria-label="Instructions de recharge">
          <h2 className="instructions-title">Instructions de Recharge :</h2>
          <p className="instruction"><strong>Montant minimum de recharge :</strong> {MIN_DEPOSIT.toLocaleString("fr-FR")} {currency}</p>
          <p className="instruction"><strong>Vérifiez attentivement vos informations de compte</strong> lors du virement pour que votre paiement soit traité correctement</p>
          <p className="instruction"><strong>Chaque commande possède ses propres informations de paiement</strong> ; ne réutilisez pas les informations précédentes pour un second paiement</p>
          <p className="instruction"><strong>Après un virement réussi,</strong> veuillez patienter 10 à 30 minutes.</p>
        </section>
      </div>
    </main>
  );

  // ── STEP 2: Choose a payment method ───────────────────────────────────────
  if (step === "select") return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button className="deposit-step-back" onClick={() => setStep("amount")}>
          <ChevronLeft className="h-5 w-5" /><span className="font-semibold text-base">Modifier le montant</span>
        </button>
        <Link href="/history"><button className="deposit-step-history">Historique</button></Link>
      </header>
      <div className="deposit-step-summary mx-4 mt-4 flex items-center justify-between p-4">
        <div>
          <p className="text-xs text-gray-500">Montant à déposer</p>
          <p className="text-xl font-bold text-[#E85D00]">{Number(amount).toLocaleString()} {currency}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Pays</p>
          <p className="font-semibold text-gray-800">{countryInfo?.name || country || "Non sélectionné"}</p>
        </div>
      </div>
      <div className="deposit-step-content">
        <div className="deposit-step-card deposit-step-card-orange p-4">
          <p className="mb-2 text-sm font-bold text-gray-900">Pays du paiement</p>
          <select value={depositCountry} onChange={e => setDepositCountry(e.target.value)} className="deposit-step-field w-full appearance-none px-4 py-4 text-sm text-gray-700 outline-none">
            <option value="">Sélectionnez un pays</option>
            {activeDepositCountries.map(c => <option key={c.code} value={c.code}>{c.name} ({c.currency})</option>)}
          </select>
          <p className="mt-2 text-xs text-gray-500">Choisissez une méthode ci-dessous pour continuer.</p>
        </div>
        {!depositCountry ? (
          <p className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            Sélectionnez d’abord un pays pour afficher les méthodes disponibles.
          </p>
        ) : (
          <div className="mt-5 space-y-3">
            <p className="px-1 text-sm font-bold text-gray-900">Moyens de paiement disponibles</p>
            <button
              type="button"
              onClick={openRobotPay}
              disabled={inpayInitiateMutation.isPending || wpInitiateMutation.isPending}
              className="deposit-step-card flex w-full items-center justify-between p-4 text-left transition-colors hover:border-[#FF7A14] disabled:opacity-60"
            >
              <span>
                <span className="block font-bold text-gray-900">Paiement automatique</span>
                <span className="mt-1 block text-xs text-gray-500">Choisissez un opérateur et validez le paiement depuis votre téléphone.</span>
              </span>
              <ArrowRight className="ml-3 h-5 w-5 shrink-0 text-[#E85D00]" />
            </button>
            {numbersLoading ? (
              <Loader2 className="mx-auto h-6 w-6 animate-spin text-[#E85D00]" />
            ) : countryManualMethods.map(method => (
              <button
                key={method.name}
                type="button"
                onClick={() => openManualMethod(method.name)}
                className="deposit-step-card flex w-full items-center justify-between p-4 text-left transition-colors hover:border-[#FF7A14]"
              >
                <span>
                  <span className="block font-bold text-gray-900">{method.name}</span>
                  <span className={`mt-1 block text-xs ${method.configured ? "text-gray-500" : "text-amber-700"}`}>
                    {method.configured ? "Paiement par transfert" : "Instructions de réception à configurer"}
                  </span>
                </span>
                <ArrowRight className="ml-3 h-5 w-5 shrink-0 text-[#E85D00]" />
              </button>
            ))}
            {!numbersLoading && countryManualMethods.length === 0 && (
              <p className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-500">
                Aucune méthode de réception n’est disponible pour ce pays.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // ── STEP 3: Deposit instructions ──────────────────────────────────────────
  if (step === "form" && selectedNumber) return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button className="deposit-step-back" onClick={() => setStep("select")}>
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-base">Confirmer le paiement</span>
        </button>
      </header>

      <div className="deposit-step-content space-y-4 pb-10">
        <div className="deposit-step-card deposit-step-card-orange p-4 flex items-center gap-3">
          {selectedNumber.logoUrl ? (
            <img src={selectedNumber.logoUrl} alt={selectedNumber.operatorName} className="w-10 h-10 rounded-lg object-contain" />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border-2 border-[#FF7A14]">
              <Phone className="w-5 h-5 text-[#FF7A14]" />
            </div>
          )}
          <div className="flex-1">
            <p className="text-xs text-gray-500">{selectedNumber.paymentLink ? "Lien de paiement" : "Numéro destinataire"}</p>
            {selectedNumber.paymentLink ? (
              <a
                href={selectedNumber.paymentLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center gap-1 text-sm font-bold text-[#E85D00] underline"
              >
                <ExternalLink className="h-4 w-4" /> Ouvrir le lien de paiement
              </a>
            ) : (
              <p className="font-bold text-[#E85D00] text-sm">{selectedNumber.operatorName} — {selectedNumber.phone}</p>
            )}
            <p className="text-xs text-gray-500">{selectedNumber.ownerName}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Montant</p>
            <p className="font-bold text-gray-800">{Number(amount).toLocaleString()} {currency}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Votre numéro payeur</p>
            <div className="deposit-step-field flex items-center overflow-hidden">
            <Phone className="w-4 h-4 text-gray-400 ml-4" />
            <input
              type="tel"
              value={senderPhone}
              onChange={(e) => setSenderPhone(e.target.value)}
              placeholder="Numéro depuis lequel vous avez payé"
              className="flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Référence / ID transaction <span className="text-gray-400 font-normal">(optionnel)</span></p>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Numéro de référence de la transaction"
            className="deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Message reçu après paiement <span className="text-gray-400 font-normal">(optionnel)</span></p>
          <textarea
            value={paymentMessage}
            onChange={(e) => setPaymentMessage(e.target.value)}
            placeholder="Collez ici le SMS ou message de confirmation reçu..."
            rows={3}
            className="deposit-step-field w-full px-4 py-3 text-sm text-gray-700 outline-none resize-none"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Capture d'écran du paiement <span className="text-red-500">*</span></p>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <button
            onClick={() => fileInputRef.current?.click()}
            className={`w-full border-2 border-dashed rounded-xl py-7 flex flex-col items-center gap-2 transition-colors ${
              screenshot ? "border-[#FF7A14] bg-[#FFF3E8]" : "border-gray-300 bg-gray-50 hover:border-[#FF7A14] hover:bg-[#FFF3E8]"
            }`}
          >
            {screenshot ? (
              <><CheckCircle className="w-8 h-8 text-[#FF7A14]" /><p className="text-sm font-medium text-[#E85D00]">{screenshotName}</p><p className="text-xs text-gray-400">Appuyez pour changer</p></>
            ) : (
              <><ImageIcon className="w-8 h-8 text-gray-400" /><p className="text-sm font-medium text-gray-600">Appuyez pour ajouter la capture</p><p className="text-xs text-gray-400">JPG, PNG — max 5 Mo</p></>
            )}
          </button>
          {screenshot && (
            <div className="mt-3 rounded-xl overflow-hidden border border-gray-100">
              <img src={screenshot} alt="Capture" className="w-full max-h-52 object-contain bg-gray-50" />
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={depositMutation.isPending}
          className="deposit-step-primary w-full py-5 disabled:opacity-50"
          style={{ background: TON_GRADIENT }}
        >
          {depositMutation.isPending ? (
            <span className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</span>
          ) : (
            <span className="flex items-center justify-center gap-2"><Upload className="w-5 h-5" /> Soumettre ma demande</span>
          )}
        </button>
      </div>
    </div>
  );

  // ── WESTPAY: Confirm + redirect ────────────────────────────────────────────
  if (step === "westpay") return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button className="deposit-step-back" onClick={() => setStep("select")}>
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-base">{westpayChannelName}</span>
        </button>
      </header>

      <div className="deposit-step-content space-y-5 pb-10">
        {/* Amount recap */}
        <div className="deposit-step-summary mx-0 p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Montant à déposer</p>
            <p className="text-xl font-bold text-[#E85D00]">{Number(amount).toLocaleString()} {currency}</p>
          </div>
          <button onClick={() => setStep("amount")} className="text-xs text-[#E85D00] underline">Modifier</button>
        </div>

        {/* Info card */}
        <div className="deposit-step-card p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FF7A14]" />
            <p className="font-semibold text-gray-900 text-sm">Comment ça marche ?</p>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            1. Cliquez <strong>Payer avec {westpayChannelName}</strong> — vous serez redirigé vers la page de paiement sécurisée.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            2. Entrez votre numéro Mobile Money et validez le paiement USSD depuis votre téléphone.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            3. Après paiement, vous serez automatiquement redirigé ici. Votre solde est crédité après confirmation.
          </p>
        </div>

        <button
          onClick={() => wpInitiateMutation.mutate()}
          disabled={wpInitiateMutation.isPending}
          className="deposit-step-primary w-full py-5 disabled:opacity-40 flex items-center justify-center gap-2"
          style={{ background: TON_GRADIENT }}
        >
          {wpInitiateMutation.isPending ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Redirection en cours...</>
          ) : (
            <><ExternalLink className="w-5 h-5" /> Payer avec {westpayChannelName}</>
          )}
        </button>

        <p className="text-xs text-center text-gray-400">
          Paiement sécurisé via {westpayChannelName} — USSD Mobile Money
        </p>
      </div>
    </div>
  );

  // ── ASHTECHPAY: Select country + operator ─────────────────────────────────
  if (step === "ashtech-operator") return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button className="deposit-step-back" onClick={() => setStep("select")}>
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-base">{ashtechChannelName}</span>
        </button>
        <Link href="/history"><button className="deposit-step-history">Historique</button></Link>
      </header>
      <div className="deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between">
        <div><p className="text-xs text-gray-500">Montant à déposer</p><p className="text-xl font-bold text-[#E85D00]">{Number(amount).toLocaleString()} {currency}</p></div>
        <button onClick={() => setStep("amount")} className="text-xs text-[#E85D00] underline">Modifier</button>
      </div>
      <div className="deposit-step-content space-y-4 pb-10">
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Pays</p>
          {ashtechCountriesLoading ? <Loader2 className="w-6 h-6 animate-spin text-[#FF7A14] mx-auto" /> : (
            <select value={ashtechCountry} onChange={(e) => { setAshtechCountry(e.target.value); setAshtechOperator(""); }}
              className="deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none">
              {availableAshtechCountries.map(c => <option key={c.code} value={c.code}>{c.name} ({c.currency})</option>)}
            </select>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Numéro Mobile Money</p>
          <div className="deposit-step-field flex items-center overflow-hidden">
            <Phone className="w-4 h-4 text-gray-400 ml-4 flex-shrink-0" />
            <input type="tel" inputMode="numeric" value={ashtechPhone} onChange={(e) => setAshtechPhone(e.target.value)}
              placeholder="Votre numéro Mobile Money" className="flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Opérateur Mobile Money</p>
          {ashtechOperators.length === 0 ? <p className="text-sm text-gray-400 text-center py-5">Aucun opérateur disponible pour ce pays</p> : (
            <div className="space-y-2">
              {ashtechOperators.map((operator, index) => {
                const name = typeof operator === "string" ? operator : (operator.name || operator.code || `Opérateur ${index + 1}`);
                return <button key={`${name}-${index}`} onClick={() => setAshtechOperator(name)}
                  className={`deposit-step-operator w-full flex items-center justify-between px-4 py-4 ${ashtechOperator === name ? "deposit-step-operator-selected" : ""}`}>
                  <span className="font-semibold text-gray-900 text-sm">{name}</span>
                  {ashtechOperator === name && <CheckCircle className="w-5 h-5 text-[#FF7A14]" />}
                </button>;
              })}
            </div>
          )}
        </div>
        <button onClick={() => ashtechCollectMutation.mutate(undefined)} disabled={!ashtechOperator || !ashtechPhone.trim() || ashtechCollectMutation.isPending}
          className="deposit-step-primary w-full py-5 disabled:opacity-40" style={{ background: TON_GRADIENT }}>
          {ashtechCollectMutation.isPending ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Initiation en cours...</span> : "Initier le paiement"}
        </button>
      </div>
    </div>
  );

  // ── ASHTECHPAY: OTP screen ────────────────────────────────────────────────
  if (step === "ashtech-otp") return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button onClick={() => setStep("ashtech-operator")} className="deposit-step-back"><ChevronLeft className="w-5 h-5" /><span>Code OTP</span></button>
      </header>
      <div className="deposit-step-content space-y-5 pb-10">
        <div className="deposit-step-card deposit-step-card-orange p-4">
          <p className="font-bold text-gray-900 text-sm mb-2">Code à composer</p>
          {ashtechUssdCode && <p className="deposit-step-otp px-4 py-3 text-center font-mono font-black text-2xl text-[#E85D00] tracking-widest">{ashtechUssdCode}</p>}
          <p className="text-sm text-gray-600 mt-3">
            {ashtechUssdCode
              ? "Composez ce code sur votre téléphone pour obtenir le code OTP, puis saisissez-le ci-dessous."
              : "Un code OTP vous a été envoyé. Saisissez-le ci-dessous."}
          </p>
        </div>
        <input type="text" inputMode="numeric" value={ashtechOtp} onChange={(e) => setAshtechOtp(e.target.value)} maxLength={8}
          placeholder="Code OTP reçu par SMS" className="deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]" />
        <button onClick={() => ashtechCollectMutation.mutate(ashtechOtp)} disabled={!ashtechOtp.trim() || ashtechCollectMutation.isPending}
          className="deposit-step-primary w-full py-5 disabled:opacity-40" style={{ background: TON_GRADIENT }}>
          {ashtechCollectMutation.isPending ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Vérification...</span> : "Valider le code OTP"}
        </button>
      </div>
    </div>
  );

  // ── ASHTECHPAY: Wave redirect ─────────────────────────────────────────────
  if (step === "ashtech-redirect") return (
    <div className="deposit-step-shell flex flex-col">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button onClick={() => setStep("ashtech-operator")} className="deposit-step-back"><ChevronLeft className="w-5 h-5" /><span>Finaliser le paiement</span></button>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="deposit-step-icon"><ExternalLink className="w-10 h-10 text-[#FF7A14]" /></div>
        <div><p className="font-bold text-gray-900 text-xl mb-2">Finaliser avec Wave</p><p className="text-sm text-gray-500">Ouvrez la page Wave pour confirmer votre dépôt de <strong>{Number(amount).toLocaleString()} {currency}</strong>.</p></div>
        <a href={ashtechWaveUrl} target="_blank" rel="noopener noreferrer" onClick={() => { setAshtechPolling(true); setStep("ashtech-waiting"); }}
          className="deposit-step-primary w-full py-5 flex items-center justify-center gap-2" style={{ background: TON_GRADIENT }}>
          <ExternalLink className="w-5 h-5" /> Ouvrir Wave
        </a>
      </div>
    </div>
  );

  // ── ASHTECHPAY: Waiting / polling ─────────────────────────────────────────
  if (step === "ashtech-waiting") return (
    <div className="deposit-step-shell flex flex-col">
      <DepositStepStyles />
      <header className="deposit-step-header"><span className="font-semibold text-base text-gray-800">Paiement en cours</span></header>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="deposit-step-icon"><RefreshCw className="w-10 h-10 text-[#FF7A14] animate-spin" style={{ animationDuration: "2s" }} /></div>
        <div><p className="font-bold text-gray-900 text-xl">En attente de confirmation</p><p className="text-sm text-gray-500 mt-2">Validez le paiement sur votre téléphone. Cette page se met à jour automatiquement.</p></div>
        <div className="flex gap-3 w-full"><Link href="/history" className="flex-1"><button className="deposit-step-secondary w-full py-3 text-sm">Voir l'historique</button></Link>
          <button onClick={() => { setStep("amount"); setAmount(""); setAshtechDepositId(null); setAshtechPolling(false); setAshtechStatus(""); }} className="deposit-step-secondary flex-1 py-3 text-sm">Nouvelle recharge</button>
        </div>
      </div>
    </div>
  );

  // ── SOLEAPAY: Select operator and phone ────────────────────────────────────
  if (step === "soleaspay-operator") return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button className="deposit-step-back" onClick={() => setStep("amount")}>
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-base">Retour</span>
        </button>
        <Link href="/history">
          <button className="deposit-step-history">Historique</button>
        </Link>
      </header>

      <div className="deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Montant à déposer</p>
          <p className="text-xl font-bold text-[#E85D00]">{Number(amount).toLocaleString()} {currency}</p>
        </div>
        <span className="text-xs font-semibold text-gray-600">{country}</span>
      </div>

      <div className="deposit-step-content space-y-5 pb-10">
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Opérateur Mobile Money</p>
          {soleaspayServicesLoading ? (
            <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
              <Loader2 className="w-4 h-4 animate-spin" /> Chargement des opérateurs…
            </div>
          ) : soleaspayOperators.length ? (
            <div className="grid grid-cols-2 gap-3">
              {soleaspayOperators.map((operator) => (
                <button
                  key={operator}
                  type="button"
                  onClick={() => setSoleaspayOperator(operator)}
                  className={`deposit-step-card p-4 text-sm font-semibold ${
                    soleaspayOperator === operator ? "deposit-step-card-orange" : ""
                  }`}
                >
                  {operator}
                </button>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              Aucun opérateur SoleaPay n'est disponible pour ce pays.
            </p>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Numéro Mobile Money</p>
          <div className="deposit-step-field flex items-center overflow-hidden">
            <Phone className="w-4 h-4 text-gray-400 ml-4 flex-shrink-0" />
            <input
              type="tel"
              inputMode="tel"
              value={soleaspayPhone}
              onChange={(event) => setSoleaspayPhone(event.target.value)}
              placeholder="Numéro sur lequel recevoir la demande"
              className="flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"
            />
          </div>
        </div>

        <button
          type="button"
          disabled={!soleaspayOperator || !(soleaspayPhone.trim() || user?.phone) || soleaspayInitiateMutation.isPending}
          onClick={() => soleaspayInitiateMutation.mutate()}
          className="deposit-step-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-50"
          style={{ background: TON_GRADIENT }}
        >
          {soleaspayInitiateMutation.isPending
            ? <><Loader2 className="w-5 h-5 animate-spin" /> Préparation du paiement…</>
            : <>Continuer avec {soleaspayChannelName}</>}
        </button>
      </div>
    </div>
  );

  if (step === "soleaspay-waiting") return (
    <div className="deposit-step-shell flex flex-col">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <span className="font-semibold text-base text-gray-800">Paiement {soleaspayChannelName}</span>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="deposit-step-icon">
          {soleaspayStatus === "approved"
            ? <CheckCircle className="w-10 h-10 text-[#FF7A14]" />
            : <RefreshCw className={`w-10 h-10 ${soleaspayStatus === "rejected" ? "text-red-400" : "text-[#FF7A14] animate-spin"}`} />}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-xl">
            {soleaspayStatus === "approved" ? "Paiement confirmé !" : soleaspayStatus === "rejected" ? "Paiement échoué" : "En attente de confirmation"}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {soleaspayStatus === "approved"
              ? `Votre solde a été crédité de ${Number(amount).toLocaleString()} ${currency}.`
              : soleaspayStatus === "rejected"
                ? "Le paiement a été refusé ou annulé."
                : soleaspayMessage || "Validez la demande de paiement sur votre téléphone. Cette page se met à jour automatiquement."}
          </p>
          {soleaspayDepositId && <p className="text-xs text-gray-400 mt-2">Référence dépôt : #{soleaspayDepositId}</p>}
        </div>
        <div className="flex gap-3 w-full">
          {soleaspayStatus === "rejected" ? (
            <button
              onClick={() => {
                setSoleaspayDepositId(null);
                setSoleaspayStatus("");
                setSoleaspayPolling(false);
                setStep("soleaspay-operator");
              }}
              className="deposit-step-primary flex-1 py-3 text-sm"
              style={{ background: TON_GRADIENT }}
            >
              Réessayer
            </button>
          ) : (
            <Link href="/history" className="flex-1">
              <button className="deposit-step-secondary w-full py-3 text-sm">Voir l'historique</button>
            </Link>
          )}
          <button
            onClick={() => {
              setStep("amount");
              setAmount("");
              setSoleaspayDepositId(null);
              setSoleaspayStatus("");
              setSoleaspayPolling(false);
            }}
            className="deposit-step-secondary flex-1 py-3 text-sm"
          >
            Nouvelle recharge
          </button>
        </div>
      </div>
    </div>
  );

  // ── SENDAVAPAY: Select country + operator ──────────────────────────────────
  if (step === "sv-operator") return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button className="deposit-step-back" onClick={() => setStep("amount")}>
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-base">Top up</span>
        </button>
        <Link href="/history">
          <button className="deposit-step-history">Historique</button>
        </Link>
      </header>

      {/* Amount recap */}
      <div className="deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Montant à déposer</p>
          <p className="text-xl font-bold text-[#E85D00]">{Number(amount).toLocaleString()} {currency}</p>
        </div>
        <button onClick={() => setStep("amount")} className="text-xs text-[#E85D00] underline">Modifier</button>
      </div>

      <div className="deposit-step-content space-y-4 pb-10">
        {/* Country selector */}
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Pays</p>
          <select
            value={svCountry}
            onChange={(e) => { setSvCountry(e.target.value); setSvOperator(null); }}
            className="deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none"
          >
            {activeDepositCountries.map((c: any) => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Phone number */}
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Numéro Mobile Money</p>
          <div className="deposit-step-field flex items-center overflow-hidden">
            <Phone className="w-4 h-4 text-gray-400 ml-4 flex-shrink-0" />
            <input
              type="tel"
              inputMode="numeric"
              value={svPhone}
              onChange={(e) => setSvPhone(e.target.value)}
              placeholder="Numéro sur lequel envoyer la demande"
              className="flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Operator selector */}
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Opérateur Mobile Money</p>
          {svOperatorsLoading ? (
            <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-[#FF7A14]" />
            </div>
          ) : svOperators.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p className="text-sm">Aucun opérateur disponible pour ce pays</p>
            </div>
          ) : (
            <div className="space-y-2">
              {svOperators.map((op) => {
                const icon = getOperatorIcon(op.name);
                return (
                  <button
                    key={op.id}
                    onClick={() => setSvOperator(op)}
                    className={`deposit-step-operator w-full flex items-center justify-between px-4 py-4 transition-all ${
                      svOperator?.id === op.id
                        ? "deposit-step-operator-selected"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {icon ? (
                        <img src={icon} alt={op.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                      ) : (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          svOperator?.id === op.id ? "bg-[#FF7A14] text-gray-900" : "bg-gray-100 text-gray-600"
                        }`}>
                          {op.name.charAt(0)}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 text-sm">{op.name}</p>
                        {op.requiresOtp && <p className="text-xs text-[#E85D00]">Code OTP requis</p>}
                      </div>
                    </div>
                    {svOperator?.id === op.id && <CheckCircle className="w-5 h-5 text-[#FF7A14]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <button
          onClick={() => svInitiateMutation.mutate()}
          disabled={!svOperator || svInitiateMutation.isPending}
           className="deposit-step-primary w-full py-5 disabled:opacity-40"
            style={{ background: TON_GRADIENT }}
        >
          {svInitiateMutation.isPending ? (
            <span className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Initiation en cours...</span>
          ) : (
            <span className="flex items-center justify-center gap-2"><img src="/topup-icon.png" className="w-6 h-6 object-contain" alt="topup" /> Initier le paiement</span>
          )}
        </button>
      </div>
    </div>
  );

  // ── SENDAVAPAY: OTP screen ─────────────────────────────────────────────────
  if (step === "sv-otp") return (
    <div className="deposit-step-shell">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button onClick={() => setStep("sv-operator")} className="deposit-step-back">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-base">Code OTP</span>
        </button>
      </header>

      <div className="deposit-step-content space-y-5 pb-10">

        {/* Step 1 — Dial USSD code */}
        <div className="deposit-step-card deposit-step-card-orange p-4">
          <div className="flex items-center gap-2 mb-3">
           <div className="w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0">
              <span className="text-gray-900 font-bold text-xs">1</span>
            </div>
            <p className="font-bold text-gray-900 text-sm">Composez ce code sur votre téléphone</p>
          </div>
          {svUssdCode ? (
             <div className="deposit-step-otp px-4 py-3 text-center">
              <p className="font-mono font-black text-2xl text-[#E85D00] tracking-widest">{svUssdCode}</p>
              <p className="text-xs text-gray-400 mt-1">Composez ce code USSD sur votre téléphone</p>
            </div>
          ) : (
            <p className="text-sm text-gray-600">
              Composez le code USSD de votre opérateur (ex&nbsp;: <span className="font-mono font-bold text-[#E85D00]">*144#</span>) sur votre téléphone pour recevoir le code OTP par SMS.
            </p>
          )}
        </div>

        {/* Step 2 — Enter OTP */}
        <div className="deposit-step-card deposit-step-card-orange p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">2</span>
            </div>
            <p className="font-bold text-gray-900 text-sm">Entrez le code OTP reçu par SMS</p>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            Après avoir composé le code, vous recevrez un SMS avec un code OTP. Saisissez-le ci-dessous pour confirmer le paiement de <strong>{Number(amount).toLocaleString()} {currency}</strong>.
          </p>
         <input
            type="text"
            inputMode="numeric"
            value={svOtp}
            onChange={(e) => setSvOtp(e.target.value)}
            placeholder="Code OTP reçu par SMS"
           className="deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]"
            maxLength={8}
          />
        </div>

         <button
          onClick={() => svOtpMutation.mutate()}
          disabled={!svOtp.trim() || svOtpMutation.isPending}
           className="deposit-step-primary w-full py-5 disabled:opacity-40"
          style={{ background: TON_GRADIENT }}
        >
          {svOtpMutation.isPending ? (
            <span className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Vérification...</span>
          ) : "Valider le code OTP"}
        </button>
      </div>
    </div>
  );

  // ── SENDAVAPAY: Redirect screen (Wave, etc.) ──────────────────────────────
  if (step === "sv-redirect") return (
    <div className="deposit-step-shell flex flex-col">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <button onClick={() => setStep("sv-operator")} className="deposit-step-back">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-base">Finaliser le paiement</span>
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="deposit-step-icon">
          <ExternalLink className="w-10 h-10 text-[#FF7A14]" />
        </div>
        <div>
          <p className="font-bold text-gray-900 text-xl mb-2">Finaliser sur l'application</p>
          <p className="text-sm text-gray-500">
            Appuyez sur le bouton ci-dessous pour ouvrir la page de paiement de l'opérateur
            et confirmer votre dépôt de <strong>{Number(amount).toLocaleString()} {currency}</strong>.
          </p>
        </div>
        <a
          href={svRedirectUrl}
          target="_blank"
          rel="noopener noreferrer"
           className="deposit-step-primary w-full py-5 flex items-center justify-center gap-2"
           style={{ background: TON_GRADIENT }}
          onClick={() => { setSvPolling(true); setStep("sv-waiting"); }}
        >
          <ExternalLink className="w-5 h-5" /> Ouvrir la page de paiement
        </a>
      </div>
    </div>
  );

  // ── SENDAVAPAY: Waiting / polling screen ────────────────────────────────────
  if (step === "sv-waiting") return (
    <div className="deposit-step-shell flex flex-col">
      <DepositStepStyles />
      <header className="deposit-step-header">
        <span className="font-semibold text-base text-gray-800">Paiement en cours</span>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        {svStatus === "approved" ? (
          <>
            <div className="deposit-step-icon">
              <CheckCircle className="w-10 h-10 text-[#FF7A14]" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">Paiement confirmé !</p>
              <p className="text-sm text-gray-500 mt-1">Votre solde a été crédité de <strong>{Number(amount).toLocaleString()} {currency}</strong></p>
            </div>
          </>
        ) : svStatus === "rejected" ? (
          <>
            <div className="deposit-step-icon">
              <RefreshCw className="w-10 h-10 text-red-400" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">Paiement échoué</p>
              <p className="text-sm text-gray-500 mt-1">Le paiement a été refusé ou annulé.</p>
            </div>
            <div className="flex gap-3 w-full">
              {svPaymentToken && (
                <button
                  onClick={() => svRetryMutation.mutate()}
                  disabled={svRetryMutation.isPending}
                   className="deposit-step-primary flex-1 py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                   style={{ background: TON_GRADIENT }}
                >
                  {svRetryMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                  Réessayer
                </button>
              )}
              <button
                onClick={() => { setStep("amount"); setAmount(""); setSvOperator(null); setSvDepositId(null); setSvPaymentToken(""); setSvPolling(false); setSvStatus(""); }}
                 className="deposit-step-secondary flex-1 py-3 text-sm"
              >
                Nouvelle recharge
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="deposit-step-icon">
              <RefreshCw className="w-10 h-10 text-[#FF7A14] animate-spin" style={{ animationDuration: "2s" }} />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">En attente de confirmation</p>
              <p className="text-sm text-gray-500 mt-2">
                Une demande de paiement de <strong>{Number(amount).toLocaleString()} {currency}</strong> a été envoyée sur votre téléphone.<br />
                Acceptez-la sur votre téléphone. Cette page se met à jour automatiquement.
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <Link href="/history" className="flex-1">
                 <button className="deposit-step-secondary w-full py-3 text-sm">
                  Voir l'historique
                </button>
              </Link>
              <button
                onClick={() => { setStep("amount"); setAmount(""); setSvOperator(null); setSvDepositId(null); setSvPaymentToken(""); setSvPolling(false); setSvStatus(""); }}
                 className="deposit-step-secondary flex-1 py-3 text-sm"
              >
                Nouvelle recharge
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return null;
}
