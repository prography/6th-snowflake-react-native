import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductMain from '~/screens/product/ProductMain';
import ProductInfo from '~/screens/product/ProductInfo';
import Scroll from '~/screens/product/Scroll';
import ReviewWriting from '~/screens/product/ReviewWriting';
import Ranking from '~/screens/product/Ranking';
import ReviewUpload from '~/screens/product/ReviewUpload';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ProductMain' component={ProductMain} />
      <Stack.Screen name='ProductInfo' component={ProductInfo} />
      <Stack.Screen name='ReviewUpload' component={ReviewUpload} />
      <Stack.Screen name='리뷰 쓰기' component={ReviewWriting} />

      <Stack.Screen name='Ranking' component={Ranking} />

      <Stack.Screen name='Scroll' component={Scroll} />
    </Stack.Navigator>
  );
};
