import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProductMain from '~/screens/product/ProductMain';
import ProductInfo from '~/screens/product/ProductInfo';
import Ranking from '~/screens/product/Ranking';
import ReviewUpload2 from '~/screens/product/ReviewUpload2';
import ReviewUpload1 from '~/screens/product/ReviewUpload1';
import ReviewUpload3 from '~/screens/product/ReviewUpload3';
import SearchProduct from '~/screens/product/SearchProduct';
import Join1 from '~/screens/join/Join1';
import Join2 from '~/screens/join/Join2';
import Join3 from '~/screens/join/Join3';
import Join4 from '~/screens/join/Join4';
import SettingMain from '~/screens/setting/SettingMain';
import HomeMain from '~/screens/home/HomeMain';

import { CategoryEnum, OrderEnum } from '~/containers/product/info/ProductRankingContainer';

export interface ProductInfoParamList {
  productId: number;
}
export interface RankingParamList {
  category?: CategoryEnum
  order?: OrderEnum
}

// TODO param 정리
export type ProductStackParamList = {
  ProductMain: undefined;
  ProductInfo: ProductInfoParamList;
  ReviewUpload1: undefined;
  ReviewUpload2: undefined;
  ReviewUpload3: undefined;
  Ranking: RankingParamList;
  SearchProduct: undefined;
  Join1: undefined;
  Join2: undefined;
  Join3: undefined;
  Join4: undefined;
  SettimgMain: undefined;
  HomeMain: undefined;
}

const Stack = createStackNavigator<ProductStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ProductMain' component={ProductMain} />
      <Stack.Screen name='ProductInfo' component={ProductInfo} />
      <Stack.Screen name='ReviewUpload1' component={ReviewUpload1} />
      <Stack.Screen name='ReviewUpload2' component={ReviewUpload2} />
      <Stack.Screen name='ReviewUpload3' component={ReviewUpload3} />
      <Stack.Screen name='Ranking' component={Ranking} />
      <Stack.Screen name='SearchProduct' component={SearchProduct} />
      <Stack.Screen name='Join1' component={Join1} />
      <Stack.Screen name='Join2' component={Join2} />
      <Stack.Screen name='Join3' component={Join3} />
      <Stack.Screen name='Join4' component={Join4} />
      <Stack.Screen name='SettimgMain' component={SettingMain} />
      <Stack.Screen name='HomeMain' component={HomeMain} />
    </Stack.Navigator>
  );
};
