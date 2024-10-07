import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo-god.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>Modern Church</h1>
        <p>New Faith Church</p>
      </div>
      <ul className="navbar-links">
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

export default Navbar