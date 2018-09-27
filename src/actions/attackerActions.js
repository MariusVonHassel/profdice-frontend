import {
    SET_ATTACKERRACE,
    SET_ATTACKERUNIT,
    SET_ATTACKERUNIT_ARRAY,
    FETCH_ATTACKER_UNITS
} from './types';

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

export const fetchAttackerUnits = (race) => dispatch => {

    fetch('http://217.160.28.212:8000/api/getAllUnits-' + race)
        .then(res => res.json(),
            error => console.log('There has been a problem with your fetch operation '+ error))
        .then(fetchedAttackerUnits =>
            dispatch({
                type: FETCH_ATTACKER_UNITS,
                payload: fetchedAttackerUnits
            })
        );
};

