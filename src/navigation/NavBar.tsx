import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '~/screens/home/HomeMain';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
    </Tab.Navigator>
  );
};
