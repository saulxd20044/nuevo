import React from 'react';

function Cta() {
  return (
    <section
      className="cta has-bg-video"
      aria-label="cta"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <figure className="cta-banner" style={{ marginTop: '20px' }}>
          <iframe
            src="https://player.vimeo.com/video/893505833?h=660&title=0&byline=0&portrait=0"
            width="900"
            height="660"
            frameBorder="0"
            allowFullScreen
            title="financial growth"
            className="w-full h-auto"
          />
        </figure>

        <div className="cta-content">
          <h2 className="h2 section-title" style={{ fontSize: '4rem', marginTop: '20px' }}>
            Pruébalo, ámalo o te devolvemos tu dinero... ¡Garantizado!
          </h2>

          <p className="section-text" style={{ fontSize: '2.2rem', marginTop: '20px' }}>
            Tu satisfacción es nuestra prioridad
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cta;
