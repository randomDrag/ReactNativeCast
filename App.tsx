import React from "react";
import {Provider} from 'react-redux'
import { Route } from "./src/routes";
import {createStore } from './Store'



const store = createStore();


export class App extends React.Component {

  render(): React.ReactNode {
      return (
        <Provider store={store}>
          <Route/>
       </Provider>
      )
  }


}


