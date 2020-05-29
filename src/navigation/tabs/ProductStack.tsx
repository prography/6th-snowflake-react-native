import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductMain from '~/screens/product/ProductMain';
import ProductInfo from '~/screens/product/ProductInfo';
import Review from '~/screens/product/Review';
import ReviewWriting from '~/screens/product/ReviewWriting';
import Ranking from '~/screens/product/Ranking';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ProductInfo' component={ProductInfo} />
      <Stack.Screen name='ProductMain' component={ProductMain} />
      <Stack.Screen name='리뷰' component={Review} />

      <Stack.Screen name='리뷰 쓰기' component={ReviewWriting} />

      <Stack.Screen name='Ranking' component={Ranking} />

      <Stack.Screen name='Review' component={Review} />
    </Stack.Navigator>
  );
};
