import {
    AMMUNITIONS_SUCCESS,
    AMMUNITIONS_FAIL,
    BULLETS_DETAILS_SUCCESS,
    BULLETS_DETAILS_FAIL
} from '../constants';

export const ammunitionsReducer = (state = {ammunitions: []}, action) =>{
    switch(action.type){
        case AMMUNITIONS_SUCCESS:
            return { loading: false, ammunitions: action.payload };
        case AMMUNITIONS_FAIL:
            return { loading: false, ammunitions: action.payload };
        case BULLETS_DETAILS_SUCCESS:
            return { loading: false, bullets_details: action.payload };
            case BULLETS_DETAILS_FAIL:
            return { loading: false, bullets_details: action.payload };
        default:
            return state;
    }
}