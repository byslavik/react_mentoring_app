import * as React from 'react';
import {connect} from 'react-redux';

import {Header} from './Header';
import {Footer} from './Footer';

import {HeaderNavigation} from './HeaderNavigation';

import SearchBar from './SearchBar';
import {StatusBar} from './StatusBar';
import {FilmCounter} from './FilmCounter';
import FilmFilter from './FilmFilter';
import {FilmList} from './FilmList';

import {Film} from '../models/film.model'

interface AppProps {
  sort?: string;
  films?: Film[]
}

interface AppState {
  
}

class App extends React.Component<AppProps, AppState> {

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
                <FilmList films={this.props.films} sort={this.props.sort}/>
            </div>
        )
    }
}

export default connect<AppProps, any, any>(
  (state : any) => ({
      films: state.films, 
      sort: state.sort
    }),
  (dispatch: any) => ({

    })
)(App)
