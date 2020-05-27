import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GenderColor from '~/screens/join/GenderColor';
import Login from '~/screens/join/Login';
import Join from '~/screens/join/Join';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='GenderColor' component={GenderColor} />

      <Stack.Screen name='Join' component={Join} />
    </Stack.Navigator>
  );
};
