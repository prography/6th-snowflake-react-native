import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "../Product/Product";
import Review from "../Product/Review";
import ReviewWriting from "../Product/ReviewWriting";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='리뷰 쓰기' component={ReviewWriting}/>
      <Stack.Screen name='리뷰' component={Review} />
      <Stack.Screen name='Product' component={Product} />
    </Stack.Navigator>
  );
};
