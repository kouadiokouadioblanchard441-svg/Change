import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/auth";
import { FALLBACK_COUNTRIES, type ApiCountry } from "@/lib/countries";
import { CountrySelector } from "@/components/country-selector";
import { ChevronRight, Loader2, LockKeyhole, Square } from "lucide-react";
import loginIllustration from "@/assets/auth-chargepoint-combined.png";

const loginSchema = z.object({
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  country: z.string().min(2, "Sélectionnez un pays"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [, navigate] = useLocation();
  const { login } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [countryModalOpen, setCountryModalOpen] = useState(false);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      country: "",
      password: "",
    },
  });

  const { data: apiCountries, isLoading: countriesLoading } = useQuery<ApiCountry[]>({
    queryKey: ["/api/countries"],
  });

  const selectedCountry = form.watch("country");

  useEffect(() => {
    // Remove credentials persisted by versions that stored login data locally.
    localStorage.removeItem("doosan_credentials");
    localStorage.removeItem("doosan_login_preferences");
  }, []);

  useEffect(() => {
    if (!apiCountries || apiCountries.length === 0) return;
    const isValid = apiCountries.some(ac => ac.code === selectedCountry && ac.isActive);
    // Keep a remembered/selected country long enough for the server to apply
    // the administrator-only cross-country login rule.
    if (!isValid) {
      const first = apiCountries.find(ac => ac.isActive);
      if (first) form.setValue("country", first.code);
    }
  }, [apiCountries, selectedCountry, form]);

  const countryData = (() => {
    if (apiCountries && apiCountries.length > 0) {
      const c = apiCountries.find(ac => ac.code === selectedCountry && ac.isActive);
      if (c) return { phonePrefix: c.phonePrefix, name: c.name };
      return null;
    }
    const f = FALLBACK_COUNTRIES.find(fc => fc.code === selectedCountry);
    return f ? { phonePrefix: f.phonePrefix, name: f.name } : null;
  })();

  async function onSubmit(data: LoginForm) {
    setIsLoading(true);
    try {
      await login(data.phone, data.country, data.password);
      navigate("/");
    } catch (error: any) {
      toast({ title: "Erreur de connexion", description: error.message || "Vérifiez vos informations", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }

  const displayedPrefix = countryData?.phonePrefix || (countriesLoading ? "..." : "");

  return (
    <main className="auth-reference auth-login">
      <style>{`
         .auth-reference { width: 100%; min-height: 100dvh; overflow-x: hidden; background: #ffffff; color: #ff7a14; font-family: Arial, sans-serif; }
        .auth-reference *, .auth-reference *::before, .auth-reference *::after { box-sizing: border-box; }
         .auth-reference .auth-screen { width: 100%; max-width: 512px; min-height: 100dvh; margin: 0 auto; overflow: hidden; background: #ffffff; }
         .auth-reference .auth-panel { min-height: 100dvh; box-sizing: border-box; background: #ffffff; }
         .auth-login .auth-panel { width: 100%; padding: 18px clamp(16px, 6.05vw, 31px) 18px; }
         .auth-reference .auth-brand { margin: 0 0 22px; color: #111a13; font-size: clamp(39px, 10.55vw, 54px); font-weight: 400; line-height: 60px; text-align: left; }
        .auth-reference form { width: 100%; min-width: 0; }
        .auth-reference .auth-fields { display: grid; gap: 20px; }
         .auth-reference .auth-field { display: flex; width: 100%; min-width: 0; height: 67px; align-items: center; overflow: hidden; border: 2px solid #111827; border-radius: 11px; padding: 0 clamp(12px, 3.9vw, 20px); background: #fff; box-shadow: 0 2px 5px rgba(17, 24, 39, .14); transition: border-color .15s ease, box-shadow .15s ease; }
        .auth-reference .auth-field:focus-within { border-color: #000; box-shadow: 0 0 0 3px rgba(17, 24, 39, .12), 0 2px 5px rgba(17, 24, 39, .14); }
        .auth-reference .auth-field input { width: 0; min-width: 0; flex: 1 1 auto; overflow: hidden; border: 0; outline: 0; background: transparent; color: #111827; font-size: clamp(15px, 3.9vw, 20px); font-weight: 500; text-overflow: ellipsis; white-space: nowrap; }
        .auth-reference .auth-field input::placeholder { color: #111827; opacity: 1; }
        .auth-reference .auth-prefix { display: flex; flex: 0 1 auto; min-width: 0; align-items: center; gap: clamp(6px, 2.15vw, 11px); margin-right: clamp(8px, 3.32vw, 17px); border: 0; padding: 0; background: transparent; color: #111827; font-size: clamp(20px, 5.47vw, 28px); line-height: 1; white-space: nowrap; }
        .auth-reference .auth-prefix svg { width: clamp(25px, 6.25vw, 32px); height: clamp(25px, 6.25vw, 32px); flex: none; stroke-width: 2.7; }
        .auth-reference .auth-field-icon { width: clamp(27px, 6.64vw, 34px); height: clamp(27px, 6.64vw, 34px); flex: none; margin-right: clamp(7px, 1.95vw, 10px); color: #111827; stroke-width: 2.9; }
         .auth-reference .auth-switch { display: block; max-width: 100%; width: fit-content; margin: 20px 0 0 auto; border: 0; padding: 0; background: transparent; color: #111a13; font-size: clamp(16px, 3.9vw, 20px); font-weight: 400; line-height: 31px; text-align: right; text-decoration: underline; text-underline-offset: 2px; }
         .auth-reference .auth-submit { display: grid; width: 100%; min-height: 68px; place-items: center; margin-top: 20px; border: 2px solid #111827; border-radius: 11px; background: #ff7a14; color: #111827; font-size: clamp(23px, 5.66vw, 29px); font-weight: 800; line-height: 1.2; box-shadow: 0 4px 0 #111827, 0 7px 14px rgba(17, 24, 39, .22); cursor: pointer; transition: transform .12s ease, filter .12s ease, box-shadow .12s ease; }
        .auth-reference .auth-submit:hover:not(:disabled) { filter: brightness(.94); }
        .auth-reference .auth-submit:focus-visible { outline: 3px solid #111827; outline-offset: 4px; }
        .auth-reference .auth-submit:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #111827, 0 3px 7px rgba(17, 24, 39, .22); }
        .auth-reference .auth-submit:disabled { cursor: wait; }
        .auth-reference .auth-error { margin: -13px 0 -7px 4px; color: #fff; font-size: 12px; }
         .auth-reference .auth-illustration { display: block; width: 100%; max-width: 600px; height: auto; margin: 4px auto 28px; object-fit: contain; }
        @media (max-width: 370px) {
          .auth-login .auth-panel { padding-right: 22px; padding-left: 22px; }
          .auth-reference .auth-field { height: 64px; }
          .auth-reference .auth-fields { gap: 16px; }
          .auth-reference .auth-prefix { margin-right: 8px; }
          .auth-reference .auth-field-icon { margin-right: 8px; }
          .auth-reference .auth-submit { min-height: 64px; }
        }
      `}</style>

      <div className="auth-screen">
        <section className="auth-panel">
          <h1 className="auth-brand">ChargePoint</h1>
          <img className="auth-illustration" src={loginIllustration} alt="Borne domestique et station de recharge ChargePoint" />
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <input type="hidden" {...form.register("country")} />

            <div className="auth-fields">
              <div className="auth-field">
                <button type="button" className="auth-prefix" onClick={() => setCountryModalOpen(true)} data-testid="button-select-country" aria-label="Choisir le pays">
                  <Square aria-hidden="true" />
                  <span>+{displayedPrefix}</span>
                  <ChevronRight className="auth-country-arrow" aria-hidden="true" />
                </button>
                <input {...form.register("phone")} type="tel" autoComplete="username" placeholder="Entrez le numéro de téléphone" data-testid="input-phone" />
              </div>
              {form.formState.errors.phone && <p className="auth-error">{form.formState.errors.phone.message}</p>}

              <div className="auth-field">
                <LockKeyhole className="auth-field-icon" aria-hidden="true" />
                <input {...form.register("password")} type="password" autoComplete="current-password" placeholder="Entrez le mot de passe" data-testid="input-password" />
              </div>
              {form.formState.errors.password && <p className="auth-error">{form.formState.errors.password.message}</p>}
            </div>

            <button type="button" className="auth-switch" onClick={() => navigate("/register")} data-testid="link-register">Aller à l'inscription &gt;</button>
            <button type="submit" disabled={isLoading} className="auth-submit" data-testid="button-login">
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Se connecter"}
            </button>
          </form>
        </section>
      </div>

      <CountrySelector selectedCountryCode={selectedCountry} open={countryModalOpen} onClose={() => setCountryModalOpen(false)} onSelect={(code) => form.setValue("country", code, { shouldValidate: true })} />
    </main>
  );
}
