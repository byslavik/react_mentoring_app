import * as React from 'react';
import * as s from './scss/FilmCard.scss';

import { Link } from 'react-router-dom';

import { Person } from '../models/person.model';

import {SETTINGS} from './../settings';


interface PersonCardProps {
  item: Person;
  key?: number;
}

export  class PersonCard extends React.Component<PersonCardProps, any> {
  render () {
    const item:Person = this.props.item;
    const popularity:number = item.popularity;
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
