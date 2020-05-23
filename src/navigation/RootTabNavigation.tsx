import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '~/navigation/tabs/HomeStack';
import ProductStack from '~/navigation/tabs/ProductStack';
import LabStack from '~/navigation/tabs/LabStack';
import ClinicStack from '~/navigation/tabs/ClinicStack';
import SettingStack from '~/navigation/tabs/SettingStack';
import JoinStack from '~/navigation/JoinStack';

export type RootTabParamList = {
  HomeStack: undefined;
  ProductStack: undefined;
  LabStack: undefined;
  ClinicStack: undefined;
  SettingStack: undefined;
  JoinStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default () => {
  return (
    <Tab.Navigator initialRouteName='HomeStack'>
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name='ProductStack'
        component={ProductStack}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name='LabStack'
        component={LabStack}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name='ClinicStack'
        component={ClinicStack}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name='JoinStack'
        component={JoinStack}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name='SettingStack'
        component={SettingStack}
        options={{ tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
};
