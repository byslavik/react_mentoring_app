import * as React from 'react';

import * as s from './scss/Header.scss';

export class HeaderTitle extends React.Component {

    render() {
        return (<h1 className={s.siteHeader}>Find your movie</h1>)
    }
}
