import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import {films} from './films';
import {searchMethod} from './searchMethod';

export default combineReducers({
  routerReducer,
  films,
  searchMethod
});