import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { d, l } from '~/utils/constant';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';
import { RootState } from '~/store/modules';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import { CondomProduct } from '~/api/interface';
import { Img } from '~/img';

interface Props {
  productInfo: CondomProduct;
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

const ProductBarForReviewUpload = ({ productInfo }: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );

  return (
    <Container>
      <ImageWrapper>
        {productInfo && (
          <ProductImage
            style={{ resizeMode: 'contain' }}
            source={
              blindState
                ? Img.doodle.cdBoxMintPurpleHeart
                : productInfo.image === null
                  ? Img.icon.null
                  : { uri: productInfo.image }
            }
          />
        )}
      </ImageWrapper>
      <TextWrapper>
        <TextProductCompany
          productCompany={
            productInfo === null ? 'Loading...' : productInfo.manufacturer_kor
          }
        />
        <TextProductName
          productName={
            productInfo === null ? 'Loading...' : productInfo.name_kor
          }
        />
      </TextWrapper>
    </Container>
  );
};

export default ProductBarForReviewUpload;
