import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components';
import { device } from '../../utils/constant';
import ProductInfo from '../../containers/product_review/ProductInfo';
import ReviewFilter from '../../containers/product_review/ReviewFilter';
import Reviews from '../../containers/product_review/Reviews';

const Review = () => {
    return (
        <>
            <ProductInfo/>
            <ReviewFilter/>
            <ScrollView>
                <Reviews/>
            </ScrollView>
        </>
    )
}

export default Review;