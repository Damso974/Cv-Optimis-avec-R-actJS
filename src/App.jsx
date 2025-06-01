
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Acceuil from './pages/Acceuil';
import Blog from './pages/Blog';
import Realisations from './pages/Realisation';
import Services from './pages/Service';
import Contact from './pages/Contact';
import MentionLegal from './pages/Mentionlegal';
import GitHub from './pages/Githubpage';
import '../src/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/realisation" element={<Realisations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mecontacter" element={<Contact />} />
        <Route path="/mentionlegal" element={<MentionLegal />} />
        <Route path="/github" element={<GitHub />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
