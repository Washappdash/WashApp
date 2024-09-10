import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Auth">
    <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="WASH APP" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
