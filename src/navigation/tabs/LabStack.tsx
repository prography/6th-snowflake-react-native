import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LabMain from '~/screens/lab/LabMain';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LabMain' component={LabMain} />
    </Stack.Navigator>
  );
};
