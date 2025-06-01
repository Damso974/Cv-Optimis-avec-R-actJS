import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import herobg from "../assets/img/hero-bg.jpg";
import JohnDoeAbout from "../assets/img/john-doe-about.jpg";
import '../pages/Acceuil.css';

function Acceuil() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.substring(1); // enlève le "#"
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <section id="presentation" style={{ backgroundImage: `url(${herobg})` }}>
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web Full-Stack</h2>
        <button>En savoir plus</button>
      </section>

      <section id="apropos">
        <div id="partiegauche">
          <h2>À propos</h2>
          <div id="underline"></div>
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai suivi
            une formation d'intégrateur-développeur web au CEF. Au cours de cette
            formation j'ai pu acquérir des bases solides pour travailler dans le
            domaine du développement web.
          </p>
          <br /><br />
          <p>
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une
            agence digitale pour consolider ma formation de développeur web full stack.
          </p>
          <br /><br />
          <p>
            J'accorde une attention particulière à la qualité du code que j'écris
            et je respecte les bonnes pratiques du web.
          </p>
        </div>

        <div id="partiedroite">
          <img src={JohnDoeAbout} alt="JohnDoe" className="image profil" />
          <h3>Mes Compétences</h3>
          <div id="skills">
            {/* Les barres de compétence ici */}
            <div className="skill">
          <span>HTML 90%</span>
          <div className="progress">
          <div className="progress-bar html"></div>
              </div>
            </div>
            <div className="skill"> 
              <span>CSS3 80%</span>
            <div className="progress">
            <div className="progress-bar css"></div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript 70%</span>
              <div className="progress">
                <div className="progress-bar js"></div>
              </div>
            </div>
            <div className="skill">
              <span>PHP 60%</span>
              <div className="progress">
              <div className="progress-bar php"></div>
              </div>
            </div>
            <div className="skill">
              <span>React 50%</span>
              <div className="progress">
              <div className="progress-bar react"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Acceuil;
