import { SET_DEFENDERRACE, SET_DEFENDERUNIT, SET_DEFENDERUNIT_ARRAY } from './types';

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

export function setDefenderUnitArray(value) {
    return {
        type: SET_DEFENDERUNIT_ARRAY,
        payload: {
            value,
        }
    }
}
