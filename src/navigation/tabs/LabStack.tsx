import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LabMain from '~/screens/lab/LabMain';
import SutraList from '~/screens/lab/SutraList';
import SutraInfo from '~/screens/lab/SutraInfo';

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
      <Stack.Screen name='SutraInfo' component={SutraInfo} />
      <Stack.Screen name='SutraList' component={SutraList} />
      
      
      

      <Stack.Screen name='LabMain' component={LabMain} />
    </Stack.Navigator>
  );
};
