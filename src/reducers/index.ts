import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import {films} from './film';
import {sort} from './sort';
import {currentFilm} from './currentFilm';
import {searchMethod} from './searchMethod';

export default combineReducers({
  routerReducer,
  films,
  currentFilm,
  sort,
  searchMethod
});