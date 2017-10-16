import * as React from 'react';
import * as s from './scss/Header.scss';

interface HeaderProps {
}

export class Header extends React.Component<HeaderProps, any> {
  
    render() {
        return (<div className={s.headerWrapper}>
            <header className={s.header}>
                {this.props.children}
            </header>
        </div>);
    }
}