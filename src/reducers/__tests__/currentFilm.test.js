import reducer from '../index'
// import * as types from '../../constants/ActionTypes';
import {film, defaultState} from './testData';
describe('currentFilm reducer', () => {

  it('should return film on GET_FILM_SUCCESS ', () => {
    let reducerResult = reducer(defaultState, {
      type: 'GET_FILM_SUCCESS',
      payload: film
    });

    expect(
      reducerResult.films.currentFilm
    ).toEqual(film)
  })

});