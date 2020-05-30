import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { d, l } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';

import MarginMedium from '~/components/universal/margin/MarginMedium';
import ProductInfoTrioScore from '../info/ProductInfoTrioScore';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import ReviewUploadTrioScoreBar from '~/containers/product/review/ReviewUploadTrioScoreBar';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
  flex-direction: column;
  align-items: center;
`;

interface State {
  _thicknessScore: string;
  thicknessScore: string;
  reviewUploadReducer: any;
}

const TrioReviewUploadContainer = () => {
  const _thicknessScore = useSelector(
    (state: State) => state.reviewUploadReducer.thicknessScore
  );
  const dispatch = useDispatch();
  const ProductInfo = {
    avgThickness: 3.2,
    avgDurability: 1.5,
    avgOily: 2.8,
  };
  console.log('두께:', _thicknessScore);
  return (
    <>
      <Container>
        <MarginMedium />
        <ReviewUploadTrioScoreBar
          avgOily={ProductInfo.avgOily}
          avgThickness={ProductInfo.avgThickness}
          avgDurability={ProductInfo.avgDurability}
        />
      </Container>
    </>
  );
};

export default TrioReviewUploadContainer;
