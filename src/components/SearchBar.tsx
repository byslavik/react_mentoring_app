import * as React from 'react';
import * as s from './SearchBar.scss';

import * as buttons from '../scss/buttons.scss';
import * as utils from '../scss/utilities.scss';

export class SearchBar extends React.Component {
    render() {
        return (<div className={s.searchBar}>
                <h2>Find your movie</h2>
                <input type="text" className={s.searchBarField}/>
                <div className={s.searchBarOptions}>
                    Search By:

                    <ul>
                        <li>
                            <button className={buttons.buttonWhite + ' ' + buttons.small + ' ' + buttons.buttonWhiteActive} >Title</button>
                        </li>
                        <li>
                            <button className={buttons.buttonWhite + ' ' + buttons.small} >Director</button>
                        </li>
                    </ul>
                </div>
                <input type="button" className={buttons.search} value="Search" />
        </div>);
    }
}