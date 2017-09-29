interface action {
  type: string;
  payload: Film;
}

import {Film} from '../models/film.model';

export function currentFilm (state:Film | object = {}, action:action):Film | object {
  if (action.type === 'GET_FILM_SUCCESS') {
    return action.payload;
  } else if (action.type === 'GET_FILM_FAILED') {
    return {};
  }
  return state;
}