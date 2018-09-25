import { FETCH_FORCES, SET_FORCES_ARRAY } from '../actions/types';

const initialState = {
    forces: [],
    forcesArray: []
};

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case FETCH_FORCES:
            return Object.assign({}, state, {
                forces: payload
            });
        case SET_FORCES_ARRAY:
            return Object.assign({}, state, {
                forcesArray: payload.forcesArray
            });
        default:
            return state;
    }

}
