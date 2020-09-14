import * as React from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import { useSelector, useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';

import { setReviewUProductId, setScoreTemp } from '~/store/modules/product/reviewUpload';
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
  const { productId } = route.params;
  const dispatch = useDispatch();
  const _isFilledReviewUpload1 = useSelector(
    (state: RootState) => state.product.reviewUpload.isFilledReviewUpload1,
  );

  const _thicknessScore = useSelector(
    (state: RootState) => state.product.reviewUpload.thicknessScore,
  );
  const _durabilityScore = useSelector(
    (state: RootState) => state.product.reviewUpload.durabilityScore,
  );
  const _oilyScore = useSelector(
    (state: RootState) => state.product.reviewUpload.oilyScore,
  );

  // const _pressFunc = () => {
  //   dispatch(setScoreTemp(
  //     productId,
  //     _thicknessScore,
  //     _durabilityScore,
  //     _oilyScore
  //   ))
  // }

  useEffect(() => {
    productId === null ? null : [dispatch(setReviewUProductId(productId))];
  });

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
