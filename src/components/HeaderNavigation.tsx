import * as React from 'react';

import { Link } from 'react-router-dom';
import * as buttons from '../scss/buttons.scss';

export class HeaderNavigation extends React.Component {
  render() {
    return (
      <nav>
          <li><Link to="/search/" className={buttons.buttonWhite}>Search</Link></li>
      </nav>
      );
  }
}