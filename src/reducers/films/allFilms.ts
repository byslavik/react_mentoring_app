interface action {
  type: string;
  payload: Film[];
}

import {Film} from '../../models/film.model';
import {ReduxFilm} from '../../models/redux.model';

export function allFilms (state:ReduxFilm, action:action):ReduxFilm {
  switch (action.type) {
    case  'FETCH_FILMS_SUCCESS':
      state.allFilms = action.payload;
      return {...state};
    case  'FETCH_FILMS_FAILED':
      state.allFilms = [];
      return {...state};
    default:
      return {...state};
  }
}