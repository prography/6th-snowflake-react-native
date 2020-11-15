import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LabMain from '~/screens/lab/LabMain';
import SutraList from '~/screens/lab/SutraList';
import SutraInfo from '~/screens/lab/SutraInfo';

export type SutraInfoParams = {
  newSutraId: string;
};

export type LabStackParamList = {
  LabMain: undefined;
  SutraInfo: SutraInfoParams;
  SutraList: undefined;
};

const Stack = createStackNavigator<LabStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LabMain" component={LabMain} />
      <Stack.Screen name="SutraInfo" component={SutraInfo} />
      <Stack.Screen name="SutraList" component={SutraList} />
    </Stack.Navigator>
  );
};
