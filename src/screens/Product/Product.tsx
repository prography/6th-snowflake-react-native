import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import { device } from '../../utils/constant';
import TopBar from '../../components/universal/TopBar';
import BoxContainer from '../../components/universal/BoxContainer';
import TitleText from '../../components/universal/TitleText';
import ProductBarSmall from '../../components/ranking/ProductBarSmall';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0 ${device.width * 0.05}px;
`;

const Product = () => {
  return (
    <Container>
      <TopBar />
      <BoxContainer />
      <TitleText title={'총점 TOP 3'} />
      <ProductBarSmall />
      <TitleText title={'콘돔 핵심 트리오'} />
    </Container>
  );
};

export default Product;
