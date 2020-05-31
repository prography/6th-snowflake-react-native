import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductMain from '~/screens/product/ProductMain';
import ProductInfo from '~/screens/product/ProductInfo';
import Ranking from '~/screens/product/Ranking';
import ReviewUpload2 from '~/screens/product/ReviewUpload2';
import ReviewUpload1 from '~/screens/product/ReviewUpload1';
import ReviewUpload3 from '~/screens/product/ReviewUpload3';
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ReviewUpload2' component={ReviewUpload2} />
      <Stack.Screen name='ReviewUpload1' component={ReviewUpload1} />

      <Stack.Screen name='ReviewUpload3' component={ReviewUpload3} />

      <Stack.Screen name='ProductInfo' component={ProductInfo} />

      <Stack.Screen name='ProductMain' component={ProductMain} />

      <Stack.Screen name='Ranking' component={Ranking} />
    </Stack.Navigator>
  );
};
