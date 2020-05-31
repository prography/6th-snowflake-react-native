import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GenderColor from '~/screens/join/GenderColor';
import Login from '~/screens/join/Login';
import Join from '~/screens/join/Join';
import JoinSecond from '~/screens/join/JoinSecond';
import JoinThird from '~/screens/join/JoinThird';


const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='GenderColor' component={GenderColor} />
      <Stack.Screen name='Login' component={Login} />

      <Stack.Screen name='Join' component={Join} />

      <Stack.Screen name='JoinSecond' component={JoinSecond} />

      <Stack.Screen name='JoinThird' component={JoinThird} />
      
    </Stack.Navigator>
  );
};
