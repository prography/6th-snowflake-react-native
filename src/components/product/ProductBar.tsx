import React from 'react';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import styled from 'styled-components';
import { device, color } from '../../utils/constant';

const Container = styled.View`
    height: ${device.width / 5}px
    width: ${device.width * 0.9}px
    flex-direction: row;
`;

const RankNumContainer = styled.View`
  flex: 0.7;
  justify-content: center;
`;
const RankNumText = styled.Text`
  color: ${color.mainDark};
  font-weight: 900;
`;
const ImageContainer = styled.View`
  flex: 1.5;

  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: ${device.width * 0.1}px
  height: ${device.width / 8}px
  
  resize-mode: contain;
`;
const NameContainer = styled.View`
  flex: 4;
  justify-content: center;
  padding: 0 ${device.px * 10}px;
`;
const CompanyText = styled.Text`
  color: ${color.grayLight};
  font-weight:700
  font-size: ${device.px * 11.5}px;
  margin-bottom: ${device.px * 4}px;
`;
const TitleText = styled.Text`
  font-weight: 500;
  font-size: ${device.px * 14}px;
`;
const StarContainer = styled.View`
  flex: 3;
  justify-content: center;
`;

const ProductBarSmall = () => {
  const productList = [
    { rankNum: 1, company: '바른 생각', title: '퍼펙트핏', star: 4 },
    { rankNum: 2, company: '이브', title: '울트라씬', star: 3 },
    { rankNum: 3, company: '듀렉스', title: '필 울트라씬', star: 2 },
  ];
  return (
    <>
      {productList.map((product) => {
        return (
          <Container>
            <RankNumContainer>
              <RankNumText>{product.rankNum}위</RankNumText>
            </RankNumContainer>
            <ImageContainer>
              <Image source={require('../../img/condom.png')} />
            </ImageContainer>
            <NameContainer>
              <CompanyText>{product.company}</CompanyText>
              <TitleText>{product.title}</TitleText>
            </NameContainer>
            <StarContainer>
              <Text>⭐️⭐️⭐️⭐️⭐️ </Text>
            </StarContainer>
          </Container>
        );
      })}
    </>
  );
};

export default ProductBarSmall;
