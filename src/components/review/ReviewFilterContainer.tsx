import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { device, color } from '../../utils/constant';

const Container = styled.View`
    height: ${device.width * 0.12}px
    width: ${device.width}px
    background-color: red;
    flex-direction: row;
`;

const ReviewCntContainer = styled.View`
    align-items: center;
`;

const ReviewCntText = styled.Text`
    color: ${color.grayDark};
    font-size: ${device.px * 16}px;
`;

const ReviewFilterContainer = (props) => {
    return (
        <Container>
            <ReviewCntContainer>
                <ReviewCntText>리뷰 {props.reviewCnt}</ReviewCntText>
            </ReviewCntContainer>
        </Container>
    );
};

export default ReviewFilterContainer;