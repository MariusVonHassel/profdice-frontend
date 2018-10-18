import { SET_ATTACKER_CHOOSED_DATA, SET_DEFENDER_CHOOSED_DATA, CLEAR_ATTACKER_CHOOSED_DATA, CLEAR_DEFENDER_CHOOSED_DATA } from '../actions/types';

const initalState = {
    choosedAttackerData: [],
    choosedDefenderData: {}
};

export default function (state = initalState, { type, payload }) {

    switch (type) {
        case CLEAR_ATTACKER_CHOOSED_DATA:
        case SET_ATTACKER_CHOOSED_DATA: {
            return Object.assign({}, state, {
                choosedAttackerData: payload.value
            });
        }
        case CLEAR_DEFENDER_CHOOSED_DATA:
        case SET_DEFENDER_CHOOSED_DATA: {
            return Object.assign({}, state, {
                choosedDefenderData: payload.value
            });
        }
        default:
            return state;
    }
}