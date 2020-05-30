import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';

interface Props {
  rankNum: number;
  productCompany: string;
  productName: string;
  imageUri: string;
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

const ProductBarForReviewUpload = ({
  productCompany,
  productName,
  imageUri,
}: Props) => {
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
              : { uri: imageUri }
          }
        />
      </ImageWrapper>
      <TextWrapper>
        <TextProductCompany productCompany={productCompany} />
        <TextProductName productName={productName} />
      </TextWrapper>
    </Container>
  );
};

export default ProductBarForReviewUpload;
