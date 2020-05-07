import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "../Product/Product";
import Review from "../Product/Review"

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
