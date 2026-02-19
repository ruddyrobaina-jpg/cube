import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer-grid">

        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">B</div>
            <span className="logo-text">BLEMCUBE<em>.SHOP</em></span>
          </div>
          <p>Seguridad profesional para hogares y negocios. Tecnología de punta al alcance de todos.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li><Link to="/servicios">Sistema para Hogar</Link></li>
            <li><Link to="/servicios">Sistema para Negocio</Link></li>
            <li><Link to="/servicios">Cámaras adicionales</Link></li>
            <li><Link to="/servicios">Alarmas</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Cómo funciona</a></li>
            <li><a href="#">Instalación</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:blemcube@gmail.com">blemcube@gmail.com</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">WhatsApp: 095 254 594</a></li>
            <li><a href="tel:095254594">Tel: 095 254 594</a></li>
            <li><span>Montevideo, Uruguay</span></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Blemcube.shop — Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
