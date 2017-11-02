import * as express from 'express';   
import * as qs from 'qs';     
const app = express();                 
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import template from './template.js';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter , Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import filmSaga from './sagas'
import * as path from 'path';

import App from './components/App';
import SearchBar from './components/SearchBar';
import {HeaderTitle} from './components/HeaderTitle';
import FilmDescription from './components/FilmDescription';
import PersonDescription from './components/PersonDescription';

import 'babel-polyfill';
import configureStore from './configureStore';

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(cors());
// app.use('/',express.static(path.join(__dirname, '../')));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/img', express.static(path.join(__dirname, '../public/img')));
app.use('/built', express.static(path.join(__dirname, '/')));
var port = process.env.PORT || 3083;       

// ROUTES
// =============================================================================
var router = express.Router();              


router.use(function(req:any, res:any, next:any) {
    next();
});

interface Context {
  url?: string;
}

app.get('/*', function(req:any, res:any) {
  const store = configureStore({});
  const context:Context = {};
  const app = <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Switch>
          <App>
              <Route exact path="/" component={SearchBar}/>
              <Route path="/search/:query?" component={SearchBar}/>
              <Route path="/film/:title/:id" component={FilmDescription}/>
              <Route path="/person/:name/:id" component={PersonDescription}/>
          </App>
        </Switch>
      </StaticRouter>
    </Provider>;

store.runSaga(filmSaga).done.then(() => {
    const html = renderToString(app);

    if (context.url) {
      return res.redirect(context.url);
    }

    const preloadedState = store.getState();

    return res.send(template({html, preloadedState}));
  });

  renderToString(app);

  store.close();

});



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server OK, port ' + port);


