import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ReviewCardContainer from '../review/ReviewCardContainer';
import MarginWide from '~/components/universal/margin/MarginWide';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;

  flex-direction: column;
`;

const ProductInfoReview = () => {
  const ProductInfo = {
    reviewNum: 27,
  };

  return (
    <>
      <Container>
        <TextProductMiddleBar
          title={'리뷰'}
          reviewNum={ProductInfo.reviewNum}
        />
        <MarginWide />
        <ReviewCardContainer />
      </Container>
    </>
  );
};

export default ProductInfoReview;