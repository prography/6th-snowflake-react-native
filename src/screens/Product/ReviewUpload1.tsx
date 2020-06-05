import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import {
  State,
  setReviewUProductId,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import { useSelector, useDispatch } from 'react-redux';

import Blinder from '~/components/product/Blinder';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductBarForReviewUpload from '~/components/product/review/ProductBarForReviewUpload';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ReviewUploadTrioScore from '~/containers/product/review/ReviewUploadTrioScore';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ReviewUpload1 = ({ route }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const _isFilledReviewUpload1 = useSelector(
    (state: State) => state.reviewUploadReducer.isFilledReviewUpload1
  );
  const _setReviewUploadProductId = (reviewUploadProductId: State) => {
    dispatch(setReviewUProductId(reviewUploadProductId));
  };

  useEffect(() => {
    productId === null ? null : [_setReviewUploadProductId(productId)];
  });
  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'ProductStack'}
        screen={'ReviewUpload2'}
        isFilled={_isFilledReviewUpload1}
        btnTextBeforeFilled={'콘돔 삼박자를 평가해주세요'}
        params={{ productId: productId }}
      >
        <TopBarBackArrow />
        <ProductBarForReviewUpload productId={productId} />
        <LineGrayMiddle />
        <MarginMedium />
        <ScrollView>
          <ReviewUploadTrioScore productId={productId} />
          <MarginBottom />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload1;
