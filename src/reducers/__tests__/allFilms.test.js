import reducer from '../index'
// import * as types from '../../constants/ActionTypes';
import {filmList, defaultState} from './testData';
describe('allFilms reducer', () => {
  
  it('should return empty array for films on FETCH_FILMS_FAILED', () => {
    let reducerResult = reducer(defaultState, {
      type: 'FETCH_FILMS_FAILED',
      payload: filmList
    });

    expect(
      reducerResult.films.allFilms
    ).toEqual([])
  })
  it('should return all films on FETCH_FILMS_SUCCESS ', () => {
    let reducerResult = reducer(defaultState, {
      type: 'FETCH_FILMS_SUCCESS',
      payload: filmList
    });

    expect(
      reducerResult.films.allFilms
    ).toEqual(filmList)
  })

    
})