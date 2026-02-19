import React from 'react';
import './Store.css';

const SERVICES = [
  {
    id: 1,
    icon: '🏠',
    name: 'Sistema para Hogar',
    desc: 'Instalación completa de cámaras y alarmas para tu casa. Incluye app móvil, grabación 24/7 y alertas en tiempo real.',
    includes: ['2 a 6 cámaras HD', 'Sensor de movimiento', 'App móvil incluida', 'Visión nocturna'],
    tag: 'Más solicitado',
  },
  {
    id: 2,
    icon: '🏢',
    name: 'Sistema para Negocio',
    desc: 'Protección profesional para comercios, oficinas y depósitos. Escalable según el tamaño de tu local.',
    includes: ['Cámaras interiores y exteriores', 'Grabación continua', 'Acceso remoto', 'Visión en monitor (opcional)'],
    tag: null,
  },
  {
    id: 3,
    icon: '📷',
    name: 'Cámaras Adicionales',
    desc: '¿Ya tenés un sistema? Ampliamos tu cobertura con cámaras adicionales integradas a tu instalación existente.',
    includes: ['Compatible con sistemas existentes', 'Instalación rápida', 'Configuración en la app', 'Visión nocturna'],
    tag: null,
  },
  {
    id: 4,
    icon: '🔔',
    name: 'Sistema de Alarmas',
    desc: 'Alarmas con sensor de movimiento y notificación instantánea. Disuasión activa ante cualquier intrusión.',
    includes: ['Sensor de movimiento', 'Sirena de alta potencia', 'Alerta al celular', 'Sin mensualidad'],
    tag: 'Nuevo',
  },
  {
    id: 5,
    icon: '🖥️',
    name: 'Visión en Monitor',
    desc: 'Instalamos un monitor dedicado para que veas todas tus cámaras en tiempo real desde un punto fijo.',
    includes: ['Monitor incluido', 'Vista multi-cámara', 'Grabación local', 'Fácil de usar'],
    tag: null,
  },
  {
    id: 6,
    icon: '🔧',
    name: 'Mantenimiento y Soporte',
    desc: 'Servicio técnico para sistemas ya instalados. Revisión, limpieza, actualización de firmware y soporte en la app.',
    includes: ['Revisión completa', 'Limpieza de cámaras', 'Actualización de sistema', 'Soporte en app'],
    tag: null,
  },
];

const Store = () => {
  return (
    <div className="store">

      {/* === HERO === */}
      <header className="store-hero">
        <div className="container store-hero-inner">
          <div className="badge">Instalaciones Profesionales</div>
          <h1>Nuestros servicios.</h1>
          <p>Cada instalación es personalizada. Pedí tu presupuesto sin costo y sin compromiso.</p>
          <a
            href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{marginTop: '2rem'}}
          >
            💬 Consultá por WhatsApp →
          </a>
        </div>
      </header>

      {/* === SERVICES GRID === */}
      <section className="store-section">
        <div className="container">
          <div className="product-grid">
            {SERVICES.map(service => (
              <div key={service.id} className="product-card">
                {service.tag && (
                  <div className="product-tag">{service.tag}</div>
                )}
                <div className="service-icon-wrap">
                  <span className="service-big-icon">{service.icon}</span>
                </div>
                <div className="product-body">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <ul className="service-includes">
                    {service.includes.map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </ul>
                  <div className="product-footer" style={{marginTop:'1.5rem'}}>
                    <span className="service-price-label">Precio a consultar</span>
                    <a
                      href="https://api.whatsapp.com/send/?phone=59892228919&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Consultar →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GARANTÍAS === */}
      <section className="guarantee-section">
        <div className="container guarantee-grid">
          <div className="guarantee-item">
            <span className="g-icon">💰</span>
            <strong>Sin costo mensual</strong>
            <p>Pagás una sola vez, sin sorpresas.</p>
          </div>
          <div className="guarantee-item">
            <span className="g-icon">📄</span>
            <strong>Sin contrato</strong>
            <p>Total libertad, sin ataduras.</p>
          </div>
          <div className="guarantee-item">
            <span className="g-icon">📋</span>
            <strong>Presupuesto gratis</strong>
            <p>Sin compromiso, sin costo.</p>
          </div>
          <div className="guarantee-item">
            <span className="g-icon">🔧</span>
            <strong>Instalación profesional</strong>
            <p>Técnicos certificados.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Store;
