import {
    AMMUNITIONS,
    BULLETS_DETAILS,
    PRIMERS_DETAILS,
    POWDERS_DETAILS
} from '../constants';

export const ammunitionsReducer = (state = {ammunitions: []}, action) =>{
    switch(action.type){
        case AMMUNITIONS:
            return { ammunitions: action.payload };
       
        default:
            return state;
    }
}

export const bulletsDetailsReducer = (state = {bullets_details: []}, action) =>{
    switch(action.type){       
        case BULLETS_DETAILS:
            return { bullets_details: action.payload };        
        default:
            return state;
    }
}

export const primersDetailsReducer = (state = {primers_details: []}, action) =>{
    switch(action.type){       
        case PRIMERS_DETAILS:
            return {primers_details: action.payload };
        
        default:
            return state;
    }
}

export const powdersDetailsReducer = (state = {powders_details: []}, action) =>{
    switch(action.type){       
        case POWDERS_DETAILS:
            return {powders_details: action.payload };
        
        default:
            return state;
    }
}