import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import filmSaga from './sagas';
import {Store} from 'redux'
// import {ReduxStore} from './models/redux.model'

const sagaMiddleware = createSagaMiddleware();
interface ExtendedStore extends Store<any> {
  runSaga?: any,
  close?: any
}
export default (initialState:any) => {
  const store:ExtendedStore = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  store.runSaga = sagaMiddleware.run;
  store.close = ()=> store.dispatch(END);
  sagaMiddleware.run(filmSaga);
  return store;
}