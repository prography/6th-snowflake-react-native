import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Product from '../Product/Product';
import Review from '../Product/Review';
import Ranking from '../Product/Ranking';
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='Review' component={Review} />
      <Stack.Screen name='Ranking' component={Ranking} />
    </Stack.Navigator>
  );
};
