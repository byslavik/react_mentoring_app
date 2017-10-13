import * as React from 'react';

import { connect } from 'react-redux';

import {getFilmsByQuery} from '../actions/films';

import {urlParams} from './../models/common.models'; 

import * as s from './scss/FilmDescripiton.scss';

import {FullFilm} from '../models/film.model';
import {SETTINGS} from './../settings';
interface FilmState {

}
interface FilmProps {
  currentFilm?: FullFilm;
  getFilmsByQuery?: any;
  match?:any
}

// 

interface StateToProps extends FilmProps {
}



class FilmDescription extends React.PureComponent <FilmProps, FilmState> {
    componentWillMount() {
      let params:urlParams = {
        type:'movie',
        query: this.props.match.params.id
      }
      this.props.getFilmsByQuery(params);
    }
    render() {

      const filmData = this.props.currentFilm;
      console.log(filmData);
        return (<article className={s.filmContainer}>
          <div className={s.imgWrap}>
            <img src={SETTINGS.imgUrl + filmData.poster_path} alt={filmData.original_title}/>
          </div>
          <div className={s.filmDescription}>
            <h1>{filmData.title} <span>{(Math.round(filmData.popularity * 100)/100)}</span></h1>
            <ul className={s.fimInfo}>
              <li>{filmData.release_date}</li>
            </ul>
            <p className={s.filmSummary}>{filmData.overview}</p>
          </div>
        </article>)
    }
}

export default connect<FilmProps, any, any>(
  (state: FilmProps) => ({
    currentFilm: state.currentFilm
  }),
  (dispatch: any) => ({
    getFilmsByQuery: (query:urlParams)=> {
      dispatch(getFilmsByQuery(query, 'GET_FILM'));
    }
   })
)(FilmDescription);