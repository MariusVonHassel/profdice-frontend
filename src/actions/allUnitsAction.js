import { FETCH_ALL_UNITS} from './types';

export const fetchAllUnits  = (race) => dispatch => {
    fetch('http://217.160.28.212:8000/api/' + race)
        .then(res => res.json())
        .then(allUnits =>
            dispatch({
                type: FETCH_ALL_UNITS,
                payload: allUnits
            })
        );
};