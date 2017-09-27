import React, {Component} from "react"
import {View, ActivityIndicator} from "react-native"
import {Card, Button, FormLabel, FormInput} from "react-native-elements"

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        // We have the same props as in our Signin.js file and they serve the same purposes.
        this.state = {
            loading: false,
            email: '',
            password: ''
        }
    }

    // A method to passs the username and password to firebase and make a new user account
    _signup() {
        this.setState({
            // When waiting for the firebase server show the loading indicator.
            loading: true
        })

        // Make a call to firebase to create a new user.
        this.props.screenProps.signup(this.state.email, this.state.password)
            .then(() => {
                // then and catch are methods that we call on the Promise returned from
                // createUserWithEmailAndPassword
                alert('Your account was created!')
                this.setState({
                    // Clear out the fields when the user logs in and hide the progress indicator.
                    email: '',
                    password: '',
                    loading: false
                })
                this.props.navigation.navigate("SignIn")
            }).catch((error) => {
            // Leave the fields filled when an error occurs and hide the progress indicator.
            this.setState({
                loading: false
            })
            alert("Account creation failed: " + error.message)
        })
    }

    render() {
        const content = this.state.loading ? <ActivityIndicator size="large"/> :
            <View style={{paddingVertical: 20}}>
                <Card>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        placeholder="Email address..."/>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        secureTextEntry
                        placeholder="Password..."/>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Confirm Password..."/>

                    <Button
                        buttonStyle={{marginTop: 20}}
                        backgroundColor="#03A9F4"
                        title="SIGN UP"
                        onPress={this._signup.bind(this)}
                    />
                    <Button
                        buttonStyle={{marginTop: 20}}
                        backgroundColor="transparent"
                        textStyle={{color: "#bcbec1"}}
                        title="Sign In"
                        onPress={() => this.props.navigation.navigate("SignIn")}
                    />
                </Card>
            </View>


        return (
            <View>
                {content}
            </View>
        )
    }
}
