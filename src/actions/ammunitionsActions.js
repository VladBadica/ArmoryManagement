import {
    AMMUNITIONS_FAIL,
    AMMUNITIONS_REQUEST,
    AMMUNITIONS_SUCCESS
} from '../constants';
import {getAmmunitionsQuery} from '../data/fauna-queries';

export const getAmmunitions = () => async (dispatch) =>{
    try{
        dispatch({type: AMMUNITIONS_REQUEST});

        const {data} = await getAmmunitionsQuery();

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