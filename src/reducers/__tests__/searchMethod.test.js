import reducer from '../index'
// import * as types from '../../constants/ActionTypes';
import {film, defaultState} from './testData';
describe('searchMethod reducer', () => {

  it('should return movie by default ', () => {
    let reducerResult = reducer(defaultState, {
      type: 'ANY_TYPE',
      payload: {params: ''}
    });

    expect(
      reducerResult.searchMethod
    ).toEqual('movie')
  })

  it('should change search method on  ', () => {
    let reducerResult = reducer(defaultState, {
      type: 'CHANGE_METHOD',
      payload: {
        params: 'person'
      }
    });

    expect(
      reducerResult.searchMethod
    ).toEqual('person')
  })

});