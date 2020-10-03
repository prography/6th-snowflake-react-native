import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LabMain from '~/screens/lab/LabMain';

export type LabStackParamList = {
  LabMain: undefined;
};

const Stack = createStackNavigator<LabStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LabMain' component={LabMain} />
    </Stack.Navigator>
  );
};
