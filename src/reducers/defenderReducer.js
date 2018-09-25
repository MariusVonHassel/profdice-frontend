import { SET_DEFENDERUNIT_ARRAY, SET_DEFENDERRACE, SET_DEFENDERUNIT} from '../actions/types';

const initialState = {
    defenderRace: {},
    defenderUnit: {},
    defenderUnitArray: []
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
        default:
            return state;
    }

}