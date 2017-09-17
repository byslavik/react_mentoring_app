import * as React from 'react';
import {Header} from './Header';
import {StatusBar} from './StatusBar';

export default class App extends React.Component {

    render() {
        return (<div>
            <Header/>
            <StatusBar/>
        </div>)
    }
}
