import {
    SET_ATTACKERRACE,
    SET_ATTACKERUNIT,
    SET_ATTACKERUNIT_ARRAY,
    SET_ATTACKER_SAVE_UNITS,
    FETCH_ATTACKER_UNITS,
    FETCH_ATTACKER_UNIT_STATS,
    SET_ATTACKER_STATS_COLLECTION,
    CLEAR_ATTACKER_STATS_COLLECTION
} from './types';

export function setAttackerRace(value) {
    return {
        type: SET_ATTACKERRACE,
        payload: {
            value
        }
    }
}

export function setAttackerUnit(value) {

    return {
        type: SET_ATTACKERUNIT,
        payload: {
            value
        }
    }
}

export function setAttackerUnitArray(value) {
    return {
        type: SET_ATTACKERUNIT_ARRAY,
        payload: {
            value
        }
    }
}

export function setAttackerSaveUnits(value) {
    return {
        type: SET_ATTACKER_SAVE_UNITS,
        payload: {
            value
        }
    }
}

export function setAttackerStatsCollection(value, prevState = []) {

    prevState.push(value);

    return {
        type: SET_ATTACKER_STATS_COLLECTION,
        payload: {
            value: prevState
        }
    }
}

export function clearAttackerStatsCollection() {
    return {
        type: CLEAR_ATTACKER_STATS_COLLECTION,
        payload: {
            value: []
        }
    }
}

export const fetchAttackerUnits = (race) => dispatch => {

    fetch('http://217.160.28.212:8000/api/getAllUnits-' + race)
        .then(res => res.json(),
            error => console.log('There has been a problem with your fetch operation '+ error))
        .then(fetchAttackerUnits =>
            dispatch({
                type: FETCH_ATTACKER_UNITS,
                payload: fetchAttackerUnits
            })
        );
};

export const fetchAttackerStats = (race, unitName) => dispatch => {

    fetch('http://217.160.28.212:8000/api/getUnit-' + race + '-' + unitName)
        .then(res => res.json(),
            error => console.log('There has been a problem with your fetch operation '+ error))
        .then(fetchAttackerStats =>
            dispatch({
                type: FETCH_ATTACKER_UNIT_STATS,
                payload: fetchAttackerStats
            })
        );

};
