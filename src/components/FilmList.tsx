import * as React from 'react';

import {FilmCard} from './FilmCard';
import {PersonCard} from './PersonCard';
import {NoItems} from './NoItems';
import * as s from './scss/FilmList.scss';

import {Film} from '../models/film.model';
import {Person} from '../models/person.model';


interface FilmCardListProps {
  films: Film[] | Person[];
  sort: 'popularity' | 'vote_count';
  method: 'movie' | 'person';
}


export class FilmList extends React.Component<FilmCardListProps, any> {

  buildCards(data: Film[] | Person[]) {
    const CardComponent: React.ComponentClass = this.props.method == 'movie' ? FilmCard : PersonCard;

    return data.map((item: Film | Person, index) => {
      return <CardComponent key={index} item={item} />;
    })
  }
  sortBy = (first:Film, second: Film) => {
    const one:any = first[this.props.sort];
    const two:any = second[this.props.sort];

    return two - one;
  }

  render() {
    const cards:JSX.Element[] = this.buildCards(this.props.films ? this.props.films : []);
    
    return <div className={s.filmList}>
      {cards.length != 0 ? cards : <NoItems/> }
    </div> 
  }
}




