import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'

type RootStackParamnlist = {
  Home: undefined;
  Details: undefined;
}

const Stack = createStackNavigator <RootStackParamnlist>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Home Page'}}
      />
      <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ title: 'Details Page'}}
      />
      </Stack.Navigator>
   </NavigationContainer>
    );
  };

export default App;