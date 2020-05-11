import React from 'react';
import { Text } from 'react-native'
import ReviewProduct from '../../containers/product_review_writing/ReviewProduct';
import Score from '../../containers/product_review_writing/Score';

const ReviewWriting = () => {
    return (
        <>
            <ReviewProduct/>
            <Score/>
        </>
    );
};

export default ReviewWriting;