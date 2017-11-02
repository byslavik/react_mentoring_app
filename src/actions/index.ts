import actionCreatorFactory from 'redux-typescript-actions';
import {urlParams, searchMethod, sortFields} from './../models/common.models'; 
const actionCreator = actionCreatorFactory();

// Action for getting single film
export const getFilm = actionCreator<{dispatchType: string, urlParams:urlParams}>('GET_FILM');

// Action for getting single film
export const getAllFilms = actionCreator<{dispatchType: string, urlParams:urlParams}>('FETCH_FILMS');

//Change search mentod
export const changeMethod = actionCreator<{params: searchMethod}>('CHANGE_METHOD');
//Change search mentod
export const sortFilms = actionCreator<{params: sortFields}>('SORT_FILMS');
