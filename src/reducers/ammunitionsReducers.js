import {
    AMMUNITIONS_SUCCESS,
    AMMUNITIONS_FAIL,
    BULLETS_DETAILS_SUCCESS,
    BULLETS_DETAILS_FAIL,
    PRIMERS_DETAILS_SUCCESS,
    PRIMERS_DETAILS_FAIL
} from '../constants';

export const ammunitionsReducer = (state = {ammunitions: []}, action) =>{
    switch(action.type){
        case AMMUNITIONS_SUCCESS:
            return { loading: false, ammunitions: action.payload };
        case AMMUNITIONS_FAIL:
            return { loading: false, ammunitions: action.payload };
        default:
            return state;
    }
}

export const bulletsDetailsReducer = (state = {bullets_details: []}, action) =>{
    switch(action.type){       
        case BULLETS_DETAILS_SUCCESS:
            return { loading: false, bullets_details: action.payload };
        case BULLETS_DETAILS_FAIL:
            return { loading: false, bullets_details: action.payload };
        default:
            return state;
    }
}

export const primersDetailsReducer = (state = {primers_details: []}, action) =>{
    switch(action.type){       
        case PRIMERS_DETAILS_SUCCESS:
            return { loading: false, primers_details: action.payload };
        case PRIMERS_DETAILS_FAIL:
            return { loading: false, primers_details: action.payload };
        default:
            return state;
    }
}