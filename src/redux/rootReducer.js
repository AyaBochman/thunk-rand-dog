import { ACTIONS } from "./action.config.js";


export default function(state = {}, action) {
    switch (action.type) {

        case ACTIONS.GET_DOG: {
         
            return {
                ...state,
                dog:action.payload
            }

        }




        default:

            return {
                ...state
            }
    }
}




