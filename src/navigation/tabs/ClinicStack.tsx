import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClinicMain from '~/screens/clinic/ClinicMain';

export type ClinicStackParamList = {
  ClinicMain: undefined;
};

const Stack = createStackNavigator<ClinicStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ClinicMain' component={ClinicMain} />
    </Stack.Navigator>
  );
};
