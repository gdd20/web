import { h, Component } from 'preact';
import PropTypes from 'prop-types';

class Recipe extends Component {
  state = {
    isShare: false,
    isRecipe: false
  };

  updateIsShare = () => {
    const { isShare } = this.state;
    this.setState({ isShare: !isShare ? true : false })
  }

  updateIsRecipe = () => {
    const { isRecipe } = this.state;
    this.setState({ isRecipe: !isRecipe ? true : false });
  }

  render({ link, image, name, orign, description, ingredients, steps, time, portions, difficutly }, { isRecipe, isShare }) {
    return (
      <div className="card">
        <div className="card-content root-card-content" onClick={ e => this.updateIsRecipe() }>
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={image} alt="Recipe Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4" style={{ color: "#000" }}>{orign}</p>
            </div>
          </div>
    
          <div className="content">
            {name}
          </div>
        </div>
    
        <footer class="card-footer">
          <a class="card-footer-item button is-white reset-border-button" type="button" href={link} target="_blank">
            <span>
              Site
            </span>
          </a>
          <a class="card-footer-item button is-white reset-border-button" type="button" data-target="modal" aria-haspopup="true" onClick={ e => this.updateIsShare() }>
            <span>
              Compartilhar
            </span>
          </a>
        </footer>
        <style jsx>{`
          .root-card-content {
            padding: .7rem
          }
    
          .reset-border-button {
            border-radius: 0
          }
        `}</style>

        <div className={`modal ${ isRecipe && 'is-active'}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Receita Completa</p>
              <button className="delete" aria-label="close" data-target="modal" aria-haspopup="false" onClick={ e => this.updateIsRecipe() }></button>
            </header>
            <section className="modal-card-body">
              <div class="content">
                <h2>{name}</h2>
                <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                <h3>Ingredientes</h3>
                <ul>
                  {
                    ingredients.map((value, index) => (
                      <li key={index}>{value}</li>    
                    ))
                  }                  
                </ul>
                <h3>Passo a Passo</h3>
                <ol>
                  {
                    steps.map((value, index) => (
                      <li key={index}>{value}</li>    
                    ))
                  }
                </ol>
              </div>

              <div class="columns">
                <div class="column">
                  <a class="button is-primary is-fullwidth" title="Disabled button" disabled>{time}</a>
                </div>
                <div class="column">
                  <a class="button is-link is-fullwidth" title="Disabled button" disabled>{portions} porções</a>
                </div>
                <div class="column">
                  <a class="button is-info is-fullwidth" title="Disabled button" disabled>dificuldade {difficutly}</a>
                </div>
            </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button" data-target="modal" aria-haspopup="false" onClick={ e => this.updateIsRecipe() }>Fechar</button>
            </footer>
          </div>
        </div>

        <div className={`modal ${ isShare && 'is-active'}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Compartilhe na suas redes</p>
              <button className="delete" aria-label="close" data-target="modal" aria-haspopup="false" onClick={ e => this.updateIsShare() }></button>
            </header>
            <section className="modal-card-body">
              <div className="columns">
                <div className="column">
                  <a class="button is-fullwidth is-link">FACEBOOK</a>
                </div>
                <div className="column">
                  <a class="button is-fullwidth is-info">TWITTER</a>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button" data-target="modal" aria-haspopup="false" onClick={ e => this.updateIsShare() }>Fechar</button>
            </footer>
          </div>
        </div>

        <style jsx>{`
          .direct-button-facebook {
            float: right
          }
        `}</style>
      </div>
    );
  }
};

Recipe.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  orign: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  steps: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.string,
  portions: PropTypes.string,
  difficutly: PropTypes.string
};

Recipe.defaultProps = {
  link: 'https://bulma.io/images/placeholders/96x96.png',
  image: 'https://bulma.io/images/placeholders/96x96.png',
  name: 'Recipe Name',
  orign: 'Recipe Orign',
  description: 'Recipe Description',
  ingredients: ['ingredients 1', 'ingredients 2', 'ingredients 3'],
  steps: ['steps 1', 'steps 2', 'steps 3'],
  time: '30 minutos',
  portions: '4',
  difficutly: 'simples'
};

export default Recipe;