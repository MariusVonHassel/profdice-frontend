import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from "redux-logger";
import promise from "redux-promise-middleware";
import reducer from './reducers';
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

let store;

const middleware = applyMiddleware(routerMiddleware(history), promise(), thunk, logger);

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    store = createStore(
        connectRouter(history)(reducer),
        compose (
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

} else {
    store = createStore(
        connectRouter(history)(reducer),
        compose (
            middleware
        )
    );
}

export default store;