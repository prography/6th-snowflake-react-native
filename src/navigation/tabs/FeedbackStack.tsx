import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feedback from '~/screens/setting/Feedback';
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Feedback' component={Feedback} />
    </Stack.Navigator>
  );
};
