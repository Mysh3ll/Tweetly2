import React from "react"
import { Platform, StatusBar } from "react-native"
import { StackNavigator, TabNavigator } from "react-navigation"
import { FontAwesome } from "react-native-vector-icons"

import SignUp from "../screens/SignUp"
import SignIn from "../screens/SignIn"
import Home from '../screens/Home'
import Profile from '../screens/Profile'

export const SignedOut = StackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
            headerStyle: {
                backgroundColor: 'white',
                marginTop: 20,
            }
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
            headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
            headerStyle: {
                backgroundColor: 'white',
                marginTop: 20,
            }
        }
    }
})

export const SignedIn = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="home" size={30} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={30} color={tintColor} />
            )
        }
    }
})