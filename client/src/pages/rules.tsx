import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import "./rules.css";

export default function RulesPage() {
  const { data: settings } = useQuery<Record<string, string>>({
    queryKey: ["/api/settings"],
  });

  const signupBonus = settings?.signupBonus || "500";
  const minDeposit = settings?.minDeposit || "3500";
  const minWithdrawal = settings?.minWithdrawal || "1200";
  const withdrawalFees = settings?.withdrawalFees || "20";
  const withdrawalStartHour = settings?.withdrawalStartHour || "9";
  const withdrawalEndHour = settings?.withdrawalEndHour || "17";
  const maxWithdrawalsPerDay = settings?.maxWithdrawalsPerDay || "1";
  const lv1 = settings?.level1Commission || "25";
  const lv2 = settings?.level2Commission || "4";
  const lv3 = settings?.level3Commission || "1";

  return (
    <main className="cp-rules-page">
      <div className="cp-rules-screen">
      <header className="cp-rules-header">
        <Link href="/account">
          <button className="cp-rules-back" data-testid="button-back">
            <ChevronLeft aria-hidden="true" />
            <span>Retour</span>
          </button>
        </Link>
        <h1>Règles de la plateforme</h1>
      </header>

      <div className="cp-rules-body">
        <section className="cp-rules-section">
          <h2>1. Investissement</h2>
          <ul>
            <li>Chaque utilisateur peut posséder plusieurs produits d'investissement simultanément.</li>
            <li>Les revenus sont générés quotidiennement et accrédités sur votre solde de compte toutes les 24 heures.</li>
            <li>Le cycle d'investissement standard est de 80 jours, sauf indication contraire pour les produits spéciaux.</li>
          </ul>
        </section>

        <section className="cp-rules-section">
          <h2>2. Dépôts et Retraits</h2>
          <ul>
            <li>Le montant minimum de dépôt est de {parseInt(minDeposit).toLocaleString()} FCFA.</li>
            <li>Le montant minimum d'achat d'un produit est de 4 500 FCFA.</li>
            <li>Le montant minimum de retrait est de {parseInt(minWithdrawal).toLocaleString()} FCFA.</li>
            <li>Les frais de retrait sont fixés à {withdrawalFees}% pour couvrir les frais de transaction et d'entretien.</li>
            <li>Les retraits sont traités entre {withdrawalStartHour}h et {withdrawalEndHour}h les jours ouvrables.</li>
            <li>Limite de {maxWithdrawalsPerDay} retrait(s) maximum par jour par utilisateur.</li>
          </ul>
        </section>

        <section className="cp-rules-section">
          <h2>3. Système de Parrainage</h2>
          <ul>
            <li>Commission de niveau 1 : {lv1}% sur le PREMIER investissement du filleul.</li>
            <li>Commission de niveau 2 : {lv2}% sur le PREMIER investissement du filleul.</li>
            <li>Commission de niveau 3 : {lv3}% sur le PREMIER investissement du filleul.</li>
            <li>Les activités frauduleuses ou la création de comptes multiples pour manipuler le système entraîneront la suspension du compte.</li>
          </ul>
        </section>

        <section className="cp-rules-section">
          <h2>4. Bonus d'inscription</h2>
          <ul>
            <li>Chaque nouveau membre reçoit {parseInt(signupBonus).toLocaleString()} FCFA de bonus à l'inscription.</li>
          </ul>
        </section>

        <section className="cp-rules-section">
          <h2>5. Sécurité</h2>
          <ul>
            <li>Vous êtes responsable de la sécurité de votre mot de passe.</li>
            <li>Ne partagez jamais vos identifiants de connexion avec des tiers.</li>
            <li>Le service client officiel ne vous demandera jamais votre mot de passe.</li>
          </ul>
        </section>
      </div>
      </div>
    </main>
  );
}
