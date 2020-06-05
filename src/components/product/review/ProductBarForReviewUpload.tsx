import * as React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '~/utils/constant';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';

interface Props {
  productId: number;
  navigation: any;
}

const Container = styled.View`
  height: ${d.px * 70}px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 ${l.mR}px;
`;
const ProductImage = styled.Image`
  width: ${d.px * 45}px;
  height: ${d.px * 50}px;
`;
const ImageWrapper = styled.View`
  width: ${l.lW}px;
  justify-content: center;
  align-items: flex-start;
`;

const TextWrapper = styled.View`
  justify-content: center;
`;

const ProductBarForReviewUpload = ({ productId }: Props) => {
  const [_productInfo, _setProductInfo] = useState(null);

  const _getProductInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/condom/${productId}/`);
      const json = await response.json();
      console.log('🎃review upload - product info success', _productInfo);
      _setProductInfo(json);
    } catch (error) {
      console.log('🎃review upload - product info error', error);
    }
  };

  useEffect(() => {
    _getProductInfo();
  }, []);

  const blindState = useSelector(
    (state: State) => state.blindReducer.blindState
  );
  return (
    <Container>
      <ImageWrapper>
        <ProductImage
          style={{ resizeMode: 'contain' }}
          source={
            blindState
              ? require('~/img/doodle/doodleCdBoxMintPurpleHeart.png')
              : _productInfo.image === null
              ? require('~/img/icon/imageNull.png')
              : { uri: _productInfo.image }
          }
        />
      </ImageWrapper>
      <TextWrapper>
        <TextProductCompany
          productCompany={
            _productInfo === null ? 'Loading...' : _productInfo.manufacturer_kor
          }
        />
        <TextProductName
          productName={
            _productInfo === null ? 'Loading...' : _productInfo.name_kor
          }
        />
      </TextWrapper>
    </Container>
  );
};

export default ProductBarForReviewUpload;
