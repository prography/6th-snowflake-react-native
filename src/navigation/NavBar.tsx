import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeMain from '~/screens/home/HomeMain';
import ProductMain from '~/screens/product/ProductMain';
import LabMain from '~/screens/lab/LabMain';
import ClinicMain from '~/screens/clinic/ClinicMain';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeMain} />
    </Tab.Navigator>
  );
};
