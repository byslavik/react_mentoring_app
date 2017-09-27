interface action {
  type: string;
  payload?: object;
}

import {Film} from '../models/film.model';

export function currentFilm (state = {}, action:action) {
  if (action.type === 'GET_FILM_SUCCESS') {
    return action.payload;
  } else if (action.type === 'GET_FILM_FAILED') {
    return {};
  }
  return state;
}