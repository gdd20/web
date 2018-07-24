import { h, Component } from 'preact';
import {
  Board,
  Cutlery,
  Search, 
  Recipe
} from '../components';
import data from '../assets/data.json';
import { __values } from '../../node_modules/tslib';

export default class Home extends Component {
  render() {
    return (
      <div class="columns">
        <div class="column is-narrow">
          <Board />
        </div>

        <div class="column is-three-fifths" style={{ margin: '0 0 0 0' }}>
          <div class="hero-body">
            <div class="container" style={{ width: '100%' }}>
              <Search />
              <br />
              <div className="columns is-multiline">
                {
                  data.map((values, index) => (
                    <div key={index} className={`column is-one-quarter`}>
                      <Recipe {...values} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="column is-narrow">
          <Cutlery />
        </div>
      </div>
    );
  }
};