import React from "react";
import banner from "../assets/img/banner.jpg";
import "./Service.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
function Service() {
    return (
        
        <div className="services">
      {/* Bannière */}
      <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>

      <main className="services-main">
        <h1>MON OFFRE DE SERVICES</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="blue-line"></div>

        <div className="service-blocks">
          {/* UX DESIGN Block */}
          <div className="service-block">
          <div className="icon">
            <i className="fas fa-desktop"></i> {/* Icône Desktop */}
          </div>
            <h2>UX DESIGN</h2>
            <p>L'UX Design est une méthhode de conception
                centrée sur l'utilisateur. Son but est d'offrir une 
                éxpérience de navigation optimale à l'internaute.</p>
          </div>

          {/* Développement Web Block */}
          <div className="service-block">
            <div className="icon">
              <i className="fas fa-file-code"></i> 
            </div>
            <h2>Développement Web</h2>
            <p>Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
          </div>

          {/* Référencement Block */}
          <div className="service-block">
            <div className="icon">
              <i className="fas fa-search"></i> 
            </div>
            <h2>RÉFÉRENCEMENT</h2>
            <p>Le référencement naturel d'un site, aussi appelé SEO, consiste
                à mettre des techniques en oeuvre pour améliorer sa position dans
                les résultats des moteurs de recherche.</p>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
    )
}
export default Service;
