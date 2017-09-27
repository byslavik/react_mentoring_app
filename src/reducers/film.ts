interface action {
  type: string;
  payload?: any;
}

import {Film} from '../models/film.model';

export function films (state:Film[] = [], action:action) {
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