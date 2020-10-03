import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '~/navigation/tabs/HomeStack';
import ProductStack from '~/navigation/tabs/ProductStack';
import LabStack from '~/navigation/tabs/LabStack';
import ClinicStack from '~/navigation/tabs/ClinicStack';
import FeedbackStack from '~/navigation/tabs/FeedbackStack';
import JoinStack from '~/navigation/tabs/JoinStack';

export type RootTabParamList = {
  HomeStack: undefined;
  ProductStack: undefined;
  LabStack: undefined;
  ClinicStack: undefined;
  JoinStack: undefined;
  FeedbackStack: undefined;
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
        name='FeedbackStack'
        component={FeedbackStack}
        options={{ tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
};
