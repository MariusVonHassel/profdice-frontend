import { FETCH_FORCES } from './types';

export const fetchForces = () => dispatch => {
    fetch('http://217.160.28.212:8000/api/forces')
         .then(res => res.json())
         .then(forces =>
             dispatch({
                 type: FETCH_FORCES,
                 payload: forces
             })
     );
};
