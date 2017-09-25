import * as React from 'react';
import * as s from './scss/FilmDescripiton.scss';

import {Film} from '../models/film.model';


interface FilmState {
}
interface FilmProps {
  item: Film;
}


const filmData = {
  unit: 1463,
  show_id: 520179,
  show_title: "Four Rooms",
  release_year: "1995",
  rating: "3.6",
  category: "Comedies",
  show_cast: "Tim Roth, Antonio Banderas, Jennifer Beals, Bruce Willis, Paul Calderon, Madonna, Marisa Tomei, Quentin Tarantino, Ione Skye, Lili Taylor",
  director: "Quentin Tarantino, Robert Rodriguez, Allison Anders, Alexandre Rockwell",
  summary: "One mad New Year's Eve, an overwhelmed bellboy copes with witches and diabolical children, gets caught in the middle of a sour relationship and settles a bloody bet for members of a superstar's entourage.",
  poster: "http://netflixroulette.net/api/posters/520179.jpg",
  mediatype: 0,
  runtime: "98 min"
  };

export class FilmDescription extends React.Component<FilmProps, FilmState> {
    constructor () {
      super();
    }

    public render() {

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
