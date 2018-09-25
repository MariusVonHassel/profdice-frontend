import { FETCH_ALL_UNITS, FETCHED_UNTIS } from '../actions/types';

const initialState = {
    allUnits: {},
    fetchedUnits: []
};

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case FETCH_ALL_UNITS:
            return Object.assign({}, state, {
                allUnits: payload
            });
        case FETCHED_UNTIS:
            return Object.assign({}, state, {
                fetchedUnits: payload.fetched
            });
        default:
            return state;
    }

}