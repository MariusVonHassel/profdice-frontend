import { SET_ATTACKER_UNIT_STATS, SET_DEFENDER_UNIT_STATS, FETCHED_UNIT_STATS, FETCHED_UNIT_STATS_COLLECTION } from './types';

export const fetchUnitStats = (race, unitName) => dispatch => {

    fetch('http://217.160.28.212:8000/api/getUnit-' + race + '-' + unitName)
        .then(res => res.json(),
            error => console.log('There has been a problem with your fetch operation '+ error))
        .then(unitStats =>
            dispatch({
                type: FETCHED_UNIT_STATS,
                payload: unitStats
            })
        );

};

export function setAttackerUnitStats(unitCollection) {

    return {
        type: SET_ATTACKER_UNIT_STATS,
        payload: {
            unitCollection
        }
    }

}

export function setDefenderUnitStats(unit) {

    return {
        type: SET_DEFENDER_UNIT_STATS,
        payload: {
            unit
        }
    }

}

export function setFetchedUnitStatsCollection(unitCollection) {

    return {
        type: FETCHED_UNIT_STATS_COLLECTION,
        payload: {
            unitCollection
        }
    }

}