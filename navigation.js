import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './containers/LoginScreen';
import SignUpScreen from './containers/SignUpScreen';
import HomeScreen from './containers/HomeScreen';
import UploadScreen from './containers/UploadNotesScreen';
import DisplayNotesScreen from './containers/DisplayNotesScreen';

const Stack = createStackNavigator();



function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login Page" component={LoginScreen} />
        <Stack.Screen name="SignUp Page" component={SignUpScreen} /> */}
        <Stack.Screen name="Home Page" component={HomeScreen} />
        <Stack.Screen name="Upload Page" component={UploadScreen} />
        <Stack.Screen name="Display Notes Page" component={DisplayNotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;