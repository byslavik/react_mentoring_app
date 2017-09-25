import * as React from 'react';
import * as s from './scss/FilmCard.scss';

import { Link } from 'react-router-dom';

import { Film } from '../models/film.model';


interface FilmCardState {
}
interface FilmCardProps {
  item: Film;
  key?: number;
}

export  class FilmCard extends React.Component<FilmCardProps, FilmCardState> {
  render () {
    const item:Film = this.props.item;
    return (
      <article className={s.filmCard}>
        <div className={s.imageWrap}>
          <img src={item.poster} alt={item.show_title}/>
        </div>
        <h1><Link to={`/film/${item.show_id}`}>{item.show_title}</Link> <span>{item.rating}</span></h1>
        <p>{item.category}</p>
      </article>
    )
  }
}
