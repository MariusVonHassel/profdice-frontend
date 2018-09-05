import { SET_PAGETYPE } from '../actions/types';

const initialState = {
    pageType: 'home'
};

export default function pageTypeReducer(state=initialState, { type, payload }) {

    switch (type) {
        case SET_PAGETYPE: {
            return payload;
        }
        default:
            return state;
    }

}