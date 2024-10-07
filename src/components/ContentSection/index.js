import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="content-image">
        <img src="path/to/content-image.jpg" alt="Church" />
      </div>
      <div className="content-text">
        <h2>We are a community of people who have encountered a life-changing God.</h2>
        <p>Our mission is simple: to love God and to love others.</p>
        <div className="content-links">
          <a href="#about">About Us</a> | <a href="#mission">Our Mission</a> | <a href="#vision">Our Vision</a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aeuismod ex. Maecenas sit amet s...</p>
      </div>
    </section>
  );
};

export default ContentSection;
