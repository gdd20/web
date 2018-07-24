import 'bulma/css/bulma.css';
import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';

export default class App extends Component {	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
    <section class="hero is-success is-fullheight" style={{ backgroundColor: '#f44337' }}>
      <Header />
      
      <Home />
      <div class="hero-foot" style={{ backgroundColor: 'black', padding: '1rem 1.5rem 1rem' }}>
        <nav className="level has-text-centered">
          <div className="level-left">
            <p class="button is-danger is-outlined level-item"><a>Sobre</a></p>
            <p class="button is-danger is-outlined level-item"><a>Termos</a></p>
          </div>
          <div className="level-right">
            Geladeira do dia 20. All Rights Reserved 2018
          </div>
        </nav>
      </div>
    </section>
		);
	}
}
