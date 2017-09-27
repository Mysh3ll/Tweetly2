import React, {Component} from "react"
import {ActivityIndicator, View} from "react-native"
import {Card, Button, Text} from "react-native-elements"

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }

    // A method of firebase to logout an user
    _logout() {
        this.setState({
            loading: true
        })
        // SignOut the connected user
        this.props.screenProps.signout()
            .then(() => {
                    this.setState({
                        loading: false
                    })
                    this.props.navigation.navigate("SignedOut")
                }
            )
    }

    render() {
        const content = this.state.loading ? <ActivityIndicator size="large"/> :
            <View style={{paddingVertical: 20}}>
                <Card title="John Doe">
                    <View
                        style={{
                            backgroundColor: "#bcbec1",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            alignSelf: "center",
                            marginBottom: 20
                        }}
                    >
                        <Text style={{color: "white", fontSize: 28}}>JD</Text>
                    </View>
                    <Button
                        backgroundColor="#03A9F4"
                        title="SIGN OUT"
                        onPress={this._logout.bind(this)}
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
