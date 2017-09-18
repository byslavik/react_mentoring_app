import * as React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {StatusBar} from './StatusBar';
import {FilmCounter} from './FilmCounter';
import {FilmFilter} from './FilmFilter';
import {FilmList} from './FilmList';

export default class App extends React.Component {

    render() {
        return (<div>
            <Header/>
            <StatusBar status={<FilmCounter count="7" />} options={<FilmFilter />}/>
            <FilmList />
            <Footer/>
        </div>)
    }
}
