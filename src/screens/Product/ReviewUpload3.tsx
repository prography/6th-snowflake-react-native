import * as React from 'react';
import { useState, useEffect } from 'react';
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
import { RouteProp } from '@react-navigation/native';

interface Props {
  navigation: StackNavigationProp<ProductStackParamList, 'ReviewUpload3'>;
  route: RouteProp<ProductStackParamList, 'ReviewUpload3'>;
}

const ReviewUpload3 = ({ navigation, route }: Props) => {
  const { productId } = route.params;

  const dispatch = useDispatch();
  const _isFilledReviewUpload3 = useSelector(
    (state: RootState) => state.product.reviewUpload.isFilledReviewUpload3,
  );

  //ReviewUpload1
  const [thicknessScore, setThicknessScore] = useState(0)
  const [durabilityScore, setDurabilityScore] = useState(0)
  const [oilyScore, setOilyScore] = useState(0)


  const reviewInfo1 = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo1
  )

  useEffect(() => {
    if (reviewInfo1) {
      const trio = reviewInfo1.find((item) => item.productId === productId);
      if (trio) {
        setThicknessScore(trio.thicknessScore);
        setDurabilityScore(trio.durabilityScore);
        setOilyScore(trio.oilyScore);
      }
    }
  }, [])


  //ReviewUpload2
  const reviewInfo2_score = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo2_score,
  );

  const reviewInfo2_myGender = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo2_myGender,
  );

  const reviewInfo2_partnerGender = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo2_partnerGender,
  );

  const [score, setScore] = useState(null)
  const [myGender, setMyGender] = useState(null)
  const [partnerGender, setPartnerGender] = useState(null)


  useEffect(() => {
    if (reviewInfo2_score) {
      const scoreInfo = reviewInfo2_score.find((item) => item.productId === productId);
      if (scoreInfo) {
        setScore(scoreInfo.score);
      }
    }

    if (reviewInfo2_myGender) {
      const myGenderInfo = reviewInfo2_myGender.find((item) => item.productId === productId);
      if (myGenderInfo) {
        setMyGender(myGenderInfo.myGender);
      }
    }

    if (reviewInfo2_partnerGender) {
      const partnerGenderInfo = reviewInfo2_partnerGender.find((item) => item.productId === productId);
      if (partnerGenderInfo) {
        setPartnerGender(partnerGenderInfo.partnerGender);
      }
    }
  }, [])


//ReviewUpload3
  const reviewInfo3 = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewInfo3
  )

  const [reviewContent, setReviewContent] = useState(null)

  useEffect(() => {
    if (reviewInfo3) {
      const content = reviewInfo3.find((item) => item.productId === productId);
      if (content) {
        setReviewContent(content.reviewContent);
      }
    }
  }, [reviewInfo3])

console.log('🎹나와라', myGender, reviewContent)

  const { getItem: getTokenItem } = useAsyncStorage(AsyncAccessToken);

  const _reviewUpload = async () => {
    console.log('🎃1_reviewUpload 호출');
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
        <ProductBarForReviewUpload productId={productId} />
        <LineGrayMiddle />
        <MarginMedium />

        <ScrollView>
          <ReviewUploadContent productId={productId}/>
        </ScrollView>
      </BottomBtnCollectData>
      <Blinder />
    </>
  );
};

export default ReviewUpload3;
