import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {NoItems} from './components/NoItems';


import {SearchBar} from './components/SearchBar';
import {HeaderTitle} from './components/HeaderTitle';
import {FilmDescription} from './components/FilmDescription';

import './scss/core.scss';

import App from './components/App';


const render = () => {
    ReactDom.render(
        <Router>
          <App>
            <Switch>
                <Route exact path="/" component={HeaderTitle} />
                <Route path="/search/:query?" component={SearchBar}/>
                <Route path="/film/:id" component={FilmDescription}/>
                <Route path="*" component={HeaderTitle} />
            </Switch>
          </App>
        </Router>,
        document.getElementById('app')
    )
}

render();
