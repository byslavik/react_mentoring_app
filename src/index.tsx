import * as React from 'react';
import { AppContainer } from 'react-hot-loader';
import * as ReactDom from 'react-dom';

import App from './components/App';

const render = () => {
    ReactDom.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./components/App', render);
}