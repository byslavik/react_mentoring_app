import * as React from 'react';

import { connect } from 'react-redux';

import {getFilmsByTitle} from '../actions/films';

import * as s from './scss/StatusBar.scss';

class FilmFilter extends React.Component<any, any> {
  
  sortFilms = (byfield:string)=> {
    this.props.sortFilms(byfield);
  }

    render() {
        return (<ul>
          <li style={{fontWeight: "bold"}}>Sort By: </li>
          <li><button className={this.props.sort == 'release_year' ? s.active : ''} onClick={this.sortFilms.bind(this, 'release_year')}>by Release Date</button></li>
          <li><button className={this.props.sort == 'rating' ? s.active : ''} onClick={this.sortFilms.bind(this, 'rating')}>by Rating</button></li>
      </ul> )
    }
}

export default connect<any, any, any>(
  (state: any) => ({
    sort: state.sort
  }),
  (dispatch: any) => ({
    sortFilms: (byfield:string)=> {
      dispatch({type: "SORT_FILMS", payload: byfield});
    }
   })
)(FilmFilter);