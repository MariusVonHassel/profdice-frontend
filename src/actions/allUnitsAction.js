import { FETCH_ALL_UNITS, FETCHED_UNTIS } from './types';

export const fetchAllUnits = (race) => dispatch => {

    fetch('http://217.160.28.212:8000/api/getAllUnits-' + race)
        .then(res => res.json(),
            error => console.log('There has been a problem with your fetch operation '+ error))
        .then(allUnits =>
            dispatch({
                type: FETCH_ALL_UNITS,
                payload: allUnits
            })
        );
};

export function setFetchedUnits(units) {

    return {
        type: FETCHED_UNTIS,
        payload: {
            fetched: units,
        }
    }
}