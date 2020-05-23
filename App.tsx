import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GenderColor from '~/screens/join/GenderColor';
import Home from '~/screens/home/HomeMain';
import Laboratory from '~/screens/lab/LabMain';
import Clinic from '~/screens/clinic/ClinicMain';
import Setting from '~/screens/setting/SettingMain';
import ProductStack from '~/navigation/tabs/ProductStack';

import RootTabNavigation from '~/navigation/RootTabNavigation';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <NavigationContainer>
        <RootTabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
