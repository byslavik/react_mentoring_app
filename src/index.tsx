import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';


import {NoItems} from './components/NoItems';


import SearchBar from './components/SearchBar';
import {HeaderTitle} from './components/HeaderTitle';
import FilmDescription from './components/FilmDescription';

import './scss/core.scss';

import App from './components/App';


const history = createHistory();
const middleware = routerMiddleware(history);

history.listen(() => {
  window.scrollTo(0, 0);
})

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk), applyMiddleware(middleware)));


const render = () => {
    ReactDom.render(
      <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <App>
                  <Route exact path="/" component={SearchBar}/>
                  <Route path="/search/:query?" component={SearchBar}/>
                  <Route path="/film/:title/:id" component={FilmDescription}/>
              </App>
            </Switch>
          </ConnectedRouter>
      </Provider>,
        document.getElementById('app')
    )
}

render();
