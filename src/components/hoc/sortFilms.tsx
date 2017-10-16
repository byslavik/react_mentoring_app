import * as React from 'react';

import {connect} from 'react-redux';

import {Film} from '../../models/film.model';
import {urlParams, sortFields} from '../../models/common.models'

import {ReduxStore} from '../../models/redux.model'; 

interface FilmListProps {
  films: Film[];
  sort: sortFields['fields'];
  method: urlParams['method'];
  updateFilmsState: any
}
export function sortFilm(Component:any) {
  class SortFilm extends React.Component<FilmListProps, any> {
    constructor(props: FilmListProps) {
      super(props);     
    }

    componentWillReceiveProps(nextProps:FilmListProps) {
      if(this.props.sort != nextProps.sort) {
        this.props.updateFilmsState(this.props.films.sort(this.sortBy))
      }
    }

    sortBy = (first:Film, second: Film) => {
      const one:any = first[this.props.sort];
      const two:any = second[this.props.sort];
  
      return two - one;
    }
  
    render() {
      console.log(this.props.sort);

      return <Component films={this.props.films}  {...this.props}/>;
    }
  }
  function mapStateToProps(state:ReduxStore) {
    return {};
    }
  
    function mapDispatchToProps(dispatch:any) {
      return {
        updateFilmsState: (films:Film[])=> {
          dispatch({type: "UPDATE_FILMS_STATE", payload: films});
        }
      };
    }
  return connect<any,any,any>(mapStateToProps, mapDispatchToProps)(SortFilm)
}


