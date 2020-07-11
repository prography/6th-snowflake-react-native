import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GenderColor from '~/screens/join/GenderColor';
import Login from '~/screens/join/Login';
import Join1 from '~/screens/join/Join1';
import Join2 from '~/screens/join/Join2';
import Join3 from '~/screens/join/Join3';
import Join4 from '~/screens/join/Join4';
import SettingMain from '~/screens/setting/SettingMain';
import Feedback from '~/screens/setting/Feedback';
import ProductInfo from '~/screens/product/ProductInfo';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SettimgMain' component={SettingMain} />
      <Stack.Screen name='Join1' component={Join1} />
      <Stack.Screen name='Join2' component={Join2} />
      <Stack.Screen name='Join3' component={Join3} />
      <Stack.Screen name='Join4' component={Join4} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Feedback' component={Feedback} />
      <Stack.Screen name='GenderColor' component={GenderColor} />
      <Stack.Screen name='ProductInfo' component={ProductInfo} />
    </Stack.Navigator>
  );
};
