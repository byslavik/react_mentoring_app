interface action {
  type: string;
  payload: Film;
}

import {Film} from '../models/film.model';

export function currentFilm (state = {}, action:action) {
  if (action.type === 'GET_FILM_SUCCESS') {
    return action.payload;
  }
  return state;
}