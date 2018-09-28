import { SET_ATTACKERRACE, SET_ATTACKERUNIT, SET_ATTACKERUNIT_ARRAY, SET_ATTACKER_SAVE_UNITS, FETCH_ATTACKER_UNITS, FETCH_ATTACKER_UNIT_STATS } from '../actions/types';

const initialState = {
    attackerRace: [],
    attackerUnit: [],
    attackerUnitArray: [],
    attackerSaveUnits: [],
    fetchAttackerUnits: {},
    fetchAttackerStats: {}
};

export default function (state=initialState, { type, payload }) {

    switch (type) {
        case SET_ATTACKERRACE: {
            return Object.assign({}, state, {
                attackerRace: payload.value
            });
        }
        case SET_ATTACKERUNIT: {
            return Object.assign({}, state, {
                attackerUnit: payload.value
            });
        }
        case SET_ATTACKERUNIT_ARRAY: {
            return Object.assign({}, state, {
                attackerUnitArray: payload.value
            });
        }
        case SET_ATTACKER_SAVE_UNITS: {
            return Object.assign({}, state, {
                attackerSaveUnits: payload.value
            });
        }
        case FETCH_ATTACKER_UNITS: {
            return Object.assign({}, state, {
                fetchAttackerUnits: payload
            });
        }
        case FETCH_ATTACKER_UNIT_STATS: {
            return Object.assign({}, state, {
                fetchAttackerStats: payload
            });
        }
        default:
            return state;
    }

}