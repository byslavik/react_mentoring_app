import * as React from 'react';
import * as s from './StatusBar.css';

import * as buttons from '../css/buttons.css';
import * as utils from '../css/utilities.css';

export class StatusBar extends React.Component<any, any> {
    
    constructor(props: any){
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