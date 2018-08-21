import { SET_ATTACKERRACE, SET_ATTACKERUNIT } from "./types";

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