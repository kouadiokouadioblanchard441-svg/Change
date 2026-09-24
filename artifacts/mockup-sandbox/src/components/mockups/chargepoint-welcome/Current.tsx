import { Send } from "lucide-react";
import "./_group.css";
import "./welcome.css";

export function Current() {
  return (
    <main className="cp-preview-frame">
      <PreviewDashboard />
      <div className="cp-current-overlay">
        <section className="cp-current-dialog" aria-label="Popup actuel">
          <div className="cp-current-copy">
            <p>Retrouvez les nouveautés et l’assistance ChargePoint dans votre espace.</p>
          </div>
          <div className="cp-current-actions">
            <a href="#telegram" onClick={(event) => event.preventDefault()}>
              <Send size={15} aria-hidden="true" />
              Telegram
            </a>
            <button type="button">Sure</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export function PreviewDashboard() {
  return (
    <div className="cp-preview-dashboard" aria-hidden="true">
      <header className="cp-preview-header">
        <span className="cp-preview-logo"><span>⚡</span></span>
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