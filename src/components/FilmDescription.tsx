import * as React from 'react';

import { connect } from 'react-redux';

import {getFilmsByTitle} from '../actions/films'

import * as s from './scss/FilmDescripiton.scss';

import {Film} from '../models/film.model';


interface FilmState {
}
interface FilmProps {
  currentFilm?: Film;
  getFilmsByQuery?: any;
  match?:any
}


class FilmDescription extends React.PureComponent <FilmProps, FilmState> {
    shouldComponentUpdate(nextProps: FilmProps) {
        return this.props.currentFilm.show_title !== nextProps.match.params.title;
    }
    componentWillUpdate() {
      this.props.getFilmsByQuery(this.props.match.params.title);
    }
    componentDidMount() {
      this.props.getFilmsByQuery(this.props.match.params.title);
    }
    render() {

      const filmData = this.props.currentFilm;
        return (<article className={s.filmContainer}>
          <div className={s.imgWrap}>
            <img src={filmData.poster} alt={filmData.show_title}/>
          </div>
          <div className={s.filmDescription}>
            <h1>{filmData.show_title} <span>{filmData.rating}</span></h1>
            <p className={s.filmCategory}>{filmData.category}</p>
            <ul className={s.fimInfo}>
              <li>{filmData.release_year}</li>
              <li>{filmData.runtime}</li>
            </ul>
            <p className={s.filmSummary}>{filmData.summary}</p>
            <p className={s.filmAdditional}>
              <span>Director: {filmData.director}</span>  
              <span>Cast: {filmData.show_cast}</span>  
            </p>
          </div>
        </article>)
    }
}

export default connect<any, any, any>(
  (state: any) => ({
    currentFilm: state.currentFilm,
    path: state.routerReducer.location.pathname
  }),
  (dispatch: any) => ({
    getFilmsByQuery: (query:string)=> {
      dispatch(getFilmsByTitle(query, 'GET_FILM'));
    }
   })
)(FilmDescription);