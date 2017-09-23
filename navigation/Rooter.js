import {StackNavigator} from "react-navigation"

import SignUp from "../screens/SignUp"
import SignIn from "../screens/SignIn"

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