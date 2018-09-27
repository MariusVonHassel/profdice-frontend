import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';
import pageTypeReducer from './pageTypeReducer';
import attackerReducer from './attackerReducer';
import defenderReducer from './defenderReducer';
import forcesReducer from './forcesReducer';
import allUnitsReducer from './allUnitsReducer';
import unitStatsReducer from './unitStatsReducer';

export default combineReducers({
    pageTypeReducer,
    attackerReducer,
    defenderReducer,
    forcesReducer,
    unitStatsReducer,
    allUnitsReducer,
    i18nState,
});