import * as React from 'react';

interface FilmsByState {
}
interface FilmsByProps {
  field: string;
}

export class FilmsBy extends React.Component<FilmsByProps, FilmsByState> {
    render() {      
      return (<span>Films by {this.props.field}</span>)
    }
}
