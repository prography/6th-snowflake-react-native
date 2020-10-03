import * as React from 'react';
import { ScrollView } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import { useSelector } from 'react-redux';
import { RouteProp } from '@react-navigation/native';

import Blinder from '~/components/product/Blinder';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductBarForReviewUpload from '~/components/product/review/ProductBarForReviewUpload';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ReviewUploadTrioScore from '~/containers/product/review/ReviewUploadTrioScore';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import { RootState } from '~/store/modules';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';

interface Props {
  route: RouteProp<ProductStackParamList, 'ReviewUpload1'>;
}

const ReviewUpload1 = ({ route }: Props) => {
  const { productInfo } = route.params;
  const _isFilledReviewUpload1 = useSelector(
    (state: RootState) => state.product.reviewUpload.isFilledReviewUpload1,
  );

  React.useEffect(() => {
    analytics().setCurrentScreen("ReviewUpload1_Triple");
  }, []);

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'ProductStack'}
        screen={'ReviewUpload2'}
        isFilled={_isFilledReviewUpload1}
        btnTextBeforeFilled={'콘돔 삼박자를 평가해주세요'}
        params={{ productInfo }}
      >
        <TopBarBackArrow />
        <ProductBarForReviewUpload productInfo={productInfo} />
        <LineGrayMiddle />
        <MarginMedium />
        <ScrollView>
          <ReviewUploadTrioScore productId={productInfo.id} />
          <MarginBottom />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload1;
