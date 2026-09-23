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

          <p>
            Stone by ton est une entreprise française fondée en 2013, spécialisée dans la vente en ligne et physique de pierre naturelle, de travertin, de carrelage et de parements muraux. Basée à Six-Fours-les-Plages dans le Var, la marque propose une large gamme de revêtements pour les sols et les murs intérieurs ou extérieurs.
          </p>

          <p>
            Stone by ton accompagne les particuliers et les professionnels dans leurs projets d’aménagement, avec des matériaux sélectionnés pour leur qualité, leur caractère et leur durabilité.
          </p>

          <p>
            Notre collection s’adapte aux espaces intérieurs comme extérieurs : sols, murs, terrasses, salles de bains et pièces de vie.
          </p>

          <p>
            La qualité des produits, le conseil et la satisfaction des clients sont au cœur de l’engagement de Stone by ton.
          </p>

        </div>
      </div>
    </main>
  );
}
