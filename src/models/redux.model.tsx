import {Person, FullPerson} from './person.model';
import {Film, FullFilm} from './film.model';
import { sortFields, searchMethod} from './common.models'

export interface ReduxStore { 
  films: ReduxFilm,
  searchMethod: searchMethod,
  runSaga?: any
}

export interface ReduxFilm {
  allFilms:  Film[] | Person[],
  sort: sortFields,
  currentFilm:  FullFilm | FullPerson
}