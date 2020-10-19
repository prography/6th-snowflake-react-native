import * as React from 'react';
import { useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import { useSelector, useDispatch } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { resetReviewUploadStore, InitalReviewInfo } from '~/store/modules/product/reviewUpload';
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
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';

interface Props {
  navigation: StackNavigationProp<ProductStackParamList, 'ReviewUpload3'>;
  route: RouteProp<ProductStackParamList, 'ReviewUpload3'>;
}

const ReviewUpload3 = ({ navigation, route }: Props) => {
  const { productInfo } = route.params;
  const { id: productId } = productInfo;

  const dispatch = useDispatch();
  const _isFilledReviewUpload3 = useSelector(
    (state: RootState) => state.product.reviewUpload.isFilledReviewUpload3,
  );

  const {
    reviewInfo1,
    reviewInfo2_score,
    reviewInfo2_myGender,
    reviewInfo2_partnerGender,
    reviewInfo3,
  } = useSelector(
    (state: RootState) => state.product.reviewUpload
  );

  const {
    thicknessScore,
    durabilityScore,
    oilyScore,
  } = reviewInfo1.find((item) => item.productId === productId) || InitalReviewInfo._1;
  const { score } = reviewInfo2_score.find((item) => item.productId === productId) || InitalReviewInfo._2_score;
  const { myGender } = reviewInfo2_myGender.find((item) => item.productId === productId) || InitalReviewInfo._2_myGender;
  const { partnerGender } = reviewInfo2_partnerGender.find((item) => item.productId === productId) || InitalReviewInfo._2_partnerGender;
  const { reviewContent } = reviewInfo3.find((item) => item.productId === productId) || InitalReviewInfo._3;

  const { getItem: getTokenItem } = useAsyncStorage(AsyncAccessToken);

  const _reviewUpload = async () => {
    llog('🎃1_reviewUpload 호출');
    const product = productId;
    const total = score;
    const oily = oilyScore;
    const thickness = thicknessScore;
    const durability = durabilityScore;
    const gender = myGender;
    const partner_gender = partnerGender;
    const content = reviewContent;

    try {
      const token = await getTokenItem();
      llog('🎃2_reviews 업로드 api 호출 with token:', token);
      if (!token) { Alert.alert('❄️', '로그인 후 이용해주세요!'); return; }

      const { status } = await fetchAPI('reviews/', {
        method: 'POST',
        token,
        params: {
          product,
          total,
          oily,
          thickness,
          durability,
          gender,
          partner_gender,
          content,
        },
      });

      if (status === 201) {
        dispatch(resetReviewUploadStore(productId));
        navigation.navigate('ProductMain');
      }
    } catch (error) {
      llog('🎃 review업로드 안 됐다리', error);
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
        <ProductBarForReviewUpload productInfo={productInfo} />
        <LineGrayMiddle />
        <MarginMedium />

        <ScrollView>
          <ReviewUploadContent productId={productId} />
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload3;
