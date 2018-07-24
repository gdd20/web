import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import PropTypes from 'prop-types';
import logo from '../assets/logos/logo_geladeira.png';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

class Header extends Component {
  state = {
    isActive: false
  };

  updateIsActive = () => {
    this.setState({ isActive: !this.state.isActive ? true : false });
  }

  render ({}, { isActive }) {
    return (
      <div className="hero-head" style={{ height: 250, backgroundColor: 'white', borderBottom: '5px solid #ccc' }}>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <div className={`navbar-burger burger ${ isActive && 'is-active' }`} style={{ color: "#000" }} onClick={ e => this.updateIsActive() } data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
    
          <div id="navMenuDocumentation" className={`navbar-menu ${ isActive && 'is-active' }`}>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button bd-tw-button is-rounded" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                      <span className="icon">
                        <FontAwesomeIcon icon="user-graduate" />
                      </span>
                      <span>Relatórios</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button bd-tw-button is-rounded" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                      <span className="icon">
                        <FontAwesomeIcon icon="smile" />
                      </span>
                      <span>Contanto</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="bd-tw-button button is-rounded" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                      <span className="icon">
                        <FontAwesomeIcon icon="sign-in-alt" />
                      </span>
                      <span>
                        Entrar
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header className="root-header-navbar">
          <div className="container">
            <div className="container has-text-centered">
              <a href="#">
                <img src={logo} alt="Logo" style={{ width: 350 }}></img>
              </a>
            </div>
          </div>
          <style jsx>{`
            .root-header-navbar {
              margin: -2% 0 0 0
            }
          `}</style>
        </header>
      </div>
    );
  }
}

export default Header;
