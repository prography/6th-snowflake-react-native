import React from "react";
import { Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screens/Home';
import Product from './src/screens/Product';
import Laboratory from './src/screens/Laboratory';
import Clinic from './src/screens/Clinic';
import Setting from './src/screens/Setting';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#fdbbb3',
        }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Product" component={Product}/>
        <Tab.Screen name="Laboratory" component={Laboratory}/>
        <Tab.Screen name="Clinic" component={Clinic}/>
        <Tab.Screen name="Setting" component={Setting}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
