import * as React from 'react';
import * as s from './SearchBar.scss';

import * as buttons from '../scss/buttons.scss';
import * as utils from '../scss/utilities.scss';

export class SearchBar extends React.Component<any, any> {
    
    constructor(props: any){
        super(props);
    }

    render() {
        return (<div className={s.searchBar}>
                <h2>Find your movie</h2>
                <input type="text" className={s.searchBarField}/>
                <div className={s.searchBarOptions}>
                    Search By:

                    <ul>
                        <li>
                            <a className={buttons.buttonWhite + ' ' + buttons.small + ' ' + buttons.buttonWhiteActive} href="javascript:void(0)">Title</a>
                        </li>
                        <li>
                            <a className={buttons.buttonWhite + ' ' + buttons.small} href="javascript:void(0)">Director</a>
                        </li>
                    </ul>
                </div>
                <input type="button" className={buttons.search} value="Search" />
        </div>);
    }
}