import { SET_DEFENDERRACE, SET_DEFENDERUNIT } from './types';

export function setDefenderRace(value) {
    return {
        type: SET_DEFENDERRACE,
        payload: {
            value,
        }
    }
}

export function setDefenderUnit(value) {
    return {
        type: SET_DEFENDERUNIT,
        payload: {
            value,
        }
    }
}