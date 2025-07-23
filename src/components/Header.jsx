import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? '✖' : '☰'}
        </div>
        <div className="title"><span className="black">VOK</span><span className="red">ALB</span></div>
      </header>
      {open && (
        <div className="dropdown-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/lessons" onClick={() => setOpen(false)}>Lessons</Link>
          <Link to="/quiz/alphabet" onClick={() => setOpen(false)}>Quiz</Link>
        </div>
      )}
    </>
);
};

export default Header;
