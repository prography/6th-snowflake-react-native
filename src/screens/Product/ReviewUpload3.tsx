import * as React from 'react';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import { BASE_URL } from '~/utils/constant';
import { all, fork, takeLatest, call, put, take } from 'redux-saga/effects';
import { Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  State,
  resetReviewUploadStore,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import Blinder from '~/components/product/Blinder';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductBarForReviewUpload from '~/components/product/review/ProductBarForReviewUpload';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ReviewUploadContent from '~/containers/product/review/ReviewUploadContent';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import { AsyncAccessToken } from '~/utils/asyncStorage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ReviewUpload3 = ({ navigation }) => {
  const dispatch = useDispatch();
  const _isFilledReviewUpload3 = useSelector(
    (state: State) => state.reviewUploadReducer.isFilledReviewUpload3
  );
  const _reviewUploadProductId = useSelector(
    (state: State) => state.reviewUploadReducer.reviewUploadProductId
  );
  const _reviewContent = useSelector(
    (state: State) => state.reviewUploadReducer.reviewContent
  );
  const _thicknessScore = useSelector(
    (state: State) => state.reviewUploadReducer.thicknessScore
  );
  const _durabilityScore = useSelector(
    (state: State) => state.reviewUploadReducer.durabilityScore
  );
  const _oilyScore = useSelector(
    (state: State) => state.reviewUploadReducer.oilyScore
  );
  const _myGender = useSelector(
    (state: State) => state.reviewUploadReducer.myGender
  );
  const _partnerGender = useSelector(
    (state: State) => state.reviewUploadReducer.partnerGender
  );

  const _score = useSelector((state: State) => state.reviewUploadReducer.score);
  const [token, setToken] = useState(null);

  const _resetReviewUploadStore = () => {
    dispatch(resetReviewUploadStore());
  };

  const _getToken = async () => {
    try {
      const _token = await AsyncStorage.getItem(AsyncAccessToken);
      setToken(_token);
      console.log(token);
    } catch (e) {
      console.error('안 가져와');
    }
  };

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
      console.log('🎃2_reviews 업로드 api 호출 with token:', token);
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
      await _resetReviewUploadStore();
      await navigation.navigate('ProductStack', { screen: 'ProductMain' });
    } catch (error) {
      console.log('🎃 review업로드 안 됐다리', error);
    }
  };

  useEffect(() => {
    _getToken();
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
