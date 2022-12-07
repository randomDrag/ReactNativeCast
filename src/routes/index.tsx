import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import {View} from 'react-native'
import {SafeAreaProvider} from  'react-native-safe-area-context';
import { Home } from "../screens/Home";





const Stack  = createStackNavigator();

export class Route extends Component {

    render(): React.ReactNode {
        return (
          
          <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        )
    }
}