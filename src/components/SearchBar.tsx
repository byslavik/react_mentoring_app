import * as React from 'react';
import * as s from './scss/SearchBar.scss';

import {Button} from './Button';

import * as buttons from '../scss/buttons.scss';
import * as utils from '../scss/utilities.scss';

interface SearchBarState {
  searchWord: string;
  method: string;
}
interface SearchBarProps {
  match: any;
}


export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props:any) {
    super(props);
    
    this.state = {
      searchWord: '',
      method: 'title'
    }
  }
  inputHandler = (el:any) => {
    this.setState({searchWord: el.target.value})
  }
  changeMethod = (method: string) => {
    this.setState({method: method})
  }
  componentDidMount() {
    this.setState({searchWord: this.props.match.params.query});
  }
  render() {
      return (<div className={s.searchBar}>
              <h2>Find your movie</h2>
              <input type="text" value={this.state.searchWord} onChange={this.inputHandler} className={s.searchBarField}/>
              <div className={s.searchBarOptions}>
                  Search By:

                  <ul>
                      <li>
                        <Button isActive={this.state.method == 'title'} action={this.changeMethod.bind(this, 'title')} >Title</Button>
                      </li>
                      <li>
                        <Button isActive={this.state.method == 'director'} action={this.changeMethod.bind(this, 'director')} >Director</Button>
                      </li>
                  </ul>
              </div>
              <Button action={this.changeMethod.bind(this, 'title')} style={buttons.search}>Search</Button>
      </div>);
  }
}