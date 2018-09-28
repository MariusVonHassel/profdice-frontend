import { SET_ATTACKERRACE, SET_ATTACKERUNIT, SET_ATTACKERUNIT_ARRAY, SET_ATTACKER_SAVE_UNITS, FETCH_ATTACKER_UNITS } from '../actions/types';

const initialState = {
    attackerRace: [],
    attackerUnit: [],
    attackerUnitArray: [],
    attackerSaveUnits: [],
    fetchAttackerUnits: {}
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
        default:
            return state;
    }

}