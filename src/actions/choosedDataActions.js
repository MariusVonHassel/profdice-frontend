import {
    SET_ATTACKER_CHOOSED_DATA,
    CLEAR_ATTACKER_CHOOSED_DATA,
    SET_DEFENDER_CHOOSED_DATA,
    CLEAR_DEFENDER_CHOOSED_DATA
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
        type: CLEAR_ATTACKER_CHOOSED_DATA,
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

export function clearDefenderChoosedData() {

    return {
        type: CLEAR_DEFENDER_CHOOSED_DATA,
        payload: {
            value: []
        }
    }

}