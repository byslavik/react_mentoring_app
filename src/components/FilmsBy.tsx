import * as React from 'react';


interface FilmsByProps {
  field: string;
}

export class FilmsBy extends React.Component<FilmsByProps, any> {
    render() {      
      return (<span>Films by {this.props.field}</span>)
    }
}
