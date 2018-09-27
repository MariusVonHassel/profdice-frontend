import { SET_ATTACKER_UNIT_STATS, SET_DEFENDER_UNIT_STATS, FETCHED_UNIT_STATS, FETCHED_UNIT_STATS_COLLECTION } from '../actions/types';

const initialState = {
    attackerUnitStats: [],
    defenderUnitStats: {},
    fetchedUnitStats: {},
    fetchedUnitStatsCollection: []
};

export default function (state = initialState, { type, payload }) {

    switch(type) {

        case SET_ATTACKER_UNIT_STATS:  {
            return Object.assign({}, state, {
                attackerUnitStats: payload
            });
        }
        case SET_DEFENDER_UNIT_STATS: {
            return Object.assign({}, state, {
                defenderUnitStats: payload
            });
        }
        case FETCHED_UNIT_STATS: {
            return Object.assign({}, state, {
                fetchedUnitStats: payload
            });
        }
        case FETCHED_UNIT_STATS_COLLECTION: {
            return Object.assign({}, state, {
                fetchedUnitStatsCollection: payload
            })
        }
        default:
            return state;

    }



}