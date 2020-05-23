import * as React from 'react';
import { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '~/screens/home/HomeMain';
import ProductMain from '~/screens/product/ProductMain';
import LabMain from '~/screens/lab/LabMain';
import ClinicMain from '~/screens/clinic/ClinicMain';
import SettingMain from '~/screens/setting/SettingMain';
import GenderColor from '~/screens/GenderColor';
const Stack = createStackNavigator();

export default (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeMain' component={HomeMain} />
      <Stack.Screen name='GenderColor' component={GenderColor} />
      <Stack.Screen name='ProductMain' component={ProductMain} />
      <Stack.Screen name='LabMain' component={LabMain} />

      <Stack.Screen name='ClinicMain' component={ClinicMain} />

      <Stack.Screen name='SettingMain' component={SettingMain} />
    </Stack.Navigator>
  );
};
