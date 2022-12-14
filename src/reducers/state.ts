import {IStateList , StateListAction} from '../actions'

import { ActionTypes } from "../actions/types";


interface s {
  payload : IStateList[] ,
  isLoading : boolean,
  error : boolean
}

const st : s = {
  payload : [],
  isLoading : false,
  error : false
}

export const StateListReducer = (state = st, action: StateListAction) => {
  switch (action.type) {
    case ActionTypes.stateList:
      return {
        ...state,
       payload: action.payload ,
    
      

      }
      case ActionTypes.ERROR_FETCH: 

        
          return {
            ...state,
          payload : action.payload ,
            isLoading : false,
            error : action.error
          
    
          }


        

    default:
      return state;
  }
};