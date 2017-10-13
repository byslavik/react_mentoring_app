import * as React from 'react';

import { connect } from 'react-redux';


import * as s from './scss/StatusBar.scss';

class FilmFilter extends React.Component<any, any> {
  
  sortFilms = (byfield:string)=> {
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
  (state: any) => ({
    sort: state.sort
  }),
  (dispatch: any) => ({
    sortFilms: (byfield:string)=> {
      dispatch({type: "SORT_FILMS", payload: byfield});
    }
   })
)(FilmFilter);