import { FETCH_FORCES } from '../actions/types';

const initialState = {
    forces: []
};

export default function forcesReducer(state = initialState, { type, payload }) {

    switch (type) {
        case FETCH_FORCES:
            return {
                payload
            };
        default:
            return state;
    }

}