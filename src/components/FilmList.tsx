import * as React from 'react';

import {FilmCard} from './FilmCard';
import {PersonCard} from './PersonCard';
import {NoItems} from './NoItems';
import * as s from './scss/FilmList.scss';

import {Film} from '../models/film.model';
import {Person} from '../models/person.model';
import {urlParams, sortFields} from '../models/common.models';

import {sortFilm} from './hoc/sortFilms';

interface FilmListProps {
  films: Film[];
  sort: sortFields['fields'];
  method: urlParams['method'];
}


class FilmList extends React.Component<FilmListProps, any> {

  buildCards(data: Film[] ) {
    const CardComponent = this.props.method == 'movie' ? FilmCard : PersonCard;

    return data.map((item: Film, index) => {
      return <CardComponent key={item.id} item={item} />;
    })
  }

  render() {
    const cards:JSX.Element[] = this.buildCards(this.props.films);
    
    return <div className={s.filmList}>
      {cards.length != 0 ? cards : <NoItems/> }
    </div> 
  }
}

export default sortFilm(FilmList);




