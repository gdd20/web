import { h } from 'preact';
import placa_nova from '../assets/imgs/placa_nova.svg';

const Board = ({}) => (
  <article className="media" style={{ width: 350 }}>
    <figure className="media-left">
      <p className={`image`} style={{ width: 300, margin: '-9.3% 0 0 15%' }}>
        <img src={placa_nova} />
      </p>
    </figure>
  </article>
);

export default Board;