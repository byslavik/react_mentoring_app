interface action {
  type: string;
  payload: any;
}

import {Film} from '../../models/film.model';
import {ReduxFilm} from '../../models/redux.model';

export function currentFilm (state:ReduxFilm, action:action):ReduxFilm {
  switch (action.type) {
    case  'GET_FILM_SUCCESS':
      state.currentFilm = action.payload;
      return {...state};
    default:
      return {...state};
  }
}