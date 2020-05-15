import React from 'react';
import { Text } from 'react-native'
import ReviewProduct from '../../containers/product_review_writing/ReviewProduct';
import Score from '../../containers/product_review_writing/Score';
import ReviewRegister from '../../containers/product_review_writing/ReviewRegister';
import Margin from '../../components/universal/Margin';

const ReviewWriting = () => {
    return (
        <>
            <ReviewProduct/>
            <Score/>
            <Margin/>
            <ReviewRegister/>
        </>
    );
};

export default ReviewWriting;