import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Header coponent with a hamburger menu for navigation
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? '✖' : '☰'}
        </div>
        <Link to="/" className="title">
          <span className="black">VOK</span><span className="red">ALB</span>
        </Link>
      </header>
      {open && (
        <div className="dropdown-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/lessons" onClick={() => setOpen(false)}>Lessons</Link>
          <Link to="/quiz" onClick={() => setOpen(false)}>Alphabet Quiz</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </>
);
};

export default Header;
