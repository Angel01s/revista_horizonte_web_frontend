import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderStyles.css';

const Header: React.FC = () => {
  return (
    <header className="header">
  <div className="header-container">
    <button className="subscribe-button">
      SUSCRIBIRSE
    </button>

    <div className="logo-container">
      <h1 className="title">HORIZONTE</h1>
      <p className="subtitle">REVISTA CULTURAL</p>
    </div>

    <div className="social-container">
      <div className="social-icons">
        <img src="/redes/instagram.svg" alt="Instagram" />
        <img src="/redes/facebook.svg" alt="Facebook" />
        <img src="/redes/youtube.svg" alt="YouTube" />
        <img src="/redes/twitter.svg" alt="Twitter" />
        <img src="/redes/tiktok.svg" alt="TikTok" />
      </div>
      <input type="text" className="input-field" />
    </div>
  </div>
    <div className="narvar">
      <div className="divider"></div>

      <nav className="nav">
        {['Inicio', 'Nosotros', 'Actualidad', 'Política Cultural', 'Entretenimiento', 'Bellas Artes', 'Lugares', 'Destinos', 'Agenda Cultural'].map((item) => (
          <NavLink key={item} to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="nav-link">
            {item}
          </NavLink>
        ))}
      </nav>

      <div className="divider"></div>
    </div>
  
</header>

  );
};
export default Header;
