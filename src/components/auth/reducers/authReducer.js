import { types } from '../types/types';

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.sendText:
            return {
                text: action.payload.text
            }
    
        default:
            return state;
    }

}