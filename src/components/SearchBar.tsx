import * as React from 'react';
import * as s from './scss/SearchBar.scss';

import {Button} from './Button';
import { connect } from 'react-redux';

import {getFilmsByQuery} from '../actions/films';

import {searchMethod, urlParams} from './../models/common.models'; 
import {ReduxStore} from './../models/redux.model'; 

import * as buttons from '../scss/buttons.scss';
import * as utils from '../scss/utilities.scss';

interface SearchBarState {
  searchWord: string;
  method: searchMethod;
}
interface SearchBarProps {
  match: any;
  getFilmsByQuery: any;
  changeSearchMethod: any;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props:SearchBarProps) {
    super(props);

    
    this.state = {
      searchWord: this.props.match.params.query || '',
      method: 'movie'
    }
    
  }
  inputHandler = (el:any) => {
    this.setState({searchWord: el.target.value})
  }
  changeMethod = (method: searchMethod) => {
   this.setState({method: method})
  }
  componentDidMount() {
    if(!this.state.searchWord){
      return;
    }
    let urlParams:urlParams = {
      type: 'search',
      method: this.state.method,
      query: this.state.searchWord
    };
    
    this.props.getFilmsByQuery(urlParams);
  }
  makeSearch = ()=> {
    history.pushState({},'','/search/' + this.state.searchWord); 
    
    let urlParams:urlParams = {
      type: 'search',
      method: this.state.method,
      query: this.state.searchWord
    };
    
    this.props.changeSearchMethod(this.state.method);
    this.props.getFilmsByQuery(urlParams);   
  }
  buttonSearch = (event:any)=> {
    if(event.key == 'Enter'){
      this.makeSearch();
    }
  }
  render() {
      return (<div className={s.searchBar}>
              <h2>Find your movie</h2>
              <input type="text" value={this.state.searchWord} onChange={this.inputHandler} className={s.searchBarField} onKeyPress={this.buttonSearch}/>
              <div className={s.searchBarOptions}>
                  Search By:

                  <ul>
                      <li>
                        <Button isActive={this.state.method == 'movie'} action={this.changeMethod.bind(this,'movie')} >Movie</Button>
                      </li>
                      <li>
                        <Button isActive={this.state.method == 'person'} action={this.changeMethod.bind(this,'person')} >Person</Button>
                      </li>
                  </ul>
              </div>
              <Button action={this.makeSearch} style={buttons.search}>Search</Button>
      </div>);
  }
}
function changeMethod(field:searchMethod) {
  return {
    type: "CHANGE_METHOD",
    payload: field
  }
}
export default connect<any,any,any>(
  (state:ReduxStore) => ({
    method: state.searchMethod
  }),
  (dispatch:any) => ({
    getFilmsByQuery: (urlParams:urlParams)=> {
      dispatch(getFilmsByQuery(urlParams, 'FETCH_FILMS'));
    },
    changeSearchMethod: (method: searchMethod)=>{
      dispatch(changeMethod(method));
    }
   })
)(SearchBar);