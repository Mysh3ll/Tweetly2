import React, {Component} from "react"
import {View, ActivityIndicator,} from "react-native"
import {Card, Button, FormLabel, FormInput} from "react-native-elements"

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        // We have the same props as in our signup.js file and they serve the same purposes.
        this.state = {
            loading: false,
            email: '',
            password: ''
        }
    }

    _login() {
        this.setState({
            loading: true
        })
        // Log in and display an alert to tell the user what happened.
        this.props.screenProps.login(this.state.email, this.state.password
        ).then((userData) => {
                this.setState({
                    loading: false
                })
                this.props.navigation.navigate("SignedIn")
            }
        ).catch((error) => {
            this.setState({
                loading: false
            })
            alert('Login Failed. Please try again: ' + error.message)
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

                    <Button
                        buttonStyle={{marginTop: 20}}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={this._login.bind(this)}
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

