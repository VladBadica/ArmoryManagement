import {
    AMMUNITIONS_FAIL,
    AMMUNITIONS_SUCCESS,
    BULLETS_DETAILS_SUCCESS,
    BULLETS_DETAILS_FAIL,
    PRIMERS_DETAILS_SUCCESS,
    PRIMERS_DETAILS_FAIL
} from '../constants';

import {getAmmunitionsQuery, getBulletDetailsQuery, getPrimerDetailsQuery} from '../data/fauna-queries';

export const getAmmunitions = () => async (dispatch) =>{
    try{

        const data = await getAmmunitionsQuery();
        dispatch({
            type: AMMUNITIONS_SUCCESS,
            payload: data,
        })
    }
    catch(err){
        dispatch({
            type: AMMUNITIONS_FAIL,
            payload: err.response.status,
        })
    }
};

export const getBulletsDetails = () => async (dispatch) =>{
    try{

        const data = await getBulletDetailsQuery();
        dispatch({
            type: BULLETS_DETAILS_SUCCESS,
            payload: data,
        })
    }
    catch(err){
        dispatch({
            type: BULLETS_DETAILS_FAIL,
            payload: err.response.status,
        })
    }
};

export const getPrimersDetails = () => async (dispatch) =>{
    try{

        const data = await getPrimerDetailsQuery();
        dispatch({
            type: PRIMERS_DETAILS_SUCCESS,
            payload: data,
        })
    }
    catch(err){
        dispatch({
            type: PRIMERS_DETAILS_FAIL,
            payload: err.response.status,
        })
    }
};