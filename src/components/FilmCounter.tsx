import * as React from 'react';


export class FilmCounter extends React.Component<any> {

    render() {
      let count = this.props.count;

      let text = count == 1 ? 'movie': 'movies';
      
      return (<span>{count} {text} found</span>)
    }
}
