interface action {
  type: string;
  payload: any;
}


import {allFilms} from './allFilms';
import {currentFilm} from './currentFilm';
import {Film} from '../../models/film.model';
import {Person} from '../../models/person.model';
import {ReduxFilm} from '../../models/redux.model';
import {sortFields} from '../../models/common.models'

const defaultState:any = {
  allFilms: [],
  currentFilm: {},
  sort: 'popularity'
}

export function sortFilms (first:Film | Person, second: Film | Person) {
  const one:any = first[this.sort];
  const two:any = second[this.sort];

  return two - one;
}


export function films (state:ReduxFilm = defaultState, action:action):ReduxFilm {
  switch (action.type) {
    case 'SORT_FILMS':
      
      defaultState.sort = action.payload;
      defaultState.allFilms = defaultState.allFilms.sort(sortFilms.bind(defaultState));

      return {...defaultState};
    case 'GET_FILM_SUCCESS':
      return currentFilm(defaultState, action);
    default:
      return allFilms(defaultState, action);
  }
}