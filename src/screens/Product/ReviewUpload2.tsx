import * as React from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import analytics from "@react-native-firebase/analytics";

import { d, l } from '~/utils/constant';
import { State } from '~/modules/product/reviewUpload/reviewUploadReducer';
import ProductInfoBar from '~/components/universal/bottomBar/product/ProductInfoBar';
import Blinder from '~/components/product/Blinder';
import RankBar from '~/components/product/ranking/RankBar';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductBarForReviewUpload from '~/components/product/review/ProductBarForReviewUpload';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ReviewUploadTrioScore from '~/containers/product/review/ReviewUploadTrioScore';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import ProductReviewBar2 from '~/components/universal/bottomBar/product/ProductReviewBar2';
import ReviewUploadScoreGender from '~/containers/product/review/ReviewUploadScore';
import ReviewUploadScore from '~/containers/product/review/ReviewUploadScore';
import ReviewUploadGender from '~/containers/product/review/ReviewUploadGender';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ReviewUpload2 = () => {
  const _isFilledReviewUpload2 = useSelector(
    (state: State) => state.reviewUploadReducer.isFilledReviewUpload2
  );
  const _reviewUploadProductId = useSelector(
    (state: State) => state.reviewUploadReducer.reviewUploadProductId
  );

  React.useEffect(() => {
    analytics().setCurrentScreen("ReviewUpload2_Recommend_Gener");
  }, []);

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        btnTextBeforeFilled={'추천도와 성별 정보를 부탁드려요'}
        stack={'ProductStack'}
        screen={'ReviewUpload3'}
        isFilled={_isFilledReviewUpload2}
      >
        <TopBarBackArrow />
        <ProductBarForReviewUpload productId={_reviewUploadProductId} />
        <LineGrayMiddle />
        <MarginMedium />
        <ScrollView>
          <ReviewUploadScore />
          <MarginNarrow />
          <LineGrayMiddle />
          <MarginMedium />
          <ReviewUploadGender />
          <MarginBottom />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload2;
