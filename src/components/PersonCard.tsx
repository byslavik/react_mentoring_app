import * as React from 'react';
import * as s from './scss/FilmCard.scss';

import { Link } from 'react-router-dom';

import { Film } from '../models/film.model';

import {SETTINGS} from './../settings';


interface PersonCardProps {
  item: Film;
  key?: number;
}

export  class PersonCard extends React.Component<PersonCardProps, any> {
  render () {
    const item:Film = this.props.item;
    const popularity:any = item.popularity;
    return (
      <article className={s.filmCard}>
        <div className={s.imageWrap}>
          <img src={SETTINGS.imgUrl + item.profile_path} alt={item.name}/>
        </div>
        <h1><Link to={`/person/${item.name}/${item.id}`}>{item.name}</Link> <span>{(Math.round(popularity * 100) / 100 )}</span></h1>
      </article>
    )
  }
}
