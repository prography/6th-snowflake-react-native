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
import ReviewUploadContent from '~/containers/product/review/ReviewUploadContent';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ReviewUpload3 = () => {
  const _isFilledReviewUpload3 = useSelector(
    (state: State) => state.reviewUploadReducer.isFilledReviewUpload3
  );

  const ProductInfo = {
    key: 0,
    rankNum: 1,
    productCompany: '듀렉스',
    productName: '필 울트라씬',
    imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
    score: 4.97,
  };
  return (
    <>
      <BottomBtnCollectData
        isFilled={_isFilledReviewUpload3}
        stack={'ProductStack'}
        screen={'ProductMain'}
        btnText={'소중한 리뷰 감사드립니다'}
        btnTextBeforeFilled={'15자 이상 입력해주세요.'}
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
          <ReviewUploadContent />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload3;
