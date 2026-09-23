import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { getPaymentMethodsForCountry, type ApiCountry } from "@/lib/countries";
import { Loader2, Plus, Trash2, CreditCard, ChevronLeft, ChevronRight, ChevronDown, Shield, Check, Search, X } from "lucide-react";
import emptyIllustration from "@assets/illustration-8_1784762965573.png";
import chargepointPromo from "@/assets/auth-chargepoint-combined.png";
import { Link, useLocation, useSearch } from "wouter";
import type { WithdrawalWallet } from "@shared/schema";

const walletSchema = z.object({
  accountNumber: z.string().min(8, "Numéro requis"),
  paymentMethod: z.string().min(2, "Moyen de paiement requis"),
});

type WalletForm = z.infer<typeof walletSchema>;

const walletStyles = `
  .wallet-page {
    min-height: 100%;
    background: #ffffff;
    color: #171717;
    font-family: Inter, Arial, sans-serif;
  }
  .wallet-shell {
    width: 100%;
    max-width: 540px;
    min-height: 100%;
    margin: 0 auto;
    background: #ffffff;
  }
  .wallet-topbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #f3e6dc;
    background: #ffffff;
  }
  .wallet-back,
  .wallet-top-action {
    display: grid;
    width: 40px;
    height: 40px;
    flex: none;
    place-items: center;
    border: 1px solid #ffd7bc;
    border-radius: 14px;
    background: #fff8f2;
    color: #c65100;
    cursor: pointer;
  }
  .wallet-top-action {
    background: #ff7a14;
    border-color: #ff7a14;
    color: #ffffff;
  }
  .wallet-heading {
    min-width: 0;
    flex: 1;
  }
  .wallet-eyebrow {
    display: block;
    margin-bottom: 2px;
    color: #c65100;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .08em;
    line-height: 1.2;
    text-transform: uppercase;
  }
  .wallet-title {
    margin: 0;
    color: #171717;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.25;
  }
  .wallet-content {
    padding: 16px 16px 116px;
  }
  .wallet-hero {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #ffe0ca;
    border-radius: 20px;
    background: #fff8f2;
  }
  .wallet-hero-icon {
    display: grid;
    width: 44px;
    height: 44px;
    flex: none;
    place-items: center;
    border-radius: 15px;
    background: #ff7a14;
    color: #ffffff;
  }
  .wallet-hero h2 {
    margin: 0 0 4px;
    color: #171717;
    font-size: 15px;
    font-weight: 800;
  }
  .wallet-hero p {
    margin: 0;
    color: #6b625d;
    font-size: 13px;
    line-height: 1.5;
  }
  .wallet-section {
    margin-bottom: 12px;
    overflow: hidden;
    border: 1px solid #eee4dd;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 4px 14px rgba(42, 25, 14, .04);
  }
  .wallet-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 15px 16px 12px;
    border-bottom: 1px solid #f2ebe5;
  }
  .wallet-section-title {
    margin: 0;
    color: #171717;
    font-size: 14px;
    font-weight: 800;
  }
  .wallet-section-caption {
    margin: 3px 0 0;
    color: #857b74;
    font-size: 12px;
    line-height: 1.35;
  }
  .wallet-step {
    display: grid;
    width: 24px;
    height: 24px;
    flex: none;
    place-items: center;
    border-radius: 9px;
    background: #fff0e5;
    color: #c65100;
    font-size: 12px;
    font-weight: 800;
  }
  .wallet-selector {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px;
    border: 0;
    background: #ffffff;
    color: #171717;
    text-align: left;
    cursor: pointer;
  }
  .wallet-selector:hover,
  .wallet-selector:focus-visible {
    background: #fffaf6;
    outline: none;
  }
  .wallet-selector-copy {
    min-width: 0;
    flex: 1;
  }
  .wallet-label {
    display: block;
    margin-bottom: 5px;
    color: #857b74;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .03em;
    text-transform: uppercase;
  }
  .wallet-value {
    display: block;
    overflow: hidden;
    color: #171717;
    font-size: 14px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-value.is-empty {
    color: #a69c95;
    font-weight: 500;
  }
  .wallet-selector svg {
    flex: none;
    color: #c65100;
  }
  .wallet-field {
    padding: 15px 16px 16px;
  }
  .wallet-field + .wallet-field {
    border-top: 1px solid #f2ebe5;
  }
  .wallet-input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d9cec5;
    padding: 3px 0 9px;
    outline: none;
    background: transparent;
    color: #171717;
    font-size: 15px;
  }
  .wallet-input:focus {
    border-color: #ff7a14;
    box-shadow: 0 1px 0 #ff7a14;
  }
  .wallet-input::placeholder {
    color: #b8aea7;
  }
  .wallet-error {
    margin: 6px 0 0;
    color: #c03900;
    font-size: 12px;
  }
  .wallet-note {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin: 14px 2px 0;
    color: #756b64;
    font-size: 12px;
    line-height: 1.45;
  }
  .wallet-note svg {
    flex: none;
    margin-top: 1px;
    color: #ff7a14;
  }
  .wallet-list-section {
    margin-bottom: 0;
  }
  .wallet-list {
    display: grid;
    gap: 10px;
    padding: 12px;
  }
  .wallet-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    border: 1px solid #eee4dd;
    border-radius: 16px;
    background: #ffffff;
    transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  }
  .wallet-card.is-selectable {
    cursor: pointer;
  }
  .wallet-card.is-selectable:active {
    transform: scale(.99);
  }
  .wallet-card.is-default {
    border-color: #ffb77e;
    box-shadow: 0 4px 12px rgba(255, 122, 20, .10);
  }
  .wallet-card-icon {
    display: grid;
    width: 44px;
    height: 44px;
    flex: none;
    place-items: center;
    border-radius: 14px;
    background: #fff0e5;
    color: #c65100;
  }
  .wallet-card-copy {
    min-width: 0;
    flex: 1;
  }
  .wallet-card-method {
    margin: 0;
    color: #171717;
    font-size: 14px;
    font-weight: 800;
  }
  .wallet-card-name,
  .wallet-card-number {
    margin: 3px 0 0;
    overflow: hidden;
    color: #756b64;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-card-number {
    color: #9a8f87;
  }
  .wallet-default {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 7px;
    color: #c65100;
    font-size: 11px;
    font-weight: 800;
  }
  .wallet-card-actions {
    display: flex;
    align-items: center;
    gap: 5px;
    flex: none;
  }
  .wallet-icon-action {
    display: grid;
    width: 34px;
    height: 34px;
    place-items: center;
    border: 1px solid #f0e3da;
    border-radius: 11px;
    background: #ffffff;
    color: #c65100;
    cursor: pointer;
  }
  .wallet-icon-action:hover,
  .wallet-icon-action:focus-visible {
    border-color: #ffb77e;
    background: #fff8f2;
    outline: none;
  }
  .wallet-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 16px 24px;
    text-align: center;
  }
  .wallet-empty img {
    width: 136px;
    height: 136px;
    object-fit: contain;
    opacity: .88;
  }
  .wallet-empty p {
    margin: 6px 0 0;
    color: #6b625d;
    font-size: 13px;
  }
  .wallet-empty p + p {
    margin-top: 4px;
    color: #9a8f87;
    font-size: 12px;
  }
  .wallet-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    padding: 12px 16px 20px;
    border-top: 1px solid #f0e5dc;
    background: rgba(255, 255, 255, .96);
    box-shadow: 0 -6px 18px rgba(42, 25, 14, .06);
  }
  .wallet-footer-inner {
    width: 100%;
    max-width: 508px;
    margin: 0 auto;
  }
  .wallet-primary {
    display: flex;
    width: 100%;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 0;
    border-radius: 15px;
    background: #ff7a14;
    box-shadow: 0 7px 14px rgba(255, 122, 20, .22);
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
  }
  .wallet-primary:hover,
  .wallet-primary:focus-visible {
    background: #e96808;
    outline: 3px solid rgba(255, 122, 20, .20);
    outline-offset: 2px;
  }
  .wallet-primary:disabled {
    cursor: not-allowed;
    opacity: .55;
  }
  .wallet-form-page {
    background: #ffffff;
  }
  .wallet-form-topbar {
    border-bottom: 0;
    background: transparent;
  }
  .wallet-form-topbar .wallet-back {
    border-color: rgba(23, 23, 23, .18);
    background: rgba(255, 255, 255, .5);
    color: #171717;
  }
  .wallet-form-topbar .wallet-eyebrow {
    color: #171717;
  }
  .wallet-form-topbar .wallet-title {
    color: #171717;
  }
  .wallet-form-content {
    min-height: calc(100vh - 73px);
    padding-top: 20px;
    background: transparent;
  }
  .wallet-form-page .wallet-shell,
  .wallet-scene-page .wallet-shell {
    min-height: 100vh;
    background-color: #ffffff;
    background-image:
      linear-gradient(rgba(255, 255, 255, .22), rgba(255, 255, 255, .22)),
      url("${chargepointPromo}");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .wallet-reference-card {
    overflow: hidden;
    border: 1px solid #e7e2de;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(23, 23, 23, .06);
  }
  .wallet-reference-card h2 {
    margin: 0;
    border-bottom: 1px solid #ece8e5;
    padding: 18px 20px 15px;
    color: #171717;
    font-size: 19px;
    font-weight: 800;
  }
  .wallet-reference-row {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 14px;
    min-height: 62px;
    padding: 15px 20px;
    border: 0;
    background: #ffffff;
    color: #171717;
    text-align: left;
    cursor: pointer;
  }
  .wallet-reference-row:hover,
  .wallet-reference-row:focus-visible {
    background: #fffaf6;
    outline: none;
  }
  .wallet-reference-label {
    width: 84px;
    flex: none;
    color: #4e4742;
    font-size: 15px;
    font-weight: 700;
  }
  .wallet-reference-value {
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: #171717;
    font-size: 15px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-reference-value.is-empty {
    color: #9b918a;
    font-weight: 500;
  }
  .wallet-reference-row svg {
    flex: none;
    color: #c65100;
  }
  .wallet-reference-divider {
    height: 1px;
    margin: 0 20px;
    background: #e5e1de;
  }
  .wallet-reference-address {
    min-height: 104px;
    padding: 18px 20px 22px;
    background: #ffffff;
  }
  .wallet-reference-address label {
    display: block;
    margin-bottom: 8px;
    color: #4e4742;
    font-size: 15px;
    font-weight: 700;
  }
  .wallet-reference-address .wallet-input {
    border-bottom-color: #d9cec5;
    padding: 4px 0 9px;
    font-size: 15px;
    text-align: left;
  }
  .wallet-form-note {
    margin: 14px 2px 0;
    color: #756b64;
    font-size: 12px;
    line-height: 1.45;
    text-align: center;
  }
  .wallet-form-page .wallet-footer {
    border-top: 0;
    background: transparent;
    box-shadow: none;
  }
  .wallet-scene-page .wallet-topbar {
    border-bottom: 0;
    background: transparent;
  }
  .wallet-scene-page .wallet-content {
    background: transparent;
  }
  .wallet-scene-page .wallet-footer {
    border-top: 0;
    background: transparent;
    box-shadow: none;
  }
  .wallet-scene-page .wallet-primary {
    min-height: 56px;
    border-radius: 30px;
  }
  @media (min-width: 700px) {
    .wallet-footer {
      position: static;
      padding: 0 16px 24px;
      border-top: 0;
      background: #ffffff;
      box-shadow: none;
    }
  }
`;

export default function WalletPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const selectMode = params.get("from") === "withdrawal";
  const [showForm, setShowForm] = useState(false);
  const [showBankSheet, setShowBankSheet] = useState(false);
  const [showCountrySheet, setShowCountrySheet] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [bankSearch, setBankSearch] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  const { data: wallets, isLoading } = useQuery<WithdrawalWallet[]>({
    queryKey: ["/api/wallets"],
  });

  const { data: apiCountries = [] } = useQuery<ApiCountry[]>({
    queryKey: ["/api/countries"],
  });

  const form = useForm<WalletForm>({
    resolver: zodResolver(walletSchema),
    defaultValues: { accountNumber: "", paymentMethod: "" },
  });

  useEffect(() => {
    if (user && !selectedCountry) {
      setSelectedCountry(user.country);
    }
  }, [user, selectedCountry]);

  const addMutation = useMutation({
    mutationFn: async (data: WalletForm) => {
      const response = await apiRequest("POST", "/api/wallets", {
        ...data,
        accountName: user!.fullName,
        country: selectedCountry,
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Erreur");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/wallets"] });
      toast({ title: "Portefeuille ajouté !" });
      form.reset();
      setSelectedMethod("");
      setSelectedCountry(user?.country || "");
      setShowForm(false);
    },
    onError: (error: any) => {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (walletId: number) => {
      const response = await apiRequest("DELETE", `/api/wallets/${walletId}`, {});
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Erreur");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/wallets"] });
      toast({ title: "Portefeuille supprimé !" });
    },
    onError: (error: any) => {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    },
  });

  const setDefaultMutation = useMutation({
    mutationFn: async (walletId: number) => {
      const response = await apiRequest("PATCH", `/api/wallets/${walletId}/default`, {});
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Erreur");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/wallets"] });
    },
    onError: (error: any) => {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    },
  });

  const handleSelectWallet = (wallet: WithdrawalWallet) => {
    if (selectMode) {
      localStorage.setItem("selectedWalletId", wallet.id.toString());
      navigate("/withdrawal");
    }
  };

  const handleChooseMethod = (method: string) => {
    setSelectedMethod(method);
    form.setValue("paymentMethod", method);
    setBankSearch("");
    setShowBankSheet(false);
  };

  const handleChooseCountry = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setSelectedMethod("");
    form.setValue("paymentMethod", "");
    setCountrySearch("");
    setShowCountrySheet(false);
  };

  const handleSubmit = () => {
    if (!selectedCountry) {
      toast({ title: "Pays requis", description: "Sélectionnez un pays.", variant: "destructive" });
      return;
    }
    form.handleSubmit((data) => addMutation.mutate(data))();
  };

  if (!user) return null;

  const selectedCountryData = apiCountries.find(
    (country) => country.code === selectedCountry && country.isActive,
  );
  const selectedCountryLabel = selectedCountryData?.name || selectedCountry || "Sélectionner un pays";
  const paymentMethods = getPaymentMethodsForCountry(selectedCountry, apiCountries);
  const activeCountries = apiCountries
    .filter((country) => country.isActive)
    .sort((first, second) => first.name.localeCompare(second.name, "fr"));
  const backLink = selectMode ? "/withdrawal" : "/account";
  const showWalletOverview = selectMode || wallets === undefined || wallets.length > 0;

  if (showForm) {
    return (
      <div className="wallet-page wallet-form-page">
        <style>{walletStyles}</style>
        <div className="wallet-shell">
          <header className="wallet-topbar wallet-form-topbar">
            <button
              onClick={() => { setShowForm(false); form.reset(); setSelectedMethod(""); setSelectedCountry(user.country); }}
              className="wallet-back"
              data-testid="button-back-form"
              aria-label="Retour"
            >
              <ChevronLeft size={21} />
            </button>
            <div className="wallet-heading">
              <span className="wallet-eyebrow">Compte de retrait</span>
              <h1 className="wallet-title">Ajouter un compte</h1>
            </div>
            <div className="w-10" aria-hidden="true" />
          </header>

          <main className="wallet-content wallet-form-content">
            <section className="wallet-reference-card">
              <h2>Informations du compte</h2>

              <button
                type="button"
                onClick={() => setShowCountrySheet(true)}
                className="wallet-reference-row"
                data-testid="button-select-country"
              >
                <span className="wallet-reference-label">Type</span>
                <span className={`wallet-reference-value${selectedCountry ? "" : " is-empty"}`}>
                  {selectedCountryLabel}
                </span>
                <ChevronDown size={19} />
              </button>

              <div className="wallet-reference-divider" />

              <button
                type="button"
                onClick={() => setShowBankSheet(true)}
                className="wallet-reference-row"
                data-testid="button-select-network"
              >
                <span className="wallet-reference-label">Network</span>
                <span className={`wallet-reference-value${selectedMethod ? "" : " is-empty"}`}>
                  {selectedMethod || "Sélectionner un opérateur"}
                </span>
                <ChevronDown size={19} />
              </button>

              <div className="wallet-reference-divider" />

              <div className="wallet-reference-address">
                <label htmlFor="wallet-account-number">Adresse</label>
                <input
                  id="wallet-account-number"
                  {...form.register("accountNumber")}
                  type="tel"
                  placeholder="Saisissez le numéro"
                  className="wallet-input"
                  data-testid="input-wallet-number"
                />
                {form.formState.errors.accountNumber && (
                  <p className="wallet-error">{form.formState.errors.accountNumber.message}</p>
                )}
              </div>
            </section>

            <p className="wallet-form-note">
              Le numéro sera utilisé pour recevoir vos retraits.
            </p>
          </main>

        <footer className="wallet-footer">
          <div className="wallet-footer-inner">
            <button
              onClick={handleSubmit}
              disabled={addMutation.isPending}
              className="wallet-primary"
              data-testid="button-confirm-wallet"
            >
              {addMutation.isPending ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Enregistrement...
                </>
              ) : (
                "Confirmer"
              )}
            </button>
          </div>
        </footer>

        {showCountrySheet && (
          <div className="country-picker-overlay" onClick={() => { setCountrySearch(""); setShowCountrySheet(false); }}>
            <section
              className="country-picker"
              role="dialog"
              aria-modal="true"
              aria-label="Choisir un pays"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="country-picker-header">
                <h2>Choisir un pays</h2>
                <button
                  className="country-picker-close"
                  onClick={() => { setCountrySearch(""); setShowCountrySheet(false); }}
                  aria-label="Fermer"
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <div className="country-picker-search">
                <Search aria-hidden="true" />
                <input
                  autoFocus
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  placeholder="Rechercher un pays"
                  aria-label="Rechercher un pays"
                />
              </div>
              <div className="country-picker-list">
                {activeCountries
                  .filter((country) => country.name.toLowerCase().includes(countrySearch.trim().toLowerCase()))
                  .map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleChooseCountry(country.code)}
                      className={`country-picker-row${selectedCountry === country.code ? " is-selected" : ""}`}
                      data-testid={`button-country-${country.code}`}
                    >
                      <span className="country-picker-name">{country.name}</span>
                      <span className="country-picker-prefix">{country.code}</span>
                      {selectedCountry === country.code && (
                        <span className="country-picker-check"><Check aria-hidden="true" /></span>
                      )}
                    </button>
                  ))}
                {activeCountries.length === 0 && (
                  <p className="country-picker-empty">Chargement des pays...</p>
                )}
                {activeCountries.length > 0 && activeCountries.filter(
                  (country) => country.name.toLowerCase().includes(countrySearch.trim().toLowerCase()),
                ).length === 0 && (
                  <p className="country-picker-empty">Aucun pays trouvé</p>
                )}
              </div>
            </section>
          </div>
        )}

        {showBankSheet && (
          <div className="country-picker-overlay" onClick={() => { setBankSearch(""); setShowBankSheet(false); }}>
            <section
              className="country-picker"
              role="dialog"
              aria-modal="true"
              aria-label="Choisir un opérateur de paiement"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="country-picker-header">
                <h2>Choisir un opérateur</h2>
                <button
                  className="country-picker-close"
                  onClick={() => { setBankSearch(""); setShowBankSheet(false); }}
                  aria-label="Fermer"
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <div className="country-picker-search">
                <Search aria-hidden="true" />
                <input
                  autoFocus
                  value={bankSearch}
                  onChange={(e) => setBankSearch(e.target.value)}
                  placeholder="Rechercher"
                  aria-label="Rechercher un opérateur"
                />
              </div>
              <div className="country-picker-list">
                {paymentMethods
                  .filter((method) => method.toLowerCase().includes(bankSearch.trim().toLowerCase()))
                  .map((method) => (
                  <button
                    key={method}
                    onClick={() => handleChooseMethod(method)}
                    className={`country-picker-row${selectedMethod === method ? " is-selected" : ""}`}
                    data-testid={`button-bank-${method}`}
                  >
                    <span>{method}</span>
                    {selectedMethod === method && (
                      <span className="country-picker-check"><Check aria-hidden="true" /></span>
                    )}
                  </button>
                ))}
                {paymentMethods.filter((method) => method.toLowerCase().includes(bankSearch.trim().toLowerCase())).length === 0 && (
                  <p className="country-picker-empty">Aucun opérateur trouvé</p>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
      </div>
    );
  }

  return (
    <div className="wallet-page wallet-scene-page">
      <style>{walletStyles}</style>
      <div className="wallet-shell">
        <header className="wallet-topbar">
          <Link href={backLink}>
            <button className="wallet-back" data-testid="button-back" aria-label="Retour">
              <ChevronLeft size={19} />
            </button>
          </Link>
          <div className="wallet-heading">
            <span className="wallet-eyebrow">{selectMode ? "Retrait" : "Sécurité du compte"}</span>
            <h1 className="wallet-title">
              {selectMode ? "Sélectionner un compte" : "Mes cartes bancaires"}
            </h1>
          </div>
          {!selectMode ? (
            <button
              onClick={() => setShowForm(true)}
              className="wallet-top-action"
              data-testid="button-add-wallet-icon"
              aria-label="Ajouter une carte"
            >
              <Plus size={19} />
            </button>
          ) : (
            <div className="w-10" aria-hidden="true" />
          )}
        </header>

        <main className="wallet-content">
          {showWalletOverview && (
            <>
              <section className="wallet-hero">
                <div className="wallet-hero-icon"><CreditCard size={21} /></div>
                <div>
                  <h2>{selectMode ? "Choisissez le compte à utiliser" : "Retraits simples et sécurisés"}</h2>
                  <p>
                    {selectMode
                      ? "Sélectionnez un compte enregistré pour continuer votre retrait."
                      : "Ajoutez et gérez les comptes utilisés pour recevoir vos retraits."}
                  </p>
                </div>
              </section>

              <section className="wallet-section wallet-list-section">
                <div className="wallet-section-header">
                  <div>
                    <h2 className="wallet-section-title">Comptes enregistrés</h2>
                    <p className="wallet-section-caption">
                      {wallets?.length ? `${wallets.length} compte${wallets.length > 1 ? "s" : ""} disponible${wallets.length > 1 ? "s" : ""}` : "Aucun compte ajouté"}
                    </p>
                  </div>
                  <span className="wallet-step"><CreditCard size={13} /></span>
                </div>

                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="w-6 h-6 animate-spin text-[#FF7A14]" />
                  </div>
                ) : wallets && wallets.length > 0 ? (
                  <div className="wallet-list">
                    {wallets.map((wallet) => (
                      <article
                        key={wallet.id}
                        onClick={() => selectMode && handleSelectWallet(wallet)}
                        className={`wallet-card${selectMode ? " is-selectable" : ""}${wallet.isDefault ? " is-default" : ""}`}
                        data-testid={`wallet-card-${wallet.id}`}
                      >
                        <div className="wallet-card-icon">
                          <CreditCard size={20} />
                        </div>
                        <div className="wallet-card-copy">
                          <p className="wallet-card-method">{wallet.paymentMethod}</p>
                          <p className="wallet-card-name">{wallet.accountName}</p>
                          <p className="wallet-card-number">{wallet.accountNumber}</p>
                          {wallet.isDefault && (
                            <span className="wallet-default">
                              <Shield size={12} /> Compte par défaut
                            </span>
                          )}
                        </div>

                        {!selectMode && (
                          <div className="wallet-card-actions">
                            {!wallet.isDefault && (
                              <button
                                onClick={() => setDefaultMutation.mutate(wallet.id)}
                                disabled={setDefaultMutation.isPending}
                                className="wallet-icon-action"
                                data-testid={`button-set-default-${wallet.id}`}
                                aria-label="Définir comme compte par défaut"
                              >
                                <Check size={16} />
                              </button>
                            )}
                            <button
                              onClick={() => deleteMutation.mutate(wallet.id)}
                              disabled={deleteMutation.isPending}
                              className="wallet-icon-action"
                              data-testid={`button-delete-wallet-${wallet.id}`}
                              aria-label="Supprimer ce compte"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        )}

                        {selectMode && <ChevronRight size={18} className="text-[#c65100] flex-shrink-0" />}
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="wallet-empty">
                    <img src={emptyIllustration} alt="" />
                    <p>Aucun compte bancaire enregistré</p>
                    <p>Ajoutez un compte pour effectuer vos retraits.</p>
                  </div>
                )}
              </section>
            </>
          )}
        </main>

        <footer className="wallet-footer">
          <div className="wallet-footer-inner">
            <button
              onClick={() => setShowForm(true)}
              className="wallet-primary"
              data-testid="button-add-wallet"
            >
              <Plus size={18} />
              Ajouter un compte
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
