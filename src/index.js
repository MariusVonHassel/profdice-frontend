import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { connectRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import "typeface-exo";


import App from './App';
import store from "./store";
import registerServiceWorker from './registerServiceWorker';
import './App.scss';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/react-select/dist/react-select.css';
import '../node_modules/material-icons/iconfont/material-icons.css';
import reducer from "./reducers";

const history = createBrowserHistory();

// ReactDOM.render((
//     <Provider store={store}>
//
//         <ConnectedRouter history={history}>
//
//             <App />
//
//         </ConnectedRouter>
//
//     </Provider>
// ), document.getElementById('root'));

function render(Component) {

    ReactDOM.render(
        <AppContainer>

            <Provider store={store}>

                <Component history={history}/>

            </Provider>

        </AppContainer>
        , document.getElementById('root'));
}

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {render(App)});
}

module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(reducer))
});

registerServiceWorker();