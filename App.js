import React from 'react'
import { Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import GenderColor from './src/screens/GenderColor'
import Home from './src/screens/Home'
import Laboratory from './src/screens/Laboratory'
import Clinic from './src/screens/Clinic'
import Setting from './src/screens/Setting'
import ProductStack from './src/screens/navigation/ProductStack'
import { SafeAreaView, View } from 'react-native'
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: '#fdbbb3'
        }}
        screenOptions={{
          style: { backgroundColor: 'white' }
        }}
      >
        <Tab.Screen
          name='홈'
          component={GenderColor}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color='blue' size={15} />
            )
          }}
        />
        <Tab.Screen name='제품' component={ProductStack} />
        <Tab.Screen name='연구소' component={Laboratory} />
        <Tab.Screen name='상담소' component={Clinic} />
        <Tab.Screen name='설정' component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
