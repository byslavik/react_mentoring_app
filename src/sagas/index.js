import { call, put, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import axios from 'axios';
import {urlGenerator} from './../utilities';

function fetchFilms(urlParams){
    const link = urlGenerator(urlParams);

    return axios.get(link)
            .then((response)=>{;
              return (response.data.results ? response.data.results : response.data);
            })
}

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchFilmCall(action) {
   try {
      const result = yield call(fetchFilms, action.payload.urlParams);
      yield put({type: `${action.payload.dispatchType}_SUCCESS`, payload: result});
   } catch (e) {
      yield put({type: `${action.payload.dispatchType}_FAILED`, payload: e.message});
   }
}

/*
  Запускаем `fetchUser` на каждый задиспатченый экшен `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.
*/
function* allFilmsSaga() {
  yield* takeEvery("FETCH_FILMS", fetchFilmCall);
}
function* singleFilmSaga() {
  yield* takeEvery("GET_FILM", fetchFilmCall);
}


export default function* root() {
  yield [
    fork(allFilmsSaga),
    fork(singleFilmSaga)
  ]
}