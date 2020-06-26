import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles'

export default function SignIn({ navigation: { navigate } }) {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    const [phone, setPhone] = useState('');

    // Handle the button press
    async function signInWithPhoneNumber() {
        if(phone) {
            const confirmation = await auth().signInWithPhoneNumber(phone);
            setConfirm(confirmation);
        }
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            navigate('UserHome')
        } catch (error) {
            alert('Invalid code.');
        }
    }

    if (!confirm) {
        return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput placeholder="Your phone" style={styles.textInput} onChangeText={phone => setPhone(phone)} />
                <Button
                    style={styles.button}
                    title="Send code"
                    onPress={() => signInWithPhoneNumber()}
                />
            </View>
        </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </View>
    );
}