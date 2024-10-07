import React, { useState } from 'react'; // Certificando-se de importar useState
import './Navbar.css';
import logo from '../../assets/logo-god.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <div>
          <h1>Nossa Senhora</h1>
          <p>San Daniel Comboni</p>
        </div>
      </div>

      {/* Menu Hamburguer */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Links de navegação */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Início</a></li>
        <li><a href="#sermons">Sermões</a></li>
        <li><a href="#about">Sobre nós</a></li>
        <li><a href="#pastors">Pastor</a></li>
        <li><a href="#events">Eventos</a></li>
        <li><a href="#donation">Dízimo</a></li>
        <li><a href="#contacts">Contatos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
