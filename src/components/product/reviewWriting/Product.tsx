import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { device, color } from '~/utils/constant';

const Container = styled.View`
  height: ${device.width * 0.55}px;
  width: ${device.width}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: ${device.px * 0.5}px;
  border-color: ${color.grayLight};
`;

const ImageContainer = styled.View`
    height: ${device.width * 0.25}px;
    width: ${device.width * 0.25}px;
    border-radius: ${(device.width * 0.25) / 2}px;
    align-items: center;
    justify-content: center;
    background-color: white;
    shadow-color: "#000"
    shadow-offset: {
        width: 10,
        height: 10,
    };
    shadow-opacity: 0.3;
    shadow-radius: 10;
    elevation: 10;
`;

const Image = styled.Image`
  height: ${device.width * 0.16}px;
  width: ${device.width * 0.16}px;
  resize-mode: contain;
`;

const BrandText = styled.Text`
  color: ${color.grayLight};
  font-weight: 900;
  margin-top: ${device.width * 0.05}px;
  font-size: ${device.px * 14}px;
`;

const NameText = styled.Text`
  color: ${color.grayDark};
  font-weight: 900;
  margin-top: ${device.width * 0.02}px;
  font-size: ${device.px * 17}px;
`;

const Product = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Image source={require('~/img/condom.png')} />
      </ImageContainer>
      <BrandText>{props.productInfo.brand}</BrandText>
      <NameText>{props.productInfo.name}</NameText>
    </Container>
  );
};

export default Product;
