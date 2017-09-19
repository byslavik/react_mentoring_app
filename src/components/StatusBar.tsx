import * as React from 'react';
import * as s from './StatusBar.scss';

import * as buttons from '../scss/buttons.scss';
import * as utils from '../scss/utilities.scss';

interface StatusBarState {
}
interface StatusBarProps {
  status: Object;
  options: Object;
}

export class StatusBar extends React.Component<StatusBarProps, StatusBarState> {
    constructor(props:StatusBarProps){
        super(props);
    }

    render() {
        return (<div className={s.statusBarWrapper}>
            <div className={s.statusBar}>
                <div className={s.status}>{this.props.status}</div>
                <div className={s.statusOptions}>{this.props.options}</div>
            </div>
        </div>);
    }
}