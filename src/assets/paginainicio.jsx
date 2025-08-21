
import React from 'react';
import './styleinicio.scss';

const PaginaInicial = () => {
  return (
    <div className="hero-container">
      
      <header className="hero-header">
        <div className="logo-container">
          <div className="logo logo--instituto">Logo Inst.</div>
          <h1 className="hero-title">5ª Edição Feira de Profissões Instituto Nossa Senhora de Fátima</h1>
          <div className="logo logo--feira">Logo Feira</div>
        </div>
      </header>

     
      <main className="hero-main-content">
        <div className="main-info">
          <h2>Instituto Nossa Senhora de Fátima Apresenta:</h2>
        </div>
        
        <div className="info-card">
          <h3>5ª edição da Feira de Profissões</h3>
          <ul className="info-list">
            <li>
              <span className="icon">🗓️</span> 29 de Setembro | 9:00 às 14:00
            </li>
            <li>
              <span className="icon">📍</span> Av. Cel. Octaviano de Freitas Costa - 445 - Veloso
            </li>
          </ul>
          <p>
            Workshops, Networking, Brindes e muito mais!<br />
            Venha conhecer nossa Feira de profissões
          </p>
          <button className="cta-button">
            <span>Faça seu cadastro aqui!</span>
          </button>
        </div>
      </main>

     
      <footer className="hero-footer">
        <p className="bottom-quote">
          ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE!
        </p>
      </footer>
    </div>
  );
};

export default PaginaInicial;