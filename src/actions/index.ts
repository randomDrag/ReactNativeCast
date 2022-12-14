import { Dispatch } from "@reduxjs/toolkit";
import { ActionTypes } from "./types";
import axios from "axios";


export interface State {
  data: { states: IStateList[] };
}

export interface IStateList {
  name: string;
  state_code: string;
}


/* all actions interface  */

//example



/* dispatch creator interface */

export interface StateListAction {
  type: ActionTypes.stateList|ActionTypes.ERROR_FETCH | ActionTypes.STATE_LIST_FETCHED ;
  payload?: IStateList[];
  error?: boolean,
  isLoading? : boolean
}


export interface ErrorActionCreator {
  type : string | number,
  error: boolean,
  payload : any
 
 }
 

/* all actions creator here */

export const StateList = (cb :Function) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<State>(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: "india",
        }
      );

     console.log(response.status)

      
      dispatch<StateListAction>({
        type: ActionTypes.stateList,
        payload: response.data.data.states,
        error : false,
        isLoading : true
      });
cb();
    } catch (e : any) {
     
      console.log(`error ${e?.message}`)
      //throw new Error(e?.message)

       dispatch<ErrorActionCreator>({
        type : ActionTypes.ERROR_FETCH,
        payload : e?.message,
        error : true,

       });

       cb();
    }
  };
};
