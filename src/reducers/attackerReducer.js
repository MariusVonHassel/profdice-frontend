import { SET_ATTACKERRACE, SET_ATTACKERUNIT } from "../actions/types";

const initialState = {
    attackerRace: [],
    attackerUnit: []
};

export default function attackerReducer(state=initialState, { type, payload }) {

    switch (type) {
        case SET_ATTACKERRACE: {
            return Object.assign({}, state, {
                attackerRace: payload.value.value
            });
        }
        case SET_ATTACKERUNIT: {
            return Object.assign({}, state, {
                attackerUnit: payload.value.value
            });
        }
        default:
            return state;
    }

}