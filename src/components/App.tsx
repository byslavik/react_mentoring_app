import * as React from 'react';
import {connect} from 'react-redux';

import {Header} from './Header';
import {Footer} from './Footer';

import {HeaderNavigation} from './HeaderNavigation';

import SearchBar from './SearchBar';
import {StatusBar} from './StatusBar';
import {FilmCounter} from './FilmCounter';
import FilmFilter from './FilmFilter';
import FilmList from './FilmList';

import {Film} from '../models/film.model';
import {Person} from '../models/person.model'
import {ReduxStore} from '../models/redux.model';
import {searchMethod, sortFields} from '../models/common.models'

interface AppProps {
  sort?: sortFields;
  films?: Film[],
  searchMethod: searchMethod
}

class App extends React.Component<AppProps, any> {

    render() {
        return (
            <div>
                <Header>
                    <HeaderNavigation/> {this.props.children}
                </Header>
                <StatusBar
                    status={<FilmCounter count = {this.props.films.length} />}
                    options={<FilmFilter />}
                />
                <FilmList films={this.props.films} sort={this.props.sort} method={this.props.searchMethod}/>
            </div>
        )
    }
}

export default connect<any, any, any>(
  (state : ReduxStore) => ({
      films: state.films.allFilms, 
      sort: state.films.sort,
      searchMethod: state.searchMethod
    }),
  (dispatch: any) => ({

    })
)(App)
