import React from "react"
import {TabNavigator} from "react-navigation"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import Home from '../screens/Home'
import Profile from '../screens/Profile'

export default SignedIn = TabNavigator({
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