import React from "react";
import banner from "../assets/img/banner.jpg";
import coder from "../assets/img/blog/coder.jpg";
import croissance from "../assets/img/blog/croissance.jpg";
import google from "../assets/img/blog/google.jpg";
import screens from "../assets/img/blog/screens.jpg";
import seo from "../assets/img/blog/seo.jpg";
import technos from "../assets/img/blog/technos.png";
function Blog() {

  return (
    <div>
     <div className="realisations">
      {/* Bannière */}
      <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>

      <main className="realisations-main">
        <h1>BLOG</h1>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
        <div className="blue-line"></div>

        {/* Conteneur flex pour les blocs */}
        <div className="realisations-blocks">
          {/* Coder */}
          <div className="realisations-block">
            <img src={coder} alt="coder" className="coder-img" />
            <h2>Coder son site en HTML/CSS</h2>
            <p>Apprenez à créer votre propre site web en maîtrisant les bases du HTML et du CSS pour un site bien conçu !</p>
            <button className="voir-btn">Lire la suite</button>
            <div className="realisations-block-footer">
              <p>Publié le 22 août 2022</p>
            </div>
          </div>

          {/* Croissance */}
          <div className="realisations-block">
            <img src={croissance} alt="croissance" className="croissance-img" />
            <h2>Vendre ses produits sur le web</h2>
            <p>Découvrez les clés pour créer une boutique en ligne efficace et stratégies de vente pour booster votre succès en e-commerce !</p>
            <button className="voir-btn">Lire la suite</button>
            <div className="realisations-block-footer">
              <p>Publié le 20 août 2022</p>
            </div>
          </div>

          {/* Google */}
          <div className="realisations-block">
            <img src={google} alt="Google" className="Google-img" />
            <h2>Se positionner sur Google</h2>
            <p>Apprenez les bases du SEO pour améliorer votre visibilité sur Google et attirer plus de visiteurs !</p>
            <button className="voir-btn">Lire la suite</button>
            <div className="realisations-block-footer">
              <p>Publié le 1 août 2022</p>
            </div>
          </div>

          {/* Screens */}
          <div className="realisations-block">
            <img src={screens} alt="screens" className="screens-img" />
            <h2>Coder en responsive design</h2>
            <p>Le Responsive Design permet d’adapter un site web à tous les écrans (ordinateur, tablette, mobile) améliorant ainsi l'expérience utilisateur.</p>
            <button className="voir-btn">Lire la suite</button>
            <div className="realisations-block-footer">
              <p>Publié le 31 juillet 2022</p>
            </div>
          </div>

          {/* SEO */}
          <div className="realisations-block">
            <img src={seo} alt="seo" className="seo-img" />
            <h2>Techniques de référencement</h2>
            <p>Boostez votre visibilité sur Google grâce au SEO ! Mots-clés, backlinks, optimisation technique…</p>
            <button className="voir-btn">Lire la suite</button>
            <div className="realisations-block-footer">
              <p>Publié le 30 juillet 2022</p>
            </div>
          </div>

          {/* Technos */}
          <div className="realisations-block">
            <img src={technos} alt="technos" className="technos-img" />
            <h2>Apprendre à coder</h2>
            <p>Débutez en programmation et maîtrisez les bases du code pour créer vos propres projets web.</p>
            <button className="voir-btn">Lire la suite</button>
            <div className="realisations-block-footer">
              <p>Publié le 12 juillet 2022</p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
      
    </div>
  );
}
export default Blog;

