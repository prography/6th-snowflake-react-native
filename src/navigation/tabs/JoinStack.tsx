import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GenderColor from '~/screens/join/GenderColor';
import Login from '~/screens/join/Login';
import Join1 from '~/screens/join/Join1';
import Join2 from '~/screens/join/Join2';
import Join3 from '~/screens/join/Join3';
import JoinScreen from '~/screens/join/JoinScreen';
import Join4 from '~/screens/join/Join4';
import SettingMain from '~/screens/setting/SettingMain';
import Feedback from '~/screens/setting/Feedback';
import ProductInfo from '~/screens/product/ProductInfo';

export type Join2Params = {
  signUpEmail?: string;
  signUpPassword?: string;
  socialJoin: boolean;
  _token?: string;
};
export type Join3Params = {
  signUpEmail?: string;
  signUpPassword?: string;
  socialJoin: boolean;
  _token?: string;
  signUpName: string;
  signUpYear: number;
};
export type Join4Params = {
  signUpEmail?: string;
  signUpPassword?: string;
  socialJoin: boolean;
  _token?: string;
  signUpName: string;
  signUpYear: number;
  signUpGender: string;
  signUpPartnerGender: string;
};
export type JoinStackParamList = {
  SettimgMain: undefined;
  JoinScreen: undefined;
  Join1: undefined;
  Join2: Join2Params;
  Join3: Join3Params;
  Join4: Join4Params;
  Login: undefined;
  Feedback: undefined;
  GenderColor: undefined;
  ProductInfo: undefined;
};

const Stack = createStackNavigator<JoinStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SettimgMain' component={SettingMain} />
      <Stack.Screen name='JoinScreen' component={JoinScreen} />
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
