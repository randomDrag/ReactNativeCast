import React from "react";
import { Text, View , StyleSheet, ViewStyle , TextStyle } from "react-native";

type style = {
    container : ViewStyle,
    text : TextStyle
}

export class Home extends React.Component {

    render(): React.ReactNode {
        return (
            <View style={Style.container}>
                <Text style={Style.text}> Hello </Text>
            </View>
        )
    }
}






   const Style = StyleSheet.create<style>({
        container : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            borderWidth : 2,
            margin : 5,
            flex : 1
        },
        text : {
            fontSize : 20,
            alignItems : 'center',
            color : "#000"

        }
    })
