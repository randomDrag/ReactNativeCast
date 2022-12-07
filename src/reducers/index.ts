import { combineReducers} from '@reduxjs/toolkit';


/* store */
export interface storeState {

    form : any

}



export const reducers = combineReducers<storeState>({

    form : function(state, action) { if (state == null) state = []; return state;}
})