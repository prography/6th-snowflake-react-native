import * as React from 'react';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { d, color } from '~/utils/constant';

const Container = styled.View`
  height: ${d.width / 5}px;
  width: ${d.width * 0.9}px;
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
  width: ${d.width * 0.1}px;
  height: ${d.width / 8}px;
  resize-mode: contain;
`;
const NameContainer = styled.View`
  flex: 4;
  justify-content: center;
  padding: 0 ${d.px * 10}px;
`;
const CompanyText = styled.Text`
  color: ${color.grayLight};
  font-weight: 700;
  font-size: ${d.px * 11.5}px;
  margin-bottom: ${d.px * 4}px;
`;
const TitleText = styled.Text`
  font-weight: 500;
  font-size: ${d.px * 14}px;
`;
const StarContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: flex-end;
`;

interface Props {
  company: string;
  title: string;
  rankNum: number;
}
const ProductBar = ({ company, title, rankNum }: Props) => {
  return (
    <Container>
      <RankNumContainer>
        <RankNumText>{rankNum}위</RankNumText>
      </RankNumContainer>
      <ImageContainer>
        <Image source={require('~/img/condom.png')} />
      </ImageContainer>
      <NameContainer>
        <CompanyText>{company}</CompanyText>
        <TitleText>{title}</TitleText>
      </NameContainer>
      <StarContainer>
        <Text>⭐️⭐️⭐️⭐️⭐️ </Text>
      </StarContainer>
    </Container>
  );
};

export default ProductBar;
