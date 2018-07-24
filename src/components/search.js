import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Search = ({}) => (
  <div>
    <h5 className="title is-5" style={{ textAlign: 'center' }}>Encontre receitas com ingredientes que você tem. Digite os itens separados por vírgula.</h5>
    <div className="field has-addons">
      <div className="control is-expanded">
        <input className="input is-medium" type="text" placeholder="Ex: feijão, carne, arroz"></input>
      </div>
      <div className="control">
        <a className="button is-info is-medium" style={{ backgroundColor: '#0ecaf2' }}>
          <span className="icon is-small">
            <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default Search;