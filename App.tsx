import * as React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GenderColor from '~/screens/GenderColor';
import Home from '~/screens/home/HomeMain';
import Laboratory from '~/screens/lab/LabMain';
import Clinic from '~/screens/clinic/Clinic';
import Setting from '~/screens/setting/SettingMain';
import ProductStack from '~/navigation/ProductStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GenderColor />
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName='Home'
    //     tabBarOptions={{
    //       activeTintColor: '#fdbbb3',
    //     }}
    //   >
    //     <Tab.Screen name='홈' component={GenderColor} />
    //     <Tab.Screen name='제품' component={ProductStack} />
    //     <Tab.Screen name='연구소' component={Laboratory} />
    //     <Tab.Screen name='상담소' component={Clinic} />
    //     <Tab.Screen name='설정' component={Setting} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;
