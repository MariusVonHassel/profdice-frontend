import { FETCH_ALL_UNITS } from '../actions/types';

const initialState = {
    allUnits: []
};

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case FETCH_ALL_UNITS:
            return {
                payload
            };
        default:
            return state;
    }

}