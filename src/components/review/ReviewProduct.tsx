import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import {device, color} from '../../utils/constant';

const Container = styled.View`
    height: ${device.width * 0.7}px
    width: ${device.width * 0.9}px
    background-color: red;
`;

const ReviewProduct = (props) => {
    return (
        <Container>

        </Container>
    );
};

export default ReviewProduct;