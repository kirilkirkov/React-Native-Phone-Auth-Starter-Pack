import React from 'react'
import { Text, TextInput, View, Button } from 'react-native';
import firebase from "firebase";
import styles from './styles'

export default class SignUp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: null };
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={{color:'#e93766', fontSize: 40}}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextInput
            placeholder="Username"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="Create" color="#e93766" onPress={() => this.handleSignUp()}/>
          <View>
            <Text> 
              Already have an account? 
              <Text onPress={() => this.props.navigation.navigate('SignIn')} style={{color:'#e93766', fontSize: 18}}> Login </Text>
            </Text>
          </View>
      </View>
    );
  }

  handleSignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
          this.setUserInDb(response.user)
          this.props.navigation.navigate('UserHome')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  setUserInDb(user) {
      firebase.database().ref('users/').push({
        createdAt: (new Date()).getTime(),
        displayName: user.displayName,
        email: user.email,
        lastLoginAt: (new Date()).getTime(),
        photoURL: user.photoURL,
        uid: user.uid
      })
      .then((data)=>{

      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
  }
}