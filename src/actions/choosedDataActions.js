import {
    SET_ATTACKER_CHOOSED_DATA,
    CLEAR_ATTACKER_UNIT_STATS,
    SET_DEFENDER_CHOOSED_DATA,
    CLEAR_DEFEDER_UNIT_STATS
} from './types';

export function setAttackerChoosedData(value, prevState = []) {

    prevState.push(value);

    return {
        type: SET_ATTACKER_CHOOSED_DATA,
        payload: {
            value: prevState
        }
    }

}

export function clearAttackerChoosedData() {

    return {
        type: CLEAR_ATTACKER_UNIT_STATS,
        payload: {
            value: []
        }
    }

}
export function setDefenderChoosedData(value) {

    return {
        type: SET_DEFENDER_CHOOSED_DATA,
        payload: {
            value
        }
    }

}