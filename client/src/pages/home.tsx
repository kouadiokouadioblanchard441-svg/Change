import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getCountryByCode } from "@/lib/countries";
import { PlugZap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import HomeActionIcon from "@/components/home-action-icon";
import "./home.css";

import noticeBell from "@/assets/notice-bell.png";
import homeFlex from "@assets/ChargePoint-Home-Flex-50A-CPH50-app-1280px__29346__78945__7114_1790148214522.png";
import ct4000 from "@assets/CT4000-Top-main-with-energy-star_1790148214627.png";

interface Withdrawal {
  amount: string;
  status: string;
}

const quickActions = [
  { label: "Dépôt", href: "/deposit", kind: "deposit" },
  { label: "Retrait", href: "/withdrawal", kind: "withdrawal" },
  { label: "Aide", href: "/service", kind: "support" },
  { label: "Pointage", href: "/checkin", kind: "checkin" },
] as const;

const homeAnnouncements = [
  "Bienvenue dans votre espace ChargePoint.",
  "Accédez à vos dépôts depuis l'accueil.",
  "Suivez vos retraits dans l'application.",
  "Consultez votre solde dans la rubrique Aperçu.",
  "Besoin d'aide ? Notre équipe vous accompagne.",
  "Effectuez votre pointage depuis l'accueil.",
] as const;

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
            {quickActions.map(({ label, href, kind }) => (
              <button key={label} className="cp-action" onClick={() => navigate(href)}>
                <span className="cp-action-icon">
                  <HomeActionIcon kind={kind} />
                </span>
                <span>{label}</span>
              </button>
            ))}
          </section>

          <button className="cp-notice" type="button" onClick={() => setWelcomePopupOpen(true)} aria-label="Ouvrir les informations ChargePoint" aria-describedby="cp-notice-messages">
            <span className="cp-notice-icon"><img src={noticeBell} alt="" width={26} height={26} /></span>
            <span className="cp-notice-marquee" aria-hidden="true">
              <span className="cp-notice-track">
                {[0, 1].map((copy) => (
                  <span className="cp-notice-group" key={copy}>
                    {homeAnnouncements.map((announcement, index) => (
                      <span className="cp-notice-item" key={`${copy}-${index}`}>{announcement}</span>
                    ))}
                  </span>
                ))}
              </span>
            </span>
            <span className="sr-only" id="cp-notice-messages">{homeAnnouncements.join(". ")}</span>
          </button>

          <section className="cp-overview" aria-labelledby="overview-title">
            <header className="cp-section-heading">
              <h2 id="overview-title">Aperçu</h2>
            </header>
            <div className="cp-metrics">
              <button className="cp-balance" type="button" onClick={() => navigate("/wallet")} aria-label={`Voir le portefeuille, solde ${formatMoney(balance)}`}>
                <div className="cp-balance-image"><img src={ct4000} alt="" /></div>
                <strong data-testid="text-balance">{formatMoney(balance)}</strong>
                <span className="cp-card-note">Solde</span>
              </button>
              <div className="cp-stack">
                <article className="cp-stat cp-stat-orange">
                  <strong data-testid="text-total-earnings">{formatMoney(totalEarnings)}</strong>
                  <span>Cumul</span>
                </article>
                <article className="cp-stat cp-stat-ink">
                  <strong>{withdrawnTotal === undefined ? "—" : formatMoney(withdrawnTotal)}</strong>
                  <span>Retrait</span>
                  {withdrawnTotal === undefined && <small>Historique indisponible</small>}
                </article>
              </div>
            </div>
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