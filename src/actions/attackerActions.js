import { SET_ATTACKERRACE, SET_ATTACKERUNIT, SET_ATTACKERUNIT_ARRAY } from './types';

export function setAttackerRace(value) {
    return {
        type: SET_ATTACKERRACE,
        payload: {
            value,
        }
    }
}

export function setAttackerUnit(value) {

    return {
        type: SET_ATTACKERUNIT,
        payload: {
            value,
        }
    }
}

export function setAttackerUnitArray(value) {
    return {
        type: SET_ATTACKERUNIT_ARRAY,
        payload: {
            value,
        }
    }
}
