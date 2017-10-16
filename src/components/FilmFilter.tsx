import * as React from 'react';

import { connect } from 'react-redux';

import { sortFields } from '../models/common.models';
import {ReduxStore} from './../models/redux.model'; 

import * as s from './scss/StatusBar.scss';

interface FilterProps {
  sort: sortFields['fields'],
  sortFilms: any
}

class FilmFilter extends React.Component<FilterProps, any> {
  
  sortFilms = (byfield:sortFields['fields'])=> {
    this.props.sortFilms(byfield);
  }

    render() {
        return (<ul>
          <li style={{fontWeight: "bold"}}>Sort By: </li>
          <li><button className={this.props.sort == 'vote_count' ? s.active : ''} onClick={this.sortFilms.bind(this, 'vote_count')}>by Votes Count</button></li>
          <li><button className={this.props.sort == 'popularity' ? s.active : ''} onClick={this.sortFilms.bind(this, 'popularity')}>by Popularity</button></li>
      </ul> )
    }
}
function sortFilm(byfield:sortFields['fields']) {
  return {
    type: "SORT_FILMS",
    payload: byfield
  }
}
export default connect(
  (state: ReduxStore) => ({
    sort: state.sort
  }),
  (dispatch: any) => ({
    sortFilms: (byfield:sortFields['fields'])=> dispatch(sortFilm(byfield))
   })
)(FilmFilter);