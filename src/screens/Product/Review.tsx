import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components';
import { device } from '../../utils/constant';
import ProductInfo from '../../containers/product_review/ProductInfo';
import ReviewFilterContainer from '../../components/review/ReviewFilterContainer';
import Margin from '../../components/universal/Margin';
import ReviewFilter from '../../containers/product_review/ReviewFilter';

const Review = () => {
    return (
        <>
            <ProductInfo/>
            <Margin/>
            <ReviewFilter/>
        </>
    )
}

export default Review;