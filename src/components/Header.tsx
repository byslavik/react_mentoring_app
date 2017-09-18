import * as React from 'react';
import * as s from './Header.css';

import * as buttons from '../css/buttons.css';
import * as utils from '../css/utilities.css';

import {SearchBar} from './SearchBar';
import {FilmDescription} from './FilmDescription';

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
                {this.state.isMovie ? <FilmDescription/> : null }
            </header>
        </div>);
    }
}