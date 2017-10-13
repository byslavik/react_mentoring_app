import * as React from 'react';
import * as s from './scss/FilmCard.scss';

import { Link } from 'react-router-dom';

import { Film } from '../models/film.model';

import {SETTINGS} from './../settings';

interface FilmCardState {
}
interface FilmCardProps {
  item: Film;
  key?: number;
}

export  class FilmCard extends React.Component<FilmCardProps, FilmCardState> {
  render () {
    const item:Film = this.props.item;
    const popularity:any = item.popularity;
    return (
      <article className={s.filmCard}>
        <div className={s.imageWrap}>
          <img src={SETTINGS.imgUrl + item.poster_path} alt={item.title}/>
        </div>
        <h1><Link to={`/film/${item.title}/${item.id}`}>{item.title}</Link> <span>{(Math.round(popularity * 100) / 100 )}</span></h1>
      </article>
    )
  }
}
