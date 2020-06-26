import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import auth from '@react-native-firebase/auth';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userPhone: auth().currentUser.phoneNumber}
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Hi {this.state.userPhone}</Text>
            </View>
        ); 
    }
}