import {Store , configureStore} from '@reduxjs/toolkit';
import {reducers} from './src/reducers'


export const createStore =() : Store => {

    const store = configureStore({reducer:reducers})

    return store;
}