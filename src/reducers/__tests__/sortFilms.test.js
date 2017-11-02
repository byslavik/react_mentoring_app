import reducer, {sortFilms} from '../index'
// import * as types from '../../constants/ActionTypes';
import {film, defaultState} from './testData';
describe('sort reducer', () => {
  it('sort field should be "by popularity" by default ', () => {
    let reducerResult = reducer(defaultState, {
      type: 'ANY_TYPE',
      payload: {params: ''}
    });

    expect(
      reducerResult.films.sort
    ).toEqual('popularity')
  })

  it('should sort results by popularity ', () => {
    let sortField = 'popularity';
    let reducerResult = reducer(defaultState, {
      type: 'SORT_FILMS',
      payload: {params: sortField}
    });

    let sorted = defaultState.films.allFilms.sort(sortFilms);

    expect(
      reducerResult.films.allFilms
    ).toEqual(sorted)
  })

  it('should sort results by votes count ', () => {
    let sortField = 'votes_count';
    let reducerResult = reducer(defaultState, {
      type: 'SORT_FILMS',
      payload: {params: sortField}
    });

    let sorted = defaultState.films.allFilms.sort(sortFilms);

    expect(
      reducerResult.films.allFilms
    ).toEqual(sorted)
  })

});