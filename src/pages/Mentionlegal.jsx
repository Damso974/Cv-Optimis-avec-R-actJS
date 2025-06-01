import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import '../pages/Mentionlegal.css';

function LegalMentions  ()  {
  const [openEditor, setOpenEditor] = useState(false);
  const [openHost, setOpenHost] = useState(false);
  const [openCredits, setOpenCredits] = useState(false);

  return (
    <div className="legal-mentions">
      {/* Titre */}
      <h1>MENTIONS LÉGALES</h1>
      <div className="blue-line"></div>

      <div className="legal-container">
        {/* Editeur du site */}
        <div className="legal-section">
          <div className={`section-header ${openEditor ? "active" : ""}`} onClick={() => setOpenEditor(!openEditor)}>
            <span>Éditeur du site</span>
            {openEditor ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
          </div>
          {openEditor && (
            <div className="section-content">
              <h2>John Doe</h2>
              <div className="icon-container">
                <div className="icon-item">
                  <FaMapMarkerAlt />
                  <p>40 Rue Laure Diebold</p>
                </div>
                <div className="adresse">
                <p>69009 Lyon</p>
                </div>
                <div className="icon-item phone">
                  <FaPhoneAlt />
                  <p>06 20 30 40 50</p>
                </div>
                <div className="icon-item email">
                  <FaEnvelope />
                  <p>john.doe@gmail.com</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hébergeur */}
        <div className="legal-section">
          <div className={`section-header ${openHost ? "active" : ""}`} onClick={() => setOpenHost(!openHost)}>
            <span>Hébergeur</span>
            {openHost ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
          </div>
          {openHost && (
            <div className="section-content">
              <h2>Always Data</h2>
              <div className="icon-container">
                <div className="icon-item">
                  <FaMapMarkerAlt />
                  <p>91 rue du Faubourg Saint-Honoré</p>
                </div>
                <div className="adresse">
                <p>75008 Paris</p>
                </div>
                <div className="icon-item">
                  <FaGlobe />
                  <a href="http://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                    www.alwaysdata.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Crédits */}
        <div className="legal-section">
          <div className={`section-header ${openCredits ? "active" : ""}`} onClick={() => setOpenCredits(!openCredits)}>
            <span>Crédits</span>
            {openCredits ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
          </div>
          {openCredits && (
            <div className="section-content">
              <h2>Crédits</h2>
              <p>Site développé par John Doe, étudiant du CEF</p>
              <p>
                Les images libres de droit sont issues du site{" "}
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                  Pixabay
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
