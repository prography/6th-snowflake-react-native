import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GenderColor from '~/screens/GenderColor';
import Home from '~/screens/home/HomeMain';
import Laboratory from '~/screens/lab/LabMain';
import Clinic from '~/screens/clinic/ClinicMain';
import Setting from '~/screens/setting/SettingMain';
import ProductStack from '~/navigation/ProductStack';
import HomeMain from './src/screens/Home/HomeMain';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <GenderColor />
    </SafeAreaView>
  );
};

export default App;
