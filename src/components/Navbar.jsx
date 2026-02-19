import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="container nav-inner">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-icon">B</div>
          <span className="logo-text">BLEMCUBE<em>.SHOP</em></span>
        </Link>

        {/* Links desktop */}
        <ul className={`nav-links ${mobileOpen ? 'nav-links--open' : ''}`}>
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link></li>
          <li><Link to="/servicios" className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}>Servicios</Link></li>
          <li><a href="#como-funciona" className="nav-link">Cómo funciona</a></li>
          <li><a href="#contacto" className="nav-link">Contacto</a></li>
        </ul>

        {/* CTA desktop */}
        <div className="nav-cta-group">
          <a
            href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            💬 Consultá gratis
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link">Inicio</Link>
          <Link to="/servicios" className="mobile-link">Servicios</Link>
          <a href="#como-funciona" className="mobile-link">Cómo funciona</a>
          <a href="#contacto" className="mobile-link">Contacto</a>
          <a
            href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{marginTop:'1rem'}}
          >
            💬 Consultá gratis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
