import * as React from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '~/modules/product/reviewUpload/reviewUploadReducer';
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

const ReviewUpload1 = () => {
  const ProductInfo = {
    key: 0,
    rankNum: 1,
    productCompany: '듀렉스',
    productName: '필 울트라씬',
    imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
    score: 4.97,
  };
  const _isFilledReviewUpload1 = useSelector(
    (state: State) => state.reviewUploadReducer.isFilledReviewUpload1
  );
  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'ProductStack'}
        screen={'ReviewUpload2'}
        isFilled={_isFilledReviewUpload1}
        btnTextBeforeFilled={'콘돔 삼박자를 평가해주세요'}
      >
        <TopBarBackArrow />
        <ProductBarForReviewUpload
          productCompany={ProductInfo.productCompany}
          productName={ProductInfo.productName}
          imageUri={ProductInfo.imageUri}
        />
        <LineGrayMiddle />
        <MarginMedium />
        <ScrollView>
          <ReviewUploadTrioScore />
          <MarginBottom />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload1;
