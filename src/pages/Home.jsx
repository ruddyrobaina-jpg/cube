import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroBg from '../assets/hero-bg.png';


const FEATURES = [
  { icon: '📱', title: 'Aplicación móvil', desc: 'Controlá todo desde tu celular. Revisá cámaras, recibí alertas y gestioná tu sistema desde cualquier lugar.' },
  { icon: '🎥', title: 'Grabación 24/7', desc: 'Registro continuo con almacenamiento en la nube. Accedé al historial cuando lo necesités.' },
  { icon: '🌙', title: 'Visión nocturna', desc: 'Cámaras con visión nocturna de alta definición. Tu propiedad protegida las 24 horas.' },
  { icon: '🔔', title: 'Alertas en tiempo real', desc: 'Notificaciones instantáneas ante cualquier movimiento o evento detectado por el sistema.' },
  { icon: '🎙️', title: 'Audio bidireccional', desc: 'Hablá con quien esté en tu puerta desde la app, sin importar dónde estés.' },
  { icon: '🚶', title: 'Sensor de movimiento', desc: 'Detección inteligente que distingue personas de mascotas. Sin falsas alarmas.' },
];

const STEPS = [
  { num: '01', title: 'Consultá sin costo', desc: 'Contactanos y un técnico evalúa tu propiedad de forma gratuita.' },
  { num: '02', title: 'Recibís tu presupuesto', desc: 'Te enviamos una propuesta personalizada, sin compromisos.' },
  { num: '03', title: 'Instalamos en tu hogar', desc: 'Nuestros técnicos instalan todo de forma prolija y profesional.' },
  { num: '04', title: 'Listo para usar', desc: 'Te enseñamos a usar la app y el sistema queda funcionando al 100%.' },
];

const Home = () => {
  return (
    <div className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src={heroBg}
            alt="Instalación de sistema de seguridad profesional"
            className="hero-img"
          />

          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">🛡️ Instalaciones Profesionales</div>
            <h1>
              Seguridad profesional que<br />
              <span className="text-orange">detiene el crimen antes de que ocurra.</span>
            </h1>
            <p className="hero-lead">
              Instalamos sistemas de cámaras y alarmas a medida.
              Sin costo mensual, sin contrato. Solo necesitás WiFi.
            </p>
            <div className="hero-actions">
              <a
                href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                💬 Consultá gratis →
              </a>
              <a href="#como-funciona" className="btn btn-outline-white">
                Cómo funciona
              </a>
            </div>
            <div className="hero-trust">
              <span>✓ Sin costo mensual</span>
              <span>✓ Sin contrato</span>
              <span>✓ Presupuesto sin costo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESTACADOS ===== */}
      <div className="highlights-bar">
        <div className="container highlights-grid">
          <div className="highlight-item">
            <strong>Sin mensualidad</strong>
            <span>Pagás una sola vez</span>
          </div>
          <div className="highlight-item">
            <strong>Sin contrato</strong>
            <span>Total libertad</span>
          </div>
          <div className="highlight-item">
            <strong>Solo WiFi</strong>
            <span>Sin instalaciones complejas</span>
          </div>
          <div className="highlight-item">
            <strong>Presupuesto gratis</strong>
            <span>Sin compromiso</span>
          </div>
        </div>
      </div>

      {/* ===== QUÉ INCLUYE ===== */}
      <section className="features-section section-mid">
        <div className="container">
          <div className="section-header">
            <div className="badge">Tecnología incluida</div>
            <h2>Todo lo que necesitás<br /><span className="text-orange">en un solo sistema.</span></h2>
            <p className="section-lead">
              Cada instalación incluye acceso a todas estas funciones, sin costos adicionales.
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CÓMO FUNCIONA ===== */}
      <section className="steps-section section-dark" id="como-funciona">
        <div className="container">
          <div className="section-header">
            <div className="badge">Proceso</div>
            <h2>Así de simple.</h2>
            <p className="section-lead">En 4 pasos tu propiedad queda protegida.</p>
          </div>
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPLIT — HOGAR Y NEGOCIO ===== */}
      <section className="split-section section-mid">
        <div className="container split-grid">
          <div className="split-image">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop"
              alt="Seguridad para hogares y negocios"
            />
          </div>
          <div className="split-text">
            <div className="badge">Hogar y Negocio</div>
            <h2>Protección para<br />cada espacio.</h2>
            <p>
              Instalamos sistemas de seguridad tanto en hogares como en
              comercios, oficinas y depósitos. Cada instalación es
              personalizada según tus necesidades y el tamaño del lugar.
            </p>
            <ul className="check-list">
              <li>✓ Cámaras interiores y exteriores</li>
              <li>✓ Alarmas con sensor de movimiento</li>
              <li>✓ Visión en monitor (opcional)</li>
              <li>✓ Acceso remoto desde la app</li>
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{marginTop:'2rem'}}
            >
              Pedí tu presupuesto gratis →
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>¿Listo para proteger lo que más importa?</h2>
          <p>Consultanos hoy. El presupuesto es sin costo y sin compromiso.</p>
          <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
            <a
              href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              💬 WhatsApp: 095 254 594
            </a>
            <a href="tel:095254594" className="btn btn-outline-white">
              📞 Llamar ahora
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
