import { call, put, take } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import {filmList, filmData} from './testData';
import {fetchFilmCall} from '../';


describe('Fetch films saga', () => {
  describe('Fetch all films', () => {
    const fetchFilms = ()=> filmList;
    const urlParams = {
      type: 'search',
      method: 'movie',
      query: "Tarantino"
    }
    const requestAction = {
      type: "FETCH_FILMS",
      payload: {
        dispatchType: "FETCH_FILMS",
        urlParams: urlParams
      }
    }
    const successAction = {
      type: "FETCH_FILMS_SUCCESS"
    }

    const it = sagaHelper(fetchFilmCall(requestAction));

    it('should have called the mock API first', result => {
        expect(JSON.stringify(result)).toEqual(JSON.stringify(call(fetchFilms, urlParams)));
    });

    it('and then trigger an action', result => {
        expect(result).toEqual(put(successAction));
    });

    it('and then nothing', result => {
        expect(result).toBeUndefined();
    });
  }); 

  describe('Fetch specific film', () => {
    const fetchFilms = ()=> filmData;
    const urlParams = {
      type: 'movie',
      method: 'movie',
      query: 10
    }
    const requestAction = {
      type: "GET_FILM",
      payload: {
        dispatchType: "GET_FILM",
        urlParams: urlParams
      }
    }
    const successAction = {
      type: "GET_FILM_SUCCESS"
    }
    
    const it = sagaHelper(fetchFilmCall(requestAction));

    it('should have called the mock API first', result => {
        expect(JSON.stringify(result)).toEqual(JSON.stringify(call(fetchFilms, urlParams)));
    });

    it('and then trigger an action', result => {
        expect(result).toEqual(put(successAction));
    });

    it('and then nothing', result => {
        expect(result).toBeUndefined();
    });
  }); 
});