import React, {Component} from "react"
import { SignedOut, SignedIn } from "./navigation/Rooter"

export default class App extends Component {
    render() {
        return <SignedIn />
    }
}