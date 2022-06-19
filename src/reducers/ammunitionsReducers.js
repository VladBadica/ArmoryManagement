import {
    AMMUNITIONS_REQUEST,
    AMMUNITIONS_SUCCESS,
    AMMUNITIONS_FAIL
} from '../constants';

export const ammunitionsReducer = (state = {ammunitions: []}, action) =>{
    switch(action.type){
        case AMMUNITIONS_REQUEST:
            return { loading: true, ammunitions: [] };
        case AMMUNITIONS_SUCCESS:
            return { loading: false, ammunitions: action.payload };
        case AMMUNITIONS_FAIL:
            return { loading: false, ammunitions: action.payload };
        default:
            return state;
    }
}