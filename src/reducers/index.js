import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';
import pageTypeReducer from './pageTypeReducer';
import attackerReducer from './attackerReducer';
import defenderReducer from './defenderReducer';
import forcesReducer from './forcesReducer';

export default combineReducers({
    pageTypeReducer,
    attackerReducer,
    defenderReducer,
    forcesReducer,
    i18nState,
});