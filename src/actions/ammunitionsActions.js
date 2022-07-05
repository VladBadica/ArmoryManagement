import {
    AMMUNITIONS,
    BULLETS_DETAILS,
    PRIMERS_DETAILS,
    POWDERS_DETAILS,
} from '../constants';

import {getAmmunitionsQuery, getBulletDetailsQuery, getPrimerDetailsQuery, getPowderDetailsQuery, addBulletQuery} from '../data/fauna-queries';

export const getAmmunitions = () => async (dispatch) =>{
    try{
        const data = await getAmmunitionsQuery();
        dispatch({
            type: AMMUNITIONS,
            payload: data,
        })
    }
    catch(err){
        dispatch({
            type: AMMUNITIONS,
            payload: err.response.status,
        })
    }
};

export const getBulletsDetails = () => async (dispatch) =>{
    try{
        const data = await getBulletDetailsQuery();
        dispatch({
            type: BULLETS_DETAILS,
            payload: data,
        })
    }
    catch(err){
        dispatch({
            type: BULLETS_DETAILS,
            payload: err.response.status,
        })
    }
};

export const getPrimersDetails = () => async (dispatch) =>{
    try{
        const data = await getPrimerDetailsQuery();
        dispatch({
            type: PRIMERS_DETAILS,
            payload: data,
        })
    }
    catch(err){
        dispatch({
            type: PRIMERS_DETAILS,
            payload: err.response.status,
        })
    }
};

export const getPowdersDetails = () => async (dispatch) =>{
    try{
        const data = await getPowderDetailsQuery();
        dispatch({
            type: POWDERS_DETAILS,
            payload: data,
        })
    }
    catch(err){
        dispatch({
            type: POWDERS_DETAILS,
            payload: err.response.status,
        })
    }
};
