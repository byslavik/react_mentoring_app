import * as React from 'react';

import { connect } from 'react-redux';
import {sortFilms} from '../actions';
import { sortFields } from '../models/common.models';
import {ReduxStore} from './../models/redux.model'; 

import * as s from './scss/StatusBar.scss';

interface FilterProps {
  sort: sortFields,
  sortFilms: any
}

export class FilmFilter extends React.Component<FilterProps, any> {
  
  sortFilms = (byfield:sortFields)=> {
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
export default connect(
  (state: ReduxStore) => ({
    sort: state.films.sort
  }),
  (dispatch: any) => ({
    sortFilms: (byfield:sortFields)=> dispatch(sortFilms({params: byfield}))
   })
)(FilmFilter);