interface action {
  type: string;
  payload: Film[];
}

import {Film} from '../models/film.model';

export function films (state:Film[] = [], action:action):Film[] {
  if (action.type === 'FETCH_FILMS_SUCCESS') {
    if (!Array.isArray(action.payload)) {
      return [action.payload];
    }
    return action.payload;
  } else if (action.type === 'FETCH_FILMS_FAILED') {
    return [];
  }
  return state;
}