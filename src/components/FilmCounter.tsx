import * as React from 'react';


interface FilmCounterProps {
  count: number;
}

export class FilmCounter extends React.Component<FilmCounterProps, any> {

    render() {
      let count = this.props.count;

      let text = count == 1 ? 'movie': 'movies';
      
      return (<span>{count} {text} found</span>)
    }
}
