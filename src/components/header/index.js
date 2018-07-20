import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import logo from '../../assets/logos/logo_geladeira.png';
import placa_nova from '../../assets/imgs/placa_nova.svg';

const Header = () => (
  <div className="hero-head" style={{ height: 250, backgroundColor: 'white', borderBottom: '5px solid #ccc' }}>
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="container has-text-centered">
            <a href="#">
              <img src={logo} alt="Logo" style={{ width: 350 }}></img>
            </a>
          </div>
          <span className="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
