interface action {
  type: string;
  payload: Film;
}

import {Film} from '../models/film.model';

export function currentFilm (state = {}, action:action) {
  switch (action.type) {
    case  'GET_FILM_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}