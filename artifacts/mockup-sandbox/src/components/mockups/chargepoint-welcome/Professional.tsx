import { ArrowDownToLine, Bell, ChevronRight, Gift, Send, ShieldCheck, Wallet } from "lucide-react";
import "./_group.css";
import "./welcome.css";
import "./professional.css";

const sections = [
  {
    title: "Dépôts",
    icon: Wallet,
    rows: [{ label: "Montant minimum", value: "3 500 XOF" }],
    note: undefined,
  },
  {
    title: "Retraits",
    icon: ArrowDownToLine,
    rows: [
      { label: "Montant minimum", value: "1 200 XOF" },
      { label: "Frais", value: "20 % du montant demandé" },
      { label: "Limite quotidienne", value: "1 demande" },
      { label: "Horaires", value: "09 h – 17 h" },
      { label: "Traitement", value: "Sous 2 h en général ; jusqu’à 24 h exceptionnellement" },
    ],
    note: "Le montant net estimé après frais est affiché avant validation.",
  },
  {
    title: "Bonus de pointage",
    icon: Gift,
    rows: [
      { label: "Montant", value: "20 à 50 XOF" },
      { label: "Fréquence", value: "Une fois toutes les 24 h" },
    ],
    note: undefined,
  },
];

export function Professional() {
  return (
    <main className="cp-preview-frame">
      <PreviewDashboard />
      <div className="cp-pro-overlay">
        <section className="cp-pro-dialog" aria-labelledby="cp-pro-title" aria-describedby="cp-pro-description">
          <header className="cp-pro-header">
            <div className="cp-pro-mark" aria-hidden="true"><Bell size={23} /></div>
            <div className="cp-pro-heading">
              <span className="cp-pro-eyebrow">CHARGEPOINT · INFORMATIONS UTILES</span>
              <h2 id="cp-pro-title">Conditions importantes</h2>
            </div>
          </header>
          <p id="cp-pro-description" className="cp-pro-description">
            Consultez les règles applicables à vos dépôts, retraits et bonus quotidiens.
          </p>
          <div className="cp-pro-scroll">
            {sections.map(({ title, icon: Icon, rows, note }) => (
              <section className="cp-pro-section" key={title} aria-label={title}>
                <h3 className="cp-pro-section-title">
                  <Icon size={17} aria-hidden="true" />
                  {title}
                </h3>
                <dl className="cp-pro-rows">
                  {rows.map(({ label, value }) => (
                    <div className="cp-pro-row" key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                {note && <p className="cp-pro-section-note">{note}</p>}
              </section>
            ))}
            <p className="cp-pro-reminder">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Avant de confirmer une demande, vérifiez les coordonnées du portefeuille et le montant net affiché.</span>
            </p>
          </div>
          <footer className="cp-pro-actions">
            <a href="#telegram" onClick={(event) => event.preventDefault()}>
              <Send size={17} aria-hidden="true" />
              <span>Rejoindre le groupe Telegram officiel</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
            <button type="button">D’ACCORD</button>
          </footer>
        </section>
      </div>
    </main>
  );
}

function PreviewDashboard() {
  return (
    <div className="cp-preview-dashboard" aria-hidden="true">
      <header className="cp-preview-header">
        <span className="cp-preview-logo"><span>CP</span></span>
        <strong>ChargePoint</strong>
        <span className="cp-preview-avatar">A</span>
      </header>
      <section className="cp-preview-hero">
        <div>
          <small>RECHARGEZ EN TOUTE SIMPLICITÉ</small>
          <h1>Votre espace<br />ChargePoint</h1>
          <p>Gérez vos services et suivez votre activité.</p>
        </div>
        <div className="cp-preview-charger"><span /></div>
      </section>
      <div className="cp-preview-shortcuts">
        <span>Dépôt</span><span>Retrait</span><span>Assistance</span>
      </div>
      <section className="cp-preview-balance">
        <small>APERÇU DU COMPTE</small>
        <strong>Solde disponible</strong>
        <div>•••••• FCFA</div>
      </section>
      <section className="cp-preview-cards">
        <span>Mes activités</span><span>Nos partenaires</span>
      </section>
      <nav className="cp-preview-nav"><span>Accueil</span><span>Services</span><span>Compte</span></nav>
    </div>
  );
}