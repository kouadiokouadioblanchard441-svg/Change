import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getCountryByCode } from "@/lib/countries";
import { ChevronRight, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import "./home.css";

import noticeBell from "@/assets/notice-bell.png";
import announcementStar from "@/assets/announcement-star.png";
import depositIcon from "@/assets/home-actions/deposit.png";
import withdrawalIcon from "@/assets/home-actions/withdrawal.png";
import supportIcon from "@/assets/home-actions/support.png";
import checkinIcon from "@/assets/home-actions/checkin.png";
import chargingStationUser from "@assets/banner-filtered/charging-station-user.jpg";
import electricBus from "@assets/banner-filtered/electric-bus.jpg";
import homeCharging from "@assets/banner-filtered/home-charging.jpg";
import publicCharger from "@assets/banner-filtered/public-charger.jpg";
import chargerProduct from "@assets/banner-filtered/charger-product.jpg";
import chargeflexOverview from "@assets/overview-chargeflex-no-bg.png";
import cpf50Overview from "@assets/overview-cpf50-no-bg.png";
import ct4000 from "@assets/CT4000-Top-main-with-energy-star_1790148214627.png";
import doosanLogo from "@assets/6790d8bd04714fedd7593cb6_Doosan_Group_and_Corporation_-_Logo.s_1784561452870.png";
import intelLogo from "@assets/Intel-logo-2022_1782688971182.png";
import sybotxLogo from "@/assets/Logo_SYBOTX_recadre_1786844134617.png";
import vestasLogo from "@/assets/vestas-logo_1783210030332.png";
import elfLogo from "@/assets/images/elf-logo-card.png";
import jollibeeLogo from "@/assets/jollibee_logo.png";

interface Withdrawal {
  amount: string;
  status: string;
}

const quickActions = [
  { label: "Dépôt", href: "/deposit", icon: depositIcon },
  { label: "Retrait", href: "/withdrawal", icon: withdrawalIcon },
  { label: "Aide", href: "/service", icon: supportIcon },
  { label: "Pointage", href: "/checkin", icon: checkinIcon },
] as const;

const bannerSlides = [
  { image: chargingStationUser, alt: "Conducteur utilisant une borne de recharge" },
  { image: electricBus, alt: "Bus électrique en charge" },
  { image: homeCharging, alt: "Recharge d'un véhicule à domicile" },
  { image: publicCharger, alt: "Bornes de recharge dans un espace public" },
  { image: chargerProduct, alt: "Équipement de recharge ChargePoint" },
] as const;

const announcementLibrary = [
  "052**85 a obtenu 20 000 F de bonus d'équipe",
  "55*368 a retiré 23 654 F",
  "07****42 a obtenu 12 500 F de bonus d'équipe",
  "01****73 a retiré 8 000 F",
  "05****91 a obtenu 15 000 F de bonus d'équipe",
  "07****26 a retiré 32 400 F",
  "05****14 a obtenu 10 000 F de bonus d'équipe",
  "01****82 a retiré 15 000 F",
  "07****63 a obtenu 18 500 F de bonus d'équipe",
  "05****47 a retiré 27 800 F",
  "01****29 a obtenu 25 000 F de bonus d'équipe",
  "07****18 a retiré 11 250 F",
] as const;

const partners = [
  { name: "Doosan", logo: doosanLogo, className: "cp-partner-logo-wide" },
  { name: "Vestas", logo: vestasLogo, className: "cp-partner-logo-wide" },
  { name: "ELF", logo: elfLogo, className: "cp-partner-logo-elf" },
  { name: "SYBOTX", logo: sybotxLogo, className: "cp-partner-logo-sybotx" },
  { name: "Intel", logo: intelLogo, className: "cp-partner-logo-intel" },
  { name: "Jollibee", logo: jollibeeLogo, className: "cp-partner-logo-jollibee" },
] as const;

export default function HomePage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { data: settings } = useQuery<Record<string, string>>({ queryKey: ["/api/settings"] });
  const { data: withdrawals } = useQuery<Withdrawal[]>({ queryKey: ["/api/withdrawals/history"], enabled: !!user });
  const [welcomePopupOpen, setWelcomePopupOpen] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBannerIndex((current) => (current + 1) % bannerSlides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setWelcomePopupOpen(true);
  }, []);

  if (!user) return null;
  const country = getCountryByCode(user.country);
  const currency = country?.currency || "XOF";
  const balance = Number.parseFloat(user.balance || "0");
  const totalEarnings = Number.parseFloat(user.totalEarnings || "0");
  const groupLink = settings?.groupLink || "";
  const popupButtonLabel = settings?.popupButtonLabel || settings?.groupLabel || "Rejoindre le groupe Telegram Officiel";
  const formatMoney = (amount: number) => `${Math.round(amount).toLocaleString("fr-FR")} ${currency}`;
  const configuredMinDeposit = Number.parseInt(settings?.minDeposit || "3500", 10);
  const minimumDeposit = Math.max(3500, Number.isFinite(configuredMinDeposit) ? configuredMinDeposit : 3500);
  const popupIntro = "ChargePoint est votre espace personnel pour accéder à vos services financiers et suivre les informations essentielles de la plateforme.";
  const popupItems = [
    `Dépôt minimum : ${formatMoney(minimumDeposit)}.`,
    `Bonus de pointage quotidien : de ${formatMoney(20)} à ${formatMoney(50)}, une fois toutes les 24 heures.`,
    "Consultez la rubrique Retrait pour connaître les conditions et les horaires applicables.",
    "La plateforme ChargePoint est officiellement lancée.",
  ];
  const withdrawnTotal = withdrawals?.filter((item) => item.status === "approved")
    .reduce((sum, item) => sum + (Number.parseFloat(item.amount) || 0), 0);

  return (
    <>
      <main className="cp-home">
        <div className="cp-shell">
          <section className="cp-hero" aria-label="ChargePoint">
            <div className="cp-hero-slides" style={{ transform: `translateX(-${bannerIndex * 100}%)` }}>
              {bannerSlides.map(({ image, alt }, index) => (
                <div className="cp-hero-slide" key={image} aria-hidden={index !== bannerIndex}>
                  <img src={image} alt={alt} />
                </div>
              ))}
            </div>
            <div className="cp-hero-dots" aria-label="Images de la bannière">
              {bannerSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  className={index === bannerIndex ? "is-active" : ""}
                  onClick={() => setBannerIndex(index)}
                  aria-label={`Afficher l'image ${index + 1}`}
                  aria-pressed={index === bannerIndex}
                />
              ))}
            </div>
          </section>

          <section className="cp-actions" aria-label="Actions rapides">
            {quickActions.map(({ label, href, icon }) => (
              <button key={label} className="cp-action" onClick={() => navigate(href)}>
                <span className="cp-action-icon">
                  <img src={icon} alt="" />
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
                    {announcementLibrary.map((announcement, index) => (
                      <span className="cp-notice-item" key={`${copy}-${index}`}>
                        <span>{announcement}</span>
                        <span className="cp-notice-stars" aria-hidden="true">
                          {[0, 1, 2].map((star) => (
                            <img src={announcementStar} alt="" key={star} />
                          ))}
                        </span>
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </span>
            <span className="sr-only" id="cp-notice-messages">{announcementLibrary.join(". ")}</span>
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
                  <img className="cp-stat-image cp-stat-image-chargeflex" src={chargeflexOverview} alt="" />
                  <strong data-testid="text-total-earnings">{formatMoney(totalEarnings)}</strong>
                  <span>Cumul</span>
                </article>
                <article className="cp-stat cp-stat-ink">
                  <img className="cp-stat-image cp-stat-image-cpf50" src={cpf50Overview} alt="" />
                  <strong>{withdrawnTotal === undefined ? "—" : formatMoney(withdrawnTotal)}</strong>
                  <span>Retrait</span>
                  {withdrawnTotal === undefined && <small>Historique indisponible</small>}
                </article>
              </div>
            </div>
          </section>

          <section className="cp-partners" aria-labelledby="partners-title">
            <header className="cp-partners-heading">
              <h2 id="partners-title">Nos partenaires</h2>
            </header>
            <div className="cp-partners-grid">
              {partners.map(({ name, logo, className }) => (
                <article className="cp-partner-card" key={name}>
                  <div className="cp-partner-logo">
                    <img className={className} src={logo} alt="" />
                  </div>
                  <span>{name}</span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Dialog open={welcomePopupOpen} onOpenChange={setWelcomePopupOpen}>
        <DialogContent className="cp-dialog" overlayClassName="cp-dialog-overlay">
          <DialogTitle className="sr-only">Message de bienvenue ChargePoint</DialogTitle>
          <DialogDescription className="sr-only">Consultez les informations de ChargePoint et rejoignez le groupe Telegram officiel.</DialogDescription>
          <div className="cp-dialog-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <path d="M16 3.5c-5.1 0-8 3.8-8 9v4.6l-2.1 3v1.4h20.2v-1.4l-2.1-3v-4.6c0-5.2-2.9-9-8-9Z" />
            </svg>
            <span />
          </div>
          <div className="cp-dialog-copy">
            <p className="cp-dialog-message">{popupIntro}</p>
            <ol className="cp-dialog-list">
              {popupItems.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>
          <div className="cp-dialog-actions">
            {groupLink && (
              <a className="cp-dialog-telegram" href={groupLink} target="_blank" rel="noreferrer" onClick={() => setWelcomePopupOpen(false)}>
                <Send size={18} aria-hidden="true" />
                <span>{popupButtonLabel}</span>
                <ChevronRight size={19} aria-hidden="true" />
              </a>
            )}
            <button className="cp-dialog-close" type="button" onClick={() => setWelcomePopupOpen(false)}>D’ACCORD</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}