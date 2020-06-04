import * as React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '~/utils/constant';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import Blinder from '~/components/product/Blinder';
import ProductInfoImage from '~/containers/product/info/ProductInfoImage';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductInfoNameManufacturer from '~/containers/product/info/ProductInfoNameManufacturer';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ProductInfoSpecific from '~/containers/product/info/ProductInfoSpecific';
import ProductInfoScore from '~/containers/product/info/ProductInfoScore';
import ProductInfoReview from '~/containers/product/info/ProductInfoReview';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import ProductInfoBar from '~/components/universal/bottomBar/product/ProductInfoBar';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const ProductInfo = () => {
  const [productId, setProductId] = useState(2);

  const _getProductInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/condom/${productId}/`);
      const json = await response.json();
      console.log('🍒 product info success', json);
    } catch (error) {
      console.log('🍒product info error', error);
    }
  };

  useEffect(() => {
    _getProductInfo();
  }, []);
  return (
    <>
      <ProductInfoBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarBackArrow />
          <Container>
            <ProductInfoImage />
            <MarginMedium />
            <ProductInfoNameManufacturer />
            <MarginMedium />
            <LineGrayMiddle />
            <MarginMedium />
            <ProductInfoSpecific />
            <MarginMedium />
            <LineGrayMiddle />
            <MarginMedium />
            <ProductInfoScore />
            <MarginMedium />
            <LineGrayMiddle />
            <MarginMedium />
            <ProductInfoReview />
          </Container>
        </ScrollView>
        <MarginBottom />
      </ProductInfoBar>
      <Blinder />
      {/* Blinder: 스크린의 가장 마지막에 놓아주어야 터치가 됨*/}
    </>
  );
};

export default ProductInfo;
