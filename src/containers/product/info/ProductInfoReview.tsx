import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ReviewCardContainer from '../review/ReviewCardContainer';
import MarginWide from '~/components/universal/margin/MarginWide';
import ProductInfoReviewFilter from './ProductInfoReviewFilter';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import { Review } from '~/api/interface';

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
  const [reviewArray, setReviewArray] = useState<Review[]>(null);
  return (
    <>
      <Container>
        <TextProductMiddleBar
          title={'리뷰'}
          reviewNum={reviewNum}
          type={'review'}
        />

        <ProductInfoReviewFilter
          setReviewArray={setReviewArray}
          productId={productId}
        />
        <MarginMedium />

        {reviewNum ? <ReviewCardContainer reviewArray={reviewArray} /> : null}
      </Container>
    </>
  );
};

export default ProductInfoReview;
