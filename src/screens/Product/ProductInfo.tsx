import * as React from 'react';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import Blinder from '~/components/product/Blinder';
import ProductInfoImage from '~/containers/product/info/ProductInfoImage';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductInfoNameManufacturer from '~/containers/product/info/ProductInfoNameManufacturer';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ProductInfoSpecific from '~/containers/product/info/ProductInfoSpecific';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const ProductInfo = () => {
  return (
    <>
      <NavBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarLeftIcon />
          <Container>
            <ProductInfoImage />
            <MarginMedium />
            <ProductInfoNameManufacturer />
            <MarginMedium />
            <LineGrayMiddle />
          </Container>
          <MarginMedium />

          <Container>
            <ProductInfoSpecific />
          </Container>
        </ScrollView>
        <MarginBottom />
      </NavBar>
      <Blinder />
      {/* Blinder: 스크린의 가장 마지막에 놓아주어야 터치가 됨*/}
    </>
  );
};

export default ProductInfo;
