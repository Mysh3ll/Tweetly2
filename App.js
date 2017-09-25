import React, {Component} from "react"
import {SignedOut} from "./navigation/Rooter"

import * as firebase from './api/FirebaseService'


export default class App extends Component {
    render() {
        return <SignedOut
            screenProps={firebase}
        />
    }
}