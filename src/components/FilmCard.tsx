import * as React from 'react';
import * as s from './FilmCard.scss';

import {Film, FilmCardProps, FilmCardState} from '../models/film.model';

export  class FilmCard extends React.Component<FilmCardProps, FilmCardState> {
  render () {
    const item:Film = this.props.item;
    return (
      <article className={s.filmCard}>
        <div className={s.imageWrap}>
          <img src={item.poster} alt={item.show_title}/>
        </div>
        <h1>{item.show_title} <span>{item.rating}</span></h1>
        <p>{item.category}</p>
      </article>
    )
  }
}
