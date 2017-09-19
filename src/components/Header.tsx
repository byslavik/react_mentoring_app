import * as React from 'react';
import * as s from './Header.scss';

interface HeaderState {
}
interface HeaderProps {
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  
    render() {
        return (<div className={s.headerWrapper}>
            <header className={s.header}>
                {this.props.children}
            </header>
        </div>);
    }
}