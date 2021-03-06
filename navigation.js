import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './containers/HomeScreen';
import DisplaySubjectsScreen from './containers/DisplaySubjectsScreen';
import AddNotesScreen from './containers/AddNotesScreen';
import DisplayNotes from './containers/DisplayNotes';
import UploadSuccess from './containers/UploadSuccessScreen';
import DisplayDetailNote from "./containers/DisplayDetailNote";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Page" component={HomeScreen} />
        <Stack.Screen name="Subjects" component={DisplaySubjectsScreen} />
        <Stack.Screen name="Add Notes" component={AddNotesScreen} />
        <Stack.Screen name="Display Notes" component={DisplayNotes} />
        <Stack.Screen name="Upload Success" component={UploadSuccess} />
        <Stack.Screen
          name="Display Detail Note"
          component={DisplayDetailNote}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;