import * as React from 'react';
import * as s from './Header.css';

import * as buttons from '../css/buttons.css';
import * as utils from '../css/utilities.css';

import {SearchBar} from './SearchBar';

export class Header extends React.Component<any, any> {
    
    constructor(props: any){
        super(props);
    }

    public state = {
        isSearchBar: false
    }

    showSearch() {
        this.setState({isSearchBar: !this.state.isSearchBar});
    }

    render() {
        return (<div className={s.headerWrapper}>
            <header className={s.header}>
                <nav>
                    <li><a href="Javascript:void(0)" className={buttons.buttonWhite} onClick={this.showSearch.bind(this)}>Search</a></li>
                </nav>
                {this.state.isSearchBar ? <SearchBar /> : <h1>Find Your movie</h1> }
            </header>
        </div>);
    }
}