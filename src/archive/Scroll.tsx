import * as React from 'react';
import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { d } from '../utils/constant';
import ProductInfo from '~/archive/ProductInfo';
import ReviewFilter from '~/archive/ReviewFilter';
import Reviews from '~/archive/Reviews';
import Animated from 'react-native-reanimated';
import NavBar from '~/screens/NavBar';

const HEADER_MAX_HEIGHT = d.width * 0.92;
const HEADER_MIN_HEIGHT = d.width * 0.3;
const PROFILE_IMAGE_MAX_HEIGHT = d.width * 0.4;
const PROFILE_IMAGE_MIN_HEIGHT = d.width * 0.2;

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
      <NavBar>
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
      </NavBar>
    </>
  );
};

export default Review;
