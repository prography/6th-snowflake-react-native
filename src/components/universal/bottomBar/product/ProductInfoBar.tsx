import * as React from 'react';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';
import analytics from "@react-native-firebase/analytics";

import { RootTabParamList } from '~/navigation/RootTabNavigation';
import { d, c, l } from '~/utils/constant';
import { AsyncAccessToken, getTokenItem } from '~/utils/asyncStorage';
import { BASE_URL } from '~/utils/constant';
import { useSelector } from 'react-redux';
import { llog } from '~/utils/functions';
import { RootState } from '~/store/modules';
import { fetchAPI } from '~/api';

interface Props {
  children: React.ReactNode;
  navigation: StackNavigationProp<RootTabParamList>;
  productId: number;
}

const Screen = styled.View`
  flex: 1;
  background-color: white;
`;

const Container = styled.View`
  height: ${l.bottomBar}px;
  width: ${d.width}px;
  position: absolute;
  bottom: 0px;
  flex: 1;
  flex-direction: row;
  background-color: white;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding-top: ${d.px * 10}px;
`;
const Title = styled.Text`
  color: ${c.darkGray};
  font-size: ${d.px * 12}px;
`;

const HeartIcon = styled.Image`
  width: ${d.px * 30}px;
  height: ${d.px * 20}px;
`;

const ProductInfoBar = ({ children, navigation, productId }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likedId, setLikedId] = useState(null);
  const _isLoggedin = useSelector((state: RootState) => state.auth.isLoggedin);

  const _likeProduct = async () => {
    try {
      const token = await getTokenItem();
      if (!token) { Alert.alert('❄️', '로그인 후 이용해주세요!'); return; }

      llog('1-1.🍊like 생성 위한 token 잘 가져옴 ', token);
      const response = await fetch(`${BASE_URL}/likes/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          model: 'product',
          object_id: productId,
        }),
      });
      llog('2. 🍊like post 성공! ', response);

      await _checkIsLiked();
    } catch (error) {
      llog('🍊like 생성 에러 ', error);
    }
  };

  const _deleteLiked = async () => {
    try {
      const token = await getTokenItem();
      if (!token) { Alert.alert('❄️', '로그인 후 이용해주세요!'); return; }

      const url = `${BASE_URL}/likes/${likedId}/`;
      const delteLike = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (delteLike.status === 204) {
        llog('4. 🍊like 삭제 성공', delteLike);
        await _checkIsLiked();
      }
    } catch (error) {
      llog('🍊like 에러 ', error);
    }
  };
  const _checkIsLiked = async () => {
    try {
      const token = await getTokenItem();
      if (!token) { Alert.alert('❄️', '로그인 후 이용해주세요!'); return; }

      const responseIsLiked = await fetch(
        `${BASE_URL}/likes/?model=product&object_id=${productId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseIsLikedJson = await responseIsLiked.json();
      await setIsLiked(responseIsLikedJson.results.length === 0 ? false : true);
      await console.log('3-1. 🍊like 조회 ', responseIsLikedJson);
      console.log(
        '3-2. 🍊like가 되었다면, 그 id',
        responseIsLikedJson.results.length === 0
          ? 'like 안 돼서 없음'
          : responseIsLikedJson.results[0].id
      );
      responseIsLikedJson.results.length === 0
        ? setLikedId(null)
        : setLikedId(responseIsLikedJson.results[0].id);
    } catch (error) {
      llog('🍊like 에러 ', error);
    }
  };

  useEffect(() => {
    _checkIsLiked();
  }, []);
  return (
    <Screen>
      {children}
      <Container>
        <Tab
          onPress={() => {
            if (_isLoggedin) {
              if (isLiked) {
                analytics().logEvent("press_delete_like", { productId });
                _deleteLiked()
              } else {
                analytics().logEvent("press_like", { productId });
                _likeProduct()
              }
            } else {
              Alert.alert(
                '❄️',
                '마이 탭에서 회원 가입 후 \n 찜 기능을 이용해보세요!'
              );
            }
          }}
        >
          <HeartIcon
            resizeMode="contain"
            source={
              isLiked
                ? require('~/img/icon/iconHeartBlack.png')
                : require('~/img/icon/iconHeartWhite.png')
            }
          />
        </Tab>
        {/* <Tab>
          <Title>공유하기</Title>
        </Tab> */}
        <Tab
          onPress={() => {
            if (_isLoggedin) {
              analytics().logEvent("press_review_upload", { productId });
              navigation.navigate('ReviewUpload1', { productId });
            } else {
              Alert.alert(
                '❄️',
                '마이 탭에서 회원 가입 후 \n 리뷰 작성 부탁드려요!'
              );
            }
          }}
        >
          <Title>리뷰 쓰러 가기</Title>
        </Tab>
      </Container>
    </Screen>
  );
};

export default withNavigation(ProductInfoBar);
