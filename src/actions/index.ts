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

export interface StateListAction {
  type: ActionTypes.stateList;
  payload: IStateList[];
}



/* dispatch creator interface */

export interface StateListAction {
  type: ActionTypes.stateList;
  payload: IStateList[];
}



/* all actions creator here */

export const StateList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<State>(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: "india",
        }
      );

      dispatch<StateListAction>({
        type: ActionTypes.stateList,
        payload: response.data.data.states,
      });
    } catch (e) {
      throw new Error(`${e}`);
    }
  };
};