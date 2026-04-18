import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" id="main-navbar">
      <Link to="/" className="navbar__brand">
        <span className="navbar__logo">🎲</span>
        <span className="navbar__title">Anti-Fark Etmez</span>
      </Link>

      <div className="navbar__links">
        <Link
          to="/"
          className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}
          id="nav-home"
        >
          <span className="navbar__link-icon">🏠</span>
          Karar Ver
        </Link>
        <Link
          to="/history"
          className={`navbar__link ${isActive('/history') ? 'navbar__link--active' : ''}`}
          id="nav-history"
        >
          <span className="navbar__link-icon">📋</span>
          Geçmiş
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
