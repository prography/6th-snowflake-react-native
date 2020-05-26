import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '~/screens/home/HomeMain';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeMain' component={HomeMain} />
    </Stack.Navigator>
  );
};
