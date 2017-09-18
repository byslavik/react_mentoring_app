import * as React from 'react';
import * as s from './Header.scss';

import * as buttons from '../scss/buttons.scss';
import * as utils from '../scss/utilities.scss';

import {SearchBar} from './SearchBar';
import {FilmDescription} from './FilmDescription';


const filmData = {
  unit: 1463,
  show_id: 520179,
  show_title: "Four Rooms",
  release_year: "1995",
  rating: "3.6",
  category: "Comedies",
  show_cast: "Tim Roth, Antonio Banderas, Jennifer Beals, Bruce Willis, Paul Calderon, Madonna, Marisa Tomei, Quentin Tarantino, Ione Skye, Lili Taylor",
  director: "Quentin Tarantino, Robert Rodriguez, Allison Anders, Alexandre Rockwell",
  summary: "One mad New Year's Eve, an overwhelmed bellboy copes with witches and diabolical children, gets caught in the middle of a sour relationship and settles a bloody bet for members of a superstar's entourage.",
  poster: "http://netflixroulette.net/api/posters/520179.jpg",
  mediatype: 0,
  runtime: "98 min"
  };

export class Header extends React.Component<any, any> {
    
    constructor(props: any){
        super(props);
    }

    public state = {
        isSearchBar: false,
        isMovie: false
    }

    showSearch() {
        this.setState({isSearchBar: !this.state.isSearchBar, isMovie: false});
    }    
    showMovie() {
      this.setState({isMovie: !this.state.isMovie, isSearchBar: false});
    }

    render() {
        return (<div className={s.headerWrapper}>
            <header className={s.header}>
                <nav>
                    <li><a href="Javascript:void(0)" className={buttons.buttonWhite + ' ' + (this.state.isSearchBar ? buttons.buttonWhiteActive : '')} onClick={this.showSearch.bind(this)}>Search</a></li>
                    <li><a href="Javascript:void(0)" className={buttons.buttonWhite + ' ' + (this.state.isMovie ? buttons.buttonWhiteActive : '')} onClick={this.showMovie.bind(this)}>test movie</a></li>
                </nav>
                {!this.state.isSearchBar && !this.state.isMovie ? <h1 className={s.siteHeader}>Find Your movie</h1> : null }
                {this.state.isSearchBar ? <SearchBar/> : null }
                {this.state.isMovie ? <FilmDescription item={filmData}/> : null }
            </header>
        </div>);
    }
}