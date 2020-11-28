import * as React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

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
import { eventUtil } from '~/utils/firebase/event';

interface Props {
  route: RouteProp<ProductStackParamList, 'ReviewUpload2'>;
}

const ReviewUpload2 = ({ route }: Props) => {
  const { productInfo } = route.params;

  const _isFilledReviewUpload2 = useSelector(
    (state: RootState) => state.product.reviewUpload.isFilledReviewUpload2,
  );

  React.useEffect(() => {
    eventUtil.logScreenView(eventUtil.ReviewUpload2_Recommend_Gener);
  }, []);

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        btnTextBeforeFilled={'추천도와 성별 정보를 부탁드려요'}
        stack={'ProductStack'}
        screen={'ReviewUpload3'}
        isFilled={_isFilledReviewUpload2}
        params={{ productInfo }}
      >
        <TopBarBackArrow />
        <ProductBarForReviewUpload productInfo={productInfo} />
        <LineGrayMiddle />
        <MarginMedium />
        <ScrollView>
          <ReviewUploadScore productId={productInfo.id} />
          <MarginNarrow />
          <LineGrayMiddle />
          <MarginMedium />
          <ReviewUploadGender productId={productInfo.id} />
          <MarginBottom />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload2;
