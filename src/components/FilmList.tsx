import * as React from 'react';

import {FilmCard} from './FilmCard';
import {PersonCard} from './PersonCard';
import {NoItems} from './NoItems';
import * as s from './scss/FilmList.scss';

import {Film} from '../models/film.model';
import {Person} from '../models/person.model';
import {urlParams, sortFields} from '../models/common.models'

interface FilmCardListProps {
  films: Film[];
  sort: sortFields['fields'];
  method: urlParams['method'];
}


export class FilmList extends React.Component<FilmCardListProps, any> {

  buildCards(data: Film[] ) {
    const CardComponent = this.props.method == 'movie' ? FilmCard : PersonCard;

    return data.map((item: Film, index) => {
      return <CardComponent key={item.id} item={item} />;
    })
  }
  sortBy = (first:Film, second: Film) => {
    const one:any = first[this.props.sort];
    const two:any = second[this.props.sort];

    return two - one;
  }

  render() {
    const cards:JSX.Element[] = this.buildCards(this.props.films ? this.props.films.sort(this.sortBy) : []);
    
    return <div className={s.filmList}>
      {cards.length != 0 ? cards : <NoItems/> }
    </div> 
  }
}




