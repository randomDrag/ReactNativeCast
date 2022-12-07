import {IStateList , StateListAction} from '../actions'

import { ActionTypes } from "../actions/types";

export const StateListReducer = (state: IStateList[] = [], action: StateListAction) => {
  switch (action.type) {
    case ActionTypes.stateList:
      return action.payload;

    default:
      return state;
  }
};