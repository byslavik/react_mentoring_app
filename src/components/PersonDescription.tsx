import * as React from 'react';

import { connect } from 'react-redux';

import {getFilmsByQuery} from '../actions/films';

import {urlParams} from './../models/common.models'; 

import * as s from './scss/FilmDescripiton.scss';

import {FullFilm, Film} from '../models/film.model';
import {Person, FullPerson} from '../models/person.model';
import {ReduxStore} from './../models/redux.model'; 
import {SETTINGS} from './../settings';

interface PersonProps {
  currentFilm?: FullPerson;
  getFilmsByQuery?: any;
  match?:any
}



export class PersonDescription extends React.PureComponent <PersonProps, any> {
    componentWillMount() {
      this.getItems(this.props.match.params.id)
    }
    componentWillReceiveProps(nextProps:any){
      if(this.props.match.params.id != nextProps.match.params.id) {
        this.getItems(nextProps.match.params.id)
      }
    }
    getItems(id:string) {
      
      let params:urlParams = {
        type: "person",
        query: id
      }
      this.props.getFilmsByQuery(params);
    }
    render() {

      const personData = this.props.currentFilm;
      
        return (<article className={s.filmContainer} key={this.props.match.params.id}>
          <div className={s.imgWrap}>
            <img src={SETTINGS.imgUrl + personData.profile_path} alt={personData.name}/>
          </div>
          <div className={s.filmDescription}>
            <h1>{personData.name} <span>{(Math.round(personData.popularity * 10)/10)}</span></h1>
            <p className={s.filmSummary}>{personData.biography}</p>
          </div>
        </article>)
    }
}

export default connect<any, any, any>(
  (state: ReduxStore) => ({
    currentFilm: state.films.currentFilm
  }),
  (dispatch: any) => ({
    getFilmsByQuery: (query:urlParams)=> {
      dispatch({type: 'GET_FILM', payload: {dispatchType: 'GET_FILM', urlParams: query}});
    }
   })
)(PersonDescription);