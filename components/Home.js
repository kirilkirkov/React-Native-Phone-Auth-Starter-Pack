import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import firebase from 'firebase'
import SignIn from './auth/SignIn'
import UserHome from './user/Home'

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { currentUser: null }
    }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    render() {
        const { currentUser } = this.state
        if(currentUser === null) {
            return <SignIn navigation={this.props.navigation} />
        }
        return (
            <UserHome navigation={this.props.navigation} />
        )
    }

    logOut() {
        firebase.auth().signOut().then(function() {
            this.props.navigation.navigate('Home')
          }, function(error) {
            alert(error)
        });
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})