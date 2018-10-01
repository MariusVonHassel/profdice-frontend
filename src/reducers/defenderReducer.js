import {
    SET_DEFENDERUNIT_ARRAY,
    SET_DEFENDERRACE,
    SET_DEFENDERUNIT,
    SET_DEFENDER_SAVE_UNITS,
    FETCH_DEFENDER_UNITS,
    FETCH_DEFENDER_UNIT_STATS
} from '../actions/types';

const initialState = {
    defenderRace: {},
    defenderUnit: {},
    defenderUnitArray: [],
    defenderSaveUnits: [],
    fetchDefenderUnits: {},
    fetchDefenderStats: {}
};

export default function (state=initialState, { type, payload }) {

    switch (type) {
        case SET_DEFENDERRACE: {
            return Object.assign({}, state, {
                defenderRace: payload.value
            });
        }
        case SET_DEFENDERUNIT: {
            return Object.assign({}, state, {
                defenderUnit: payload.value
            });
        }
        case SET_DEFENDERUNIT_ARRAY: {
            return Object.assign({}, state, {
                defenderUnitArray: payload.value
            });
        }
        case SET_DEFENDER_SAVE_UNITS: {
            return Object.assign({}, state, {
                defenderSaveUnits: payload.value
            });
        }
        case FETCH_DEFENDER_UNITS: {
            return Object.assign({}, state, {
                fetchDefenderUnits: payload
            });
        }
        case FETCH_DEFENDER_UNIT_STATS: {
            return Object.assign({}, state, {
                fetchDefenderStats: payload
            });
        }
        default:
            return state;
    }

}