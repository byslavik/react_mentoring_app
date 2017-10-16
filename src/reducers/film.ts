interface action {
  type: string;
  payload: Film[];
}

import {Film} from '../models/film.model';

export function films (state:Film[] = [], action:action):Film[] {
  switch (action.type) {
    case  'FETCH_FILMS_SUCCESS':
      if (!Array.isArray(action.payload)) {
        return [action.payload];
      }
      return action.payload;
    case  'FETCH_FILMS_FAILED':
      return [];
    default:
      return state;
  }
}