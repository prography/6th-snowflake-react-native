import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingMain from '~/screens/setting/SettingMain';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SettingMain' component={SettingMain} />
    </Stack.Navigator>
  );
};
