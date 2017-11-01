import * as React from 'react';

import { connect } from 'react-redux';

import {getFilmsByQuery} from '../actions/films';

import {urlParams} from './../models/common.models'; 

import * as s from './scss/FilmDescripiton.scss';

import {FullFilm, Film} from '../models/film.model';
import {ReduxStore} from './../models/redux.model';

import {SETTINGS} from './../settings';

interface FilmProps {
  currentFilm?: FullFilm;
  getFilmsByQuery?: any;
  match?:any
}

export class FilmDescription extends React.PureComponent <FilmProps, any> {
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
        type: 'movie',
        query: id
      }
      this.props.getFilmsByQuery(params);
    }
    render() {

      const filmData = this.props.currentFilm;
      
        return (<article className={s.filmContainer} key={this.props.match.params.id}>
          <div className={s.imgWrap}>
            <img src={SETTINGS.imgUrl + filmData.poster_path} alt={filmData.original_title}/>
          </div>
          <div className={s.filmDescription}>
            <h1>{filmData.title} <span>{(Math.round(filmData.popularity * 10)/10)}</span></h1>
            <ul className={s.fimInfo}>
              <li>{filmData.release_date}</li>
            </ul>
            <p className={s.filmSummary}>{filmData.overview}</p>
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
)(FilmDescription);