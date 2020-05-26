import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, color } from '~/utils/constant';

const Container = styled.View`
  height: ${d.width * 0.55}px;
  width: ${d.width}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: ${d.px * 0.5}px;
  border-color: ${color.grayLight};
`;

const ImageContainer = styled.View`
    height: ${d.width * 0.25}px;
    width: ${d.width * 0.25}px;
    border-radius: ${(d.width * 0.25) / 2}px;
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
  height: ${d.width * 0.16}px;
  width: ${d.width * 0.16}px;
  resize-mode: contain;
`;

const BrandText = styled.Text`
  color: ${color.grayLight};
  font-weight: 900;
  margin-top: ${d.width * 0.05}px;
  font-size: ${d.px * 14}px;
`;

const NameText = styled.Text`
  color: ${color.grayDark};
  font-weight: 900;
  margin-top: ${d.width * 0.02}px;
  font-size: ${d.px * 17}px;
`;

interface Props {
  brand: string;
  name: string;
}
const Product = ({ brand, name }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <Image source={require('~/img/condom.png')} />
      </ImageContainer>
      <BrandText>{brand}</BrandText>
      <NameText>{name}</NameText>
    </Container>
  );
};

export default Product;
