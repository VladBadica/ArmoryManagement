import {
    AMMUNITIONS_FAIL,
    AMMUNITIONS_SUCCESS,
    BULLETS_DETAILS_SUCCESS,
    BULLETS_DETAILS_FAIL
} from '../constants';

import {getAmmunitionsQuery, getBulletsMakeQuery} from '../data/fauna-queries';

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

        const data = await getBulletsMakeQuery();
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