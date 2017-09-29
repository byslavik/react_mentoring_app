import * as React from 'react';

import {FilmCard} from './FilmCard';
import {NoItems} from './NoItems';
import * as s from './scss/FilmList.scss';

import {Film} from '../models/film.model';

interface FilmCardListState {
}
interface FilmCardListProps {
  films: Film[];
  sort: string;
}


export class FilmList extends React.Component<FilmCardListProps, FilmCardListState> {

  buildCards(data: Film[]) {
    return data.map((item: Film, index) => {
      return <FilmCard key={index} item={item} /> 
    })
  }
  sortBy = (first:Film, second: Film) => {
    return second[this.props.sort] - first[this.props.sort];
  }

  render() {
    const cards:any[] = this.buildCards(this.props.films ? this.props.films.sort(this.sortBy) : []);
    
    return <div className={s.filmList}>
      {cards.length != 0 ? cards : <NoItems/> }
    </div> 
  }
}




