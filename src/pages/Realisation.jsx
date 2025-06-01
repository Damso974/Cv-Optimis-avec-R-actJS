import React from "react";
import banner from '../assets/img/banner.jpg';
import FreshFood from '../assets/img/portfolio/fresh-food.jpg';
import Restaurant from '../assets/img/portfolio/restaurant-japonais.jpg';
import BienEtre from '../assets/img/portfolio/espace-bien-etre.jpg';
import '../pages/Realisation.css';

function Realisation() {
  return (
    <div className="realisations">
      {/* Bannière */}
      <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>

      <main className="realisations-main">
        <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="blue-line"></div>

        <div className="realisations-blocks">
          {/* Fresh Food */}
          <div className="realisations-block">
            <img src={FreshFood} alt="Fresh Food" className="FreshFood-img" />
            <h2>Fresh Food</h2>
            <p>Réalisation d'un site avec une commande en ligne.</p>
            <button className="voir-btn">Voir</button>
            <div className="realisations-block-footer">
              <p>Site réalisé avec PHP et MySQL</p>
            </div>
          </div>

          {/* Restaurant Akira */}
          <div className="realisations-block">
            <img src={Restaurant} alt="Restaurant Akira" className="Restaurant-img" />
            <h2>Restaurant Akira</h2>
            <p>Réalisation d'un site vitrine.</p>
            <button className="voir-btn">Voir</button>
            <div className="realisations-block-footer">
              <p>Site réalisé avec WordPress</p>
            </div>
          </div>

          {/* Espace bien-être */}
          <div className="realisations-block">
            <img src={BienEtre} alt="Espace Bien Être" className="Bienêtre-img" />
            <h2>Espace bien-être</h2>
            <p>Réalisation d'un site vitrine pour un praticien de bien-être.</p>
            <button className="voir-btn">Voir</button>
            <div className="realisations-block-footer">
              <p>Site réalisé en HTML/CSS</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Realisation;
