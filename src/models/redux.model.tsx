import {Person, FullPerson} from './person.model';
import {Film, FullFilm} from './film.model';
import {urlParams, sortFields} from './common.models'

export interface ReduxStore { 
  films: Film[] | Person[],
  searchMethod: urlParams['method'],
  sort: sortFields['fields'],
  currentFilm:  FullFilm | FullPerson

}