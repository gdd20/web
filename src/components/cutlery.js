import { h } from 'preact';
import colher_faca from '../assets/icons/colher_faca.svg';

const Cutlery = ({}) => (
  <article className="media" style={{ width: 350 }}>
    <figure className="media-left">
      <p className={`image`} style={{ width: 150, margin: '-30.3% 0 0 0%' }}>
        <img src={colher_faca} />
      </p>
    </figure>
  </article>
);

export default Cutlery;