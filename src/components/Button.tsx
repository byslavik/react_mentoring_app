import * as React from 'react';

import * as buttons from '../scss/buttons.scss';


interface ButtonState {
}
interface ButtonProps {
  action: any;
  isActive?: boolean;
  style?: string;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
      const style = this.props.style ? this.props.style : (buttons.buttonWhite + ' ' + buttons.small);

      return (<button className={style + (this.props.isActive ? ' ' + buttons.buttonWhiteActive : '')} onClick={this.props.action} >{this.props.children}</button>)
    }
}
