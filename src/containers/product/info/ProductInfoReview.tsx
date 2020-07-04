import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ReviewCardContainer from '../review/ReviewCardContainer';
import MarginWide from '~/components/universal/margin/MarginWide';
import ProductInfoReviewFilter from './ProductInfoReviewFilter';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;

  flex-direction: column;
`;

interface Props {
  reviewNum: number;
  productId: number;
}
const ProductInfoReview = ({ reviewNum, productId }: Props) => {
  const [reviewArray, setReviewArray] = useState(null);
  return (
    <>
      <Container>
        <TextProductMiddleBar
          title={'리뷰'}
          reviewNum={reviewNum}
          type={'review'}
        />
        <MarginWide />
        <ProductInfoReviewFilter
          reviewArray={reviewArray}
          setReviewArray={setReviewArray}
          productId={productId}
        />
        {reviewNum ? (
          <ReviewCardContainer
            productId={productId}
            reviewArray={reviewArray}
          />
        ) : null}
      </Container>
    </>
  );
};

export default ProductInfoReview;
