import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import '../component/Footer.css';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById('footerScrollToTop');
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPos = window.scrollY;

      if (scrollPos + winHeight >= docHeight - 100) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne 1 */}
        <div className="footer-column">
          <h3>John Doe</h3>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>
          <div className="footer-icons">
            <Link to="/github" aria-label="Voir le profil GitHub"><FaGithub /></Link>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Colonne 2 */}
        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/#presentation">➤ Accueil</Link></li>
            <li><Link to="/#apropos">➤ À propos</Link></li>
            <li><Link to="/services">➤ Services</Link></li>
            <li><Link to="/mecontacter">➤ Me contacter</Link></li>
            <li><Link to="/mentionlegal">➤ Mentions légales</Link></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="footer-column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><Link to="/realisation">➤ Fresh Food</Link></li>
            <li><Link to="/realisation">➤ Restaurant Akira</Link></li>
            <li><Link to="/realisation">➤ Espace bien-être</Link></li>
          </ul>
        </div>

        {/* Colonne 4 */}
        <div className="footer-column">
          <h3>Mes derniers articles</h3>
          <ul>
            <li><a href="/blog">➤ Code son site en HTML/CSS</a></li>
            <li><a href="/blog">➤ Vendre ses produits sur le web</a></li>
            <li><a href="/blog">➤ Se positionner sur Google</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Designed by John Doe</p>
      </div>

      <button 
        id="footerScrollToTop" 
        className="footer-scroll-to-top" 
        onClick={scrollToTop}
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
