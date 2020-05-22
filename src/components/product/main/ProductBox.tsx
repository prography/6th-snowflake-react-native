import * as React from 'react';
import styled from 'styled-components/native';
import { device, color } from '~/utils/constant';

const Container = styled.View`
  width: ${device.width / 5}px;
  height: ${device.width / 2.5}px;

  align-items: center;
`;
const TypeText = styled.Text``;
const BoxContainer = styled.View`
  background-color: white;
  width: ${device.width / 4.5}px;
  height: ${device.width / 3}px;
  border-radius: ${device.px * 20}px;
`;
const ImageContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: ${device.width * 0.1}px;
  height: ${device.width / 8}px;
  resize-mode: contain;
`;
const NameContainer = styled.View`
  align-items: center;
`;
const CompanyText = styled.Text`
  color: ${color.grayLight};
  font-weight: 700;
  font-size: ${device.px * 11.5}px;
  margin-bottom: ${device.px * 4}px;
`;
const TitleText = styled.Text`
  font-weight: 500;
  font-size: ${device.px * 14}px;
`;

const ProductBox = ({ product }) => {
  return (
    <Container>
      <TypeText>{product.type}</TypeText>
      <BoxContainer>
        <ImageContainer>
          <Image source={require('~/img/condom.png')} />
        </ImageContainer>
        <NameContainer>
          <CompanyText>{product.company}</CompanyText>
          <TitleText>{product.title}</TitleText>
        </NameContainer>
      </BoxContainer>
    </Container>
  );
};

export default ProductBox;
