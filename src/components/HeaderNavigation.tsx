import * as React from 'react';
import * as buttons from '../scss/buttons.scss';

export class HeaderNavigation extends React.Component {
  render() {
    return (
      <nav>
          <li><button className={buttons.buttonWhite}>Search</button></li>
      </nav>
      );
  }
}