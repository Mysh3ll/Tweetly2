import React from "react"
import {Platform, StatusBar} from "react-native"
import {StackNavigator, TabNavigator} from "react-navigation"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import SignUp from "../screens/SignUp"
import SignIn from "../screens/SignIn"
import Home from '../screens/Home'
import Profile from '../screens/Profile'

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
    }
})

export const SignedIn = TabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({tintColor}) => (
                    <FontAwesome name="home" size={30} color={tintColor}/>
                ),
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({tintColor}) => (
                    <FontAwesome name="user" size={30} color={tintColor}/>
                )
            }
        },
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: true,
            style: {
                backgroundColor: '#4586e0',
            },
            indicatorStyle: {
                backgroundColor: 'white',
            },
            labelStyle: {
                fontSize: 14,
                color: 'white',
            },
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
    },
)
