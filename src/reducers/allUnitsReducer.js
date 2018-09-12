import { FETCH_ALL_UNITS } from '../actions/types';

const initialState = {
    currentState: []
};

export default function (state = initialState, { type, payload, currentState }) {

    switch (type) {
        case FETCH_ALL_UNITS:

            return {
                    payload,
                    currentState
            };
        default:
            return state;
    }

}