import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="content-image">
        <img src="path/to/content-image.jpg" alt="Church" />
      </div>
      <div className="content-text">
        <h2>Somos uma comunidade de pessoas que encontraram um Deus que mudou vidas.</h2>
        <p>Nossa missão é simples: amar a Deus e amar os outros.</p>
        <div className="content-links">
          <a href="#about">Sobre nós</a> | <a href="#mission">Nossa Missão</a> | <a href="#vision">Nossa Visão</a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aeuismod ex. Maecenas sit amet s...</p>
      </div>
    </section>
  );
};

export default ContentSection;
