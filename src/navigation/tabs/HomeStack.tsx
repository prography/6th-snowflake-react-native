import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '~/screens/home/HomeMain';

export type HomeStackParamList = {
  HomeMain: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

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
