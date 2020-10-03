import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LabMain from '~/screens/lab/LabMain';
import SutraList from '~/screens/lab/SutraList';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SutraList' component={SutraList} />
      <Stack.Screen name='LabMain' component={LabMain} />
    </Stack.Navigator>
  );
};
