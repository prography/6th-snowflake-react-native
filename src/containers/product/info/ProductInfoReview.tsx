import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, l } from '~/utils/constant';
import TextProductSpecificTitle from '~/components/universal/text/product/info/TextProductSpecificTitle';
import TextProductSpecificContent from '~/components/universal/text/product/info/TextProductSpecificContent';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextProductScoreBig from '~/components/universal/text/product/info/TextProductScoreBig';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ReviewCardContainer from '../review/ReviewCardContainer';

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
        <ReviewCardContainer />
      </Container>
    </>
  );
};

export default ProductInfoReview;
