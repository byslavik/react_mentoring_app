import { call, put, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import axios from 'axios';
import {urlGenerator} from './../utilities';
import {urlParams, action} from '../models/common.models';

function fetchFilms(urlParams:urlParams){
    const link = urlGenerator(urlParams);

    return axios.get(link)
            .then((response)=>{;
              return (response.data.results ? response.data.results : response.data);
            })
}

export function* fetchFilmCall(action: action) {
   try {
      const url = action.payload.urlParams;
      const result = yield call(fetchFilms, url);
      yield put({type: `${action.payload.dispatchType}_SUCCESS`, payload: result});
   } catch (e) {
      yield put({type: `${action.payload.dispatchType}_FAILED`, payload: e.message});
   }
}

export function* allFilmsSaga() {
  yield* takeEvery("FETCH_FILMS", fetchFilmCall);
}
export function* singleFilmSaga() {
  yield* takeEvery("GET_FILM", fetchFilmCall);
}


export default function* root() {
  yield [
    fork(allFilmsSaga),
    fork(singleFilmSaga)
  ]
}