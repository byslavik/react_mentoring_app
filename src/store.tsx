import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
const { routerMiddleware, push } = require('react-router-redux');
import createSagaMiddleware from 'redux-saga'
import filmSaga from './sagas'

import rootReducer from './reducers/index';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(historyMiddleware)));

sagaMiddleware.run(filmSaga)


export default store;