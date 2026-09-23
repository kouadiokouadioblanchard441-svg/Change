import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getCountryByCode } from "@/lib/countries";
import { Bell, CreditCard, Gauge, Headphones, PlugZap, ReceiptText, ShieldCheck, WalletCards } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import "./home.css";

import homeFlex from "@assets/ChargePoint-Home-Flex-50A-CPH50-app-1280px__29346__78945__7114_1790148214522.png";
import ct4000 from "@assets/CT4000-Top-main-with-energy-star_1790148214627.png";

interface Withdrawal {
  amount: string;
  status: string;
}

const quickActions = [
  { label: "Recharger", href: "/deposit", icon: CreditCard },
  { label: "Retrait", href: "/withdrawal", icon: WalletCards },
  { label: "Aide", href: "/service", icon: Headphones },
  { label: "Pointage", href: "/checkin", icon: ReceiptText },
];

export default function HomePage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { data: settings } = useQuery<Record<string, string>>({ queryKey: ["/api/settings"] });
  const { data: withdrawals } = useQuery<Withdrawal[]>({ queryKey: ["/api/withdrawals/history"], enabled: !!user });
  const [welcomePopupOpen, setWelcomePopupOpen] = useState(false);

  if (!user) return null;
  const country = getCountryByCode(user.country);
  const currency = country?.currency || "XOF";
  const balance = Number.parseFloat(user.balance || "0");
  const totalEarnings = Number.parseFloat(user.totalEarnings || "0");
  const noticeText = settings?.noticeText && !/stone by ton|pierres naturelles|travertin/i.test(settings.noticeText)
    ? settings.noticeText
    : "Bienvenue dans votre espace ChargePoint.";
  const groupLink = settings?.groupLink || "";
  const formatMoney = (amount: number) => `${Math.round(amount).toLocaleString("fr-FR")} ${currency}`;
  const withdrawnTotal = withdrawals?.filter((item) => item.status === "approved")
    .reduce((sum, item) => sum + (Number.parseFloat(item.amount) || 0), 0);

  return (
    <>
      <main className="cp-home">
        <div className="cp-shell">
          <section className="cp-hero" aria-label="ChargePoint">
            <div className="cp-hero-copy">
              <span className="cp-kicker">CHARGEPOINT</span>
              <h1>L'énergie<br /><strong>en mouvement.</strong></h1>
              <p>Votre recharge, votre rythme.</p>
            </div>
            <div className="cp-hero-art">
              <div className="cp-orbit cp-orbit-one" />
              <div className="cp-orbit cp-orbit-two" />
              <img src={homeFlex} alt="ChargePoint Home Flex" />
            </div>
          </section>

          <section className="cp-actions" aria-label="Actions rapides">
            {quickActions.map(({ label, href, icon: Icon }) => (
              <button key={label} className="cp-action" onClick={() => navigate(href)}>
                <span className="cp-action-icon"><Icon size={23} strokeWidth={1.8} /></span>
                <span>{label}</span>
              </button>
            ))}
          </section>

          <button className="cp-notice" type="button" onClick={() => setWelcomePopupOpen(true)} aria-label={`Informations : ${noticeText}`}>
            <span className="cp-notice-icon"><Bell size={16} /></span>
            <span>{noticeText}</span>
          </button>

          <section className="cp-overview" aria-labelledby="overview-title">
            <header className="cp-section-heading">
              <div><span className="cp-eyebrow">VOTRE ESPACE</span><h2 id="overview-title">Aperçu</h2></div>
              <button className="cp-outline-button" onClick={() => navigate("/wallet")}><Gauge size={15} /> Détails</button>
            </header>
            <div className="cp-metrics">
              <article className="cp-balance">
                <div className="cp-card-top"><span>Solde disponible</span><ShieldCheck size={18} /></div>
                <strong data-testid="text-balance">{formatMoney(balance)}</strong>
                <span className="cp-card-note">Prêt pour votre prochaine recharge</span>
                <div className="cp-balance-image"><img src={homeFlex} alt="" /></div>
              </article>
              <div className="cp-stack">
                <article className="cp-stat cp-stat-orange">
                  <span>Revenus accumulés</span><strong data-testid="text-total-earnings">{formatMoney(totalEarnings)}</strong>
                  <span className="cp-stat-mark">+ ChargePoint</span>
                </article>
                <article className="cp-stat cp-stat-ink">
                  <span>Montant retiré</span><strong>{withdrawnTotal === undefined ? "—" : formatMoney(withdrawnTotal)}</strong>
                  <span className="cp-stat-mark">{withdrawnTotal === undefined ? "Historique indisponible" : "Retraits approuvés"}</span>
                </article>
              </div>
            </div>
            <button className="cp-mission" onClick={() => navigate("/about")}>
              <div><span className="cp-eyebrow">NOTRE MISSION</span><h2>Une recharge plus simple.</h2><p>Découvrez l'écosystème ChargePoint.</p></div>
              <span className="cp-mission-arrow">Accéder <span>→</span></span>
              <img src={ct4000} alt="" />
            </button>
          </section>
        </div>
      </main>

      <Dialog open={welcomePopupOpen} onOpenChange={setWelcomePopupOpen}>
        <DialogContent className="cp-dialog">
          <DialogHeader><DialogTitle>ChargePoint</DialogTitle></DialogHeader>
          <div className="cp-dialog-copy"><PlugZap size={28} /><p>{settings?.welcomeText || "Retrouvez les nouveautés et l'assistance ChargePoint dans votre espace."}</p></div>
          {groupLink && <a className="cp-dialog-link" href={groupLink} target="_blank" rel="noreferrer" onClick={() => setWelcomePopupOpen(false)}>Ouvrir le groupe</a>}
          <button className="cp-dialog-close" type="button" onClick={() => setWelcomePopupOpen(false)}>Fermer</button>
        </DialogContent>
      </Dialog>
    </>
  );
}