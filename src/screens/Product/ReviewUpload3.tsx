import * as React from 'react';
import { useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import { useSelector, useDispatch } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

import { BASE_URL } from '~/utils/constant';
import { resetReviewUploadStore } from '~/store/modules/product/reviewUpload';
import Blinder from '~/components/product/Blinder';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductBarForReviewUpload from '~/components/product/review/ProductBarForReviewUpload';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ReviewUploadContent from '~/containers/product/review/ReviewUploadContent';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import { AsyncAccessToken } from '~/utils/asyncStorage';
import { RootState } from '~/store/modules';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';

interface Props {
  navigation: StackNavigationProp<ProductStackParamList, 'ReviewUpload3'>;
}

const ReviewUpload3 = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const _isFilledReviewUpload3 = useSelector(
    (state: RootState) => state.product.reviewUpload.isFilledReviewUpload3,
  );
  const _reviewUploadProductId = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewUploadProductId,
  );
  const _reviewContent = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewContent,
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
  const _myGender = useSelector(
    (state: RootState) => state.product.reviewUpload.myGender,
  );
  const _partnerGender = useSelector(
    (state: RootState) => state.product.reviewUpload.partnerGender,
  );

  const _score = useSelector(
    (state: RootState) => state.product.reviewUpload.score,
  );

  const { getItem: getTokenItem } = useAsyncStorage(AsyncAccessToken);

  const _reviewUpload = async () => {
    console.log('🎃1_reviewUpload 호출');
    const product = _reviewUploadProductId;
    const total = _score;
    const oily = _oilyScore;
    const thickness = _thicknessScore;
    const durability = _durabilityScore;
    const gender = _myGender;
    const partner_gender = _partnerGender;
    const content = _reviewContent;

    try {
      const token = await getTokenItem();
      console.log('🎃2_reviews 업로드 api 호출 with token:', token);
      if (!token) { Alert.alert('❄️', '로그인 후 이용해주세요!'); return; }

      const response = await fetch(`${BASE_URL}/reviews/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product,
          total,
          oily,
          thickness,
          durability,
          gender,
          partner_gender,
          content,
        }),
      });
      const json = await response.json();
      console.log('🎃3_reviews 업로드도 반응이 오나요?', json);
      dispatch(resetReviewUploadStore());
      navigation.navigate('ProductStack', { screen: 'ProductMain' });
    } catch (error) {
      console.log('🎃 review업로드 안 됐다리', error);
    }
  };

  useEffect(() => {
    analytics().setCurrentScreen("ReviewUpload3_Write_Review");
  }, []);

  return (
    <>
      <BottomBtnCollectData
        isFilled={_isFilledReviewUpload3}
        stack={'ProductStack'}
        screen={'ProductMain'}
        btnText={'소중한 리뷰 감사드립니다'}
        btnTextBeforeFilled={'15자 이상 입력해주세요.'}
        onPressFunction={_reviewUpload}
      >
        <TopBarBackArrow />
        <ProductBarForReviewUpload productId={_reviewUploadProductId} />
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
