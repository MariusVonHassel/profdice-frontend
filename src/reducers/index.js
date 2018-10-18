import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';
import pageTypeReducer from './pageTypeReducer';
import attackerReducer from './attackerReducer';
import defenderReducer from './defenderReducer';
import forcesReducer from './forcesReducer';
import choosedDataReducer from './choosedDataReducer';

export default combineReducers({
    pageTypeReducer,
    attackerReducer,
    defenderReducer,
    forcesReducer,
    choosedDataReducer,
    i18nState,
});