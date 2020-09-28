import * as React from 'react';
import {useState} from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import analytics from "@react-native-firebase/analytics";

import { d, l } from '~/utils/constant';
import Blinder from '~/components/product/Blinder';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductBarForReviewUpload from '~/components/product/review/ProductBarForReviewUpload';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import ReviewUploadScore from '~/containers/product/review/ReviewUploadScore';
import ReviewUploadGender from '~/containers/product/review/ReviewUploadGender';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import { RootState } from '~/store/modules';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import { RouteProp } from '@react-navigation/native';

interface Props {
  route: RouteProp<ProductStackParamList, 'ReviewUpload2'>;
}

const ReviewUpload2 = ({ route }: Props) => {
  const { productId } = route.params;
  
  const _isFilledReviewUpload2 = useSelector(
    (state: RootState) => state.product.reviewUpload.isFilledReviewUpload2,
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
        params={{ productId: productId }}
      >
        <TopBarBackArrow />
        <ProductBarForReviewUpload productId={productId} />
        <LineGrayMiddle />
        <MarginMedium />
        <ScrollView>
          <ReviewUploadScore productId={productId}/>
          <MarginNarrow />
          <LineGrayMiddle />
          <MarginMedium />
          <ReviewUploadGender productId={productId}/>
          <MarginBottom />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload2;
