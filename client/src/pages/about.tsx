import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="cp-about-page">
      <div className="cp-about-screen">
        <header className="cp-about-header">
        <Link href="/account">
          <button className="cp-about-back" data-testid="button-back">
            <ChevronLeft aria-hidden="true" />
            <span>Retour</span>
          </button>
        </Link>
          <h1>À propos de nous</h1>
        </header>

        <div className="cp-about-body">
          <p className="cp-about-lead">
            ChargePoint est une plateforme numérique créée en 2024 pour rendre les solutions de recharge, les produits connectés et les services associés plus simples, plus accessibles et plus transparents pour tous.
          </p>

          <div className="cp-about-facts" aria-label="Informations sur ChargePoint">
            <div>
              <span>Nom</span>
              <strong>ChargePoint</strong>
            </div>
            <div>
              <span>Année de création</span>
              <strong>2024</strong>
            </div>
            <div>
              <span>Activité</span>
              <strong>Plateforme numérique et solutions de recharge</strong>
            </div>
            <div>
              <span>Public concerné</span>
              <strong>Particuliers, professionnels et partenaires</strong>
            </div>
          </div>

          <h2>Notre histoire</h2>
          <p>
            ChargePoint est née d’une idée simple : les utilisateurs doivent pouvoir accéder à des services modernes depuis une seule plateforme, avec des informations compréhensibles et un accompagnement disponible à chaque étape. Dès sa création, la marque a été pensée autour d’une expérience mobile rapide, claire et adaptée aux besoins quotidiens.
          </p>
          <p>
            Notre développement repose sur l’écoute des utilisateurs, l’amélioration continue de nos outils et la volonté de construire une relation durable avec notre communauté. Chaque évolution de la plateforme vise à faciliter l’accès aux produits, le suivi des activités et la compréhension des services proposés.
          </p>

          <h2>Notre mission</h2>
          <p>
            La mission de ChargePoint est de rapprocher la technologie des utilisateurs. Nous voulons proposer un espace unique dans lequel chacun peut découvrir les solutions disponibles, consulter les informations importantes, suivre ses opérations et trouver rapidement de l’aide lorsqu’il en a besoin.
          </p>
          <p>
            Nous travaillons pour que la technologie ne soit pas une source de complexité. Les parcours sont conçus avec des étapes simples, des indications visibles et des informations présentées dans un langage accessible, quel que soit le niveau d’expérience numérique de l’utilisateur.
          </p>

          <h2>Ce que nous proposons</h2>
          <ul>
            <li>Une plateforme mobile pensée pour être simple à utiliser au quotidien.</li>
            <li>Des solutions et produits liés à la recharge et aux équipements connectés.</li>
            <li>Un espace personnel pour consulter son solde, son historique et ses activités.</li>
            <li>Un suivi des produits acquis, de leur fonctionnement et des revenus associés lorsqu’ils sont applicables.</li>
            <li>Des moyens d’assistance et d’accompagnement pour répondre aux questions des utilisateurs.</li>
            <li>Une communauté qui peut progresser grâce au partage d’informations et au parrainage.</li>
          </ul>

          <h2>Nos objectifs</h2>
          <p>
            Notre premier objectif est de rendre les services numériques plus accessibles en Afrique et dans les marchés où ChargePoint est disponible. Nous souhaitons développer des outils adaptés aux réalités locales, aux moyens de paiement utilisés par les communautés et aux habitudes des utilisateurs.
          </p>
          <p>
            Nous voulons également continuer à améliorer la qualité de nos produits, renforcer la rapidité de notre assistance et offrir une meilleure visibilité sur chaque opération. La confiance se construit avec des informations claires, un historique compréhensible et des règles présentées avant chaque action importante.
          </p>
          <p>
            À long terme, ChargePoint a pour ambition de devenir un espace de référence pour les solutions de recharge et les services numériques associés : une plateforme fiable, pratique et capable d’évoluer avec les besoins de ses utilisateurs.
          </p>

          <h2>Nos engagements</h2>
          <ul>
            <li><strong>Clarté :</strong> présenter les conditions, les étapes et les informations essentielles de manière lisible.</li>
            <li><strong>Accessibilité :</strong> concevoir une expérience adaptée aux téléphones et aux connexions du quotidien.</li>
            <li><strong>Écoute :</strong> tenir compte des retours pour améliorer continuellement la plateforme.</li>
            <li><strong>Sécurité :</strong> protéger les comptes et traiter les opérations avec sérieux.</li>
            <li><strong>Responsabilité :</strong> rappeler que chaque utilisateur doit consulter les conditions avant toute opération.</li>
            <li><strong>Innovation utile :</strong> privilégier les fonctionnalités qui apportent une réelle valeur plutôt que la complexité.</li>
          </ul>

          <h2>Notre vision</h2>
          <p>
            Nous imaginons un avenir dans lequel l’accès aux équipements, aux services de recharge et aux outils numériques ne dépend plus de parcours compliqués. ChargePoint veut contribuer à cette évolution en réunissant technologie, simplicité et accompagnement dans une même expérience.
          </p>
          <p>
            Merci de faire partie de l’aventure ChargePoint. Vos retours, vos suggestions et votre confiance nous aident à construire une plateforme plus utile, plus claire et plus proche des besoins réels de sa communauté.
          </p>
        </div>
      </div>
    </main>
  );
}
