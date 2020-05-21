import React from 'react';
import { ScrollView, View, Text, Animated } from 'react-native';
import styled from 'styled-components';
import { device } from '../../utils/constant';
import ProductInfo from '../../containers/product_review/ProductInfo';
import ReviewFilter from '../../containers/product_review/ReviewFilter';
import Reviews from '../../containers/product_review/Reviews';

HEADER_MAX_HEIGHT = device.width * 0.8
HEADER_MIN_HEIGHT = device.width * 0.3
PROFILE_IMAGE_MAX_HEIGHT = device.width * 0.4
PROFILE_IMAGE_MIN_HEIGHT = device.width * 0.2

const Review = () => {
    return (
        <>
            <View style={{position:'absolute'}}>
                <ProductInfo/>
                <ReviewFilter/>
            </View>
            <ScrollView>
                <View style={{
                    overflow:'hidden',
                    marginTop: device.width * 0.92
                    }}>
                    <Reviews/>
                </View>
            </ScrollView>
        </>
    )
}

export default Review;