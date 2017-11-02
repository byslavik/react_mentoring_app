import * as React from 'react';
import {hydrate} from 'react-dom';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routerMiddleware, push } from 'react-router-redux';

import {NoItems} from './components/NoItems';
import SearchBar from './components/SearchBar';
import {HeaderTitle} from './components/HeaderTitle';
import FilmDescription from './components/FilmDescription';
import PersonDescription from './components/PersonDescription';

import App from './components/App';

import 'babel-polyfill';
import './scss/core.scss';

import configureStore from './configureStore';

interface MyWindow extends Window {
  __PRELOADED_STATE__: any;
}

declare var window: MyWindow;

const store = configureStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

const render = () => {
    hydrate(
      <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <App>
                  <Route exact path="/" component={SearchBar}/>
                  <Route path="/search/:query?" component={SearchBar}/>
                  <Route path="/film/:title/:id" component={FilmDescription}/>
                  <Route path="/person/:name/:id" component={PersonDescription}/>
              </App>
            </Switch>
          </BrowserRouter>
      </Provider>,
        document.getElementById('root')
    )
}

render();
