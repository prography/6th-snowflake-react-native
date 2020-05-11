import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { device, color } from '../../utils/constant';
import ReviewRegisterContainer from '../../components/review_writing/ReviewRegisterContainer';

const ReviewRegister = () => {
    const reviewText = {text: '리뷰 관련 가이드 바르고 고운말을 씁시다. 바르고 고운말을 써야 바르고 곱게 됩니다. 바르고 고운말을 써주세요. 써봅시다. 쓰세요. 리뷰 관련 가이드 바르고 고운말을 씁시다.'};

    return (
        <ReviewRegisterContainer reviewText={reviewText}/>
    );
};

export default ReviewRegister;