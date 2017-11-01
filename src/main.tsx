import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
const { ConnectedRouter, routerMiddleware, push } = require('react-router-redux');

import {NoItems} from './components/NoItems';


import SearchBar from './components/SearchBar';
import {HeaderTitle} from './components/HeaderTitle';
import FilmDescription from './components/FilmDescription';
import PersonDescription from './components/PersonDescription';

import App from './components/App';
import filmSaga from './sagas';
import reducer from './reducers';
import store, { history } from './store';

import './scss/core.scss';


history.listen(() => {
  window.scrollTo(0, 0);
})


const render = () => {
    ReactDom.render(
      <Provider store={store}>
          <Router history={history}>
            <Switch>
              <App>
                  <Route exact path="/" component={SearchBar}/>
                  <Route path="/search/:query?" component={SearchBar}/>
                  <Route path="/film/:title/:id" component={FilmDescription}/>
                  <Route path="/person/:name/:id" component={PersonDescription}/>
              </App>
            </Switch>
          </Router>
      </Provider>,
        document.getElementById('app')
    )
}

render();
