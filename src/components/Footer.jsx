import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <nav className="footer-links">
      <a href="#">About</a><a href="https://www.alllanguageresources.com/learn-albanian/" target="_blank">Resources</a>
    </nav>
    <div className="footer-icons">
      <a href="https://github.com" target="_blank" rel="icon" aria-label="GitHub">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
      </a>
      <a href="https://patreon.com" target="_blank" rel="icon" aria-label="Patreon">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
      </a>
    </div>
  </footer>
);

export default Footer;
