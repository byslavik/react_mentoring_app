import * as React from 'react';
import * as s from './FilmDescripiton.scss';

import {Film} from '../models/film.model';


interface FilmState {
}
interface FilmProps {
  item: Film;
}

export class FilmDescription extends React.Component<FilmProps, FilmState> {
    constructor () {
      super();
    }

    public render() {
      const filmData:Film = this.props.item;

        return (<article className={s.filmContainer}>
          <div className={s.imgWrap}>
            <img src={filmData.poster} alt={filmData.show_title}/>
          </div>
          <div className={s.filmDescription}>
            <h1>{filmData.show_title} <span>{filmData.rating}</span></h1>
            <p className={s.filmCategory}>{filmData.category}</p>
            <ul className={s.fimInfo}>
              <li>{filmData.release_year}</li>
              <li>{filmData.runtime}</li>
            </ul>
            <p className={s.filmSummary}>{filmData.summary}</p>
            <p className={s.filmAdditional}>
              <span>Director: {filmData.director}</span>  
              <span>Cast: {filmData.show_cast}</span>  
            </p>
          </div>
        </article>)
    }
}
