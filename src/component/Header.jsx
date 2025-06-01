import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from'../assets/img/apple-touch-icon.png'

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
        {/* Mon logo */}
      <div onClick={scrollToTop} className="logo"  >
        <div><img src={Logo} alt="Logo"  className='Monlogo'/>JOHN DOE</div>
       </div>

      <nav className="navbar">
       
        {/* Menu Burger */}
        <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Routes */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active-link" : ""}>Accueil</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu} className={location.pathname === "/services" ? "active-link" : ""}>Services</Link>
          </li>
          <li>
            <Link to="/realisation" onClick={closeMenu} className={location.pathname === "/realisations" ? "active-link" : ""}>Réalisations</Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu} className={location.pathname === "/blog" ? "active-link" : ""}>Blog</Link>
          </li>
          <li>
            <Link to="/mecontacter" onClick={closeMenu} className={location.pathname === "/mecontacter" ? "active-link" : ""}>Me Contacter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
