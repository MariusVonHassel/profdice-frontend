import { FETCH_FORCES, SET_FORCES_ARRAY } from '../actions/types';

const initialState = {
    forces: [],
    forcesArray: []
};

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case FETCH_FORCES:
            return {
                forces: payload
            };
        case SET_FORCES_ARRAY:
            return {
                forcesArray: payload.forcesArray
            };
        default:
            return state;
    }

}
