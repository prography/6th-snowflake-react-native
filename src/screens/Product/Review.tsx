import * as React from 'react';
import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { device } from '../../utils/constant';
import ProductInfo from '~/containers/product/review/ProductInfo';
import ReviewFilter from '~/containers/product/review/ReviewFilter';
import Reviews from '~/containers/product/review/Reviews';
import Animated from 'react-native-reanimated';

HEADER_MAX_HEIGHT = device.width * 0.92;
HEADER_MIN_HEIGHT = device.width * 0.3;
PROFILE_IMAGE_MAX_HEIGHT = device.width * 0.4;
PROFILE_IMAGE_MIN_HEIGHT = device.width * 0.2;

const { Value, Extrapolate } = Animated;
const Review = () => {
  const [scrollY, setScrollY] = useState(new Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <Animated.View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: headerHeight,
          backgroundColor: 'blue',
        }}
      >
        {/* <ProductInfo/>
                <ReviewFilter/> */}
      </Animated.View>
      <Animated.ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
      >
        <Animated.View
          style={{
            overflow: 'hidden',
            marginTop: HEADER_MAX_HEIGHT,
          }}
        >
          <Reviews />
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
};

export default Review;
