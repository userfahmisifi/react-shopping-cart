import {TOOGLE_FORM } from "../actions/orderFormActions";

export function orderFormReducer(state=false,action){
         if (action.type===TOOGLE_FORM) {
            return !state
            
         }
        
         return state
}