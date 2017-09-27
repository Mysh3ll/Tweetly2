import React from "react"
import {Platform, StatusBar} from "react-native"
import {StackNavigator} from "react-navigation"

//StackNavigator
import SignUp from "../screens/SignUp"
import SignIn from "../screens/SignIn"

//Tabs inside StackNavigator
import SignedIn from './Tabs'

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
            headerStyle,
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
            // headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
            headerStyle,
        }
    },
    SignedIn: {
        screen: SignedIn,
        navigationOptions: {header: null}
    },
})


