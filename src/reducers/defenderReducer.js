import { SET_DEFENDERRACE, SET_DEFENDERUNIT } from '../actions/types';

const initialState = {

    defenderRace: [],
    defenderUnit: []
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
        default:
            return state;
    }

}