import { FETCH_ALL_UNITS} from './types';

export const fetchAllUnits  = (race, currentState) => dispatch => {

    fetch('http://217.160.28.212:8000/api/getAllUnits-' + race)
        .then(res => res.json(),
            error => console.log('There has been a problem with your fetch operation '+ error))
        .then(allUnits =>
            dispatch({
                type: FETCH_ALL_UNITS,
                payload:  allUnits,
                currentState
            })
        );
};