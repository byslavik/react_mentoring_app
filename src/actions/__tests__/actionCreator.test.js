import {getAllFilms, getFilm, sortFilms, changeMethod} from '../';

let urlParams = {
  type: 'search',
  method: 'person',
  query: 'tarantino'
}

describe('Action creators shoul create actions with appropriate sctructure', ()=>{
  it('getAllFilms should return object with dispatch type and url parameters for link generator', () => {
    const action = getAllFilms({dispatchType:'FETCH_FILMS', urlParams})
    const expectedAction = {
      type: 'FETCH_FILMS',
      payload: {
        dispatchType: 'FETCH_FILMS',
        urlParams
      }
    }
    expect(action).toEqual(expectedAction);
  });

  it('getFilm should return object with dispatch type and url parameters for link generator', () => {
    const action = getFilm({dispatchType:'GET_FILM', urlParams})
    const expectedAction = {
      type: 'GET_FILM',
      payload: {
        dispatchType: 'GET_FILM',
        urlParams
      }
    }
    expect(action).toEqual(expectedAction);
  });
  
  it('sortFilms should return object with type and  sorting method', () => {
    const action = sortFilms({params: 'popularity'})
    const expectedAction = {
      type: 'SORT_FILMS',
      payload: {
        params: 'popularity'
      }
    }
    expect(action).toEqual(expectedAction);
  });
    
  it('changeMethod should return object with type and search method', () => {
    const action = changeMethod({params: 'movie'})
    const expectedAction = {
      type: 'CHANGE_METHOD',
      payload: {
        params: 'movie'
      }
    }
    expect(action).toEqual(expectedAction);
  });
})