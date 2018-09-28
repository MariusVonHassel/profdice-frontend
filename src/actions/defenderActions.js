import {
    SET_DEFENDERRACE,
    SET_DEFENDERUNIT,
    SET_DEFENDER_SAVE_UNITS,
    SET_DEFENDERUNIT_ARRAY,
    FETCH_DEFENDER_UNITS
} from './types';

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

export function setDefenderSaveUnits(value) {
    return {
        type: SET_DEFENDER_SAVE_UNITS,
        payload: {
            value,
        }
    }
}

export const fetchDefenderUnits = (race) => dispatch => {

    fetch('http://217.160.28.212:8000/api/getAllUnits-' + race)
        .then(res => res.json(),
            error => console.log('There has been a problem with your fetch operation '+ error))
        .then(fetchDefenderUnits =>
            dispatch({
                type: FETCH_DEFENDER_UNITS,
                payload: fetchDefenderUnits
            })
        );
};

