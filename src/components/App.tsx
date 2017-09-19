import * as React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {StatusBar} from './StatusBar';
import {FilmCounter} from './FilmCounter';
import {FilmFilter} from './FilmFilter';
import {FilmList} from './FilmList';

import {testData} from './testdata';

import {SearchBar} from './SearchBar';
import {FilmDescription} from './FilmDescription';
import {HeaderNavigation} from './HeaderNavigation';


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

export default class App extends React.Component {

    render() {
        return (<div>
            <Header>
              <HeaderNavigation/>
              <SearchBar/>
              <FilmDescription item={filmData} />
            </Header>
            <StatusBar status={<FilmCounter count={7} />} options={<FilmFilter />}/>
            <FilmList data={testData}/>
            <Footer/>
        </div>)
    }
}
