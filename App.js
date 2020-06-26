import React, { useEffect } from 'react';
import firebase from 'firebase'
// React Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './components/auth/SignIn'
import Home from './components/Home';
import UserHome from './components/user/Home'

import { firebase_config } from './firebase_config.js'

// Initiate Navagator Stack
const Stack = createStackNavigator();

const App = () => {
    
  if (!firebase.apps.length) {
    firebase.initializeApp(firebase_config);

  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
        <Stack.Screen name="UserHome" options={{ headerShown: false }} component={UserHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
