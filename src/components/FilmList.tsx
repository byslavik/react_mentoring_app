import * as React from 'react';

import {FilmCard} from './FilmCard';
import {NoItems} from './NoItems';
import * as s from './FilmList.scss';

import {Film} from '../models/film.model';

export interface FilmCardListState {
}
export interface FilmCardListProps {
  data: Film[];
}

export  class FilmList extends React.Component<FilmCardListProps, FilmCardListState> {
  buildCards(data: Film[]) {
    return data.map((item: Film, index) => {
      return <FilmCard key={index} item={item} /> 
    })
  }

  render() {
    const cards:Array<any> = this.buildCards(this.props.data);
    
    return <div className={s.filmList}>
      {cards.length != 0 ? cards : <NoItems/> }
    </div> 
  }
}
