import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '~/screens/Product/Main';
import Review from '~/screens/Product/Review';
import ReviewWriting from '~/screens/Product/ReviewWriting';
import Ranking from '~/screens/Product/Ranking';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='리뷰' component={Review} />

      <Stack.Screen name='Product' component={Main} />
      <Stack.Screen name='리뷰 쓰기' component={ReviewWriting} />

      <Stack.Screen name='Ranking' component={Ranking} />

      <Stack.Screen name='Review' component={Review} />
    </Stack.Navigator>
  );
};
