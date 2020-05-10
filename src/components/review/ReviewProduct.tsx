import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import {device, color} from '../../utils/constant';
import Margin from '../universal/Margin';

const Container = styled.View`
    height: ${device.width * 0.8}px
    width: ${device.width}px
    background-color: white;
    border-radius: 50px;
    position: absolute;
    shadow-color: "#000"
    shadow-offset: {
        width: 10,
        height: 10,
    }
    shadow-opacity: 0.6
    shadow-radius: 10
    elevation: 10
`;

const BackContainer = styled.View`
    height: ${device.width * 0.5}px;
    width: ${device.width}px;
    background-color: white;
    position: absolute;
    flex-direction: row;
`;

const ProductInfoContainer = styled.View`
    height: ${device.width * 0.45}px;
    width: ${device.width * 0.4}px;
    padding-top: ${device.width * 0.05}px;
    margin-left: ${device.width * 0.1}px;
`;

const RankNumText = styled.Text`
    color: ${color.grayDark};
    font-weight: 900;
`;

const BrandText = styled.Text`
    color: ${color.grayLight};
    font-weight: 900;
    margin-top: ${device.width * 0.03}px;
    font-size: 18px;
`;

const NameText = styled.Text`
    color: ${color.grayDark}
    font-weight: 900;
    margin-top: ${device.width * 0.02}px;
    font-size: 25px;
`;

const ThreeInfoContainer = styled.View`
    margin-top: ${device.width * 0.04}px;
`;

const InfoText = styled.Text`
    color: ${color.grayLight};
    margin-top: ${device.width * 0.01}px;
`;

const ReviewProduct = (props) => {
    return (
        
        <Container>
            <BackContainer>
                <ProductInfoContainer>
                    <RankNumText>
                        {props.rankInfo.style} {props.rankInfo.rank}위
                    </RankNumText>
                    <BrandText>
                        {props.productInfo.brand}
                    </BrandText>
                    <NameText>
                        {props.productInfo.name}
                    </NameText>
                    <ThreeInfoContainer>
                        <InfoText>길이 {props.productInfo.length}mm</InfoText>
                        <InfoText>폭 {props.productInfo.width}mm</InfoText>
                        <InfoText>두께 {props.productInfo.thickness}mm</InfoText>
                    </ThreeInfoContainer>
                </ProductInfoContainer>
            </BackContainer>
        </Container>
    );
};

export default ReviewProduct;