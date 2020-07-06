import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '~/navigation/RootTabNavigation';
import { d, c, l } from '~/utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import { UserId, AsyncAccessToken } from '~/utils/asyncStorage';
import { BASE_URL } from '~/utils/constant';
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

const ProductInfoBar = ({ children, navigation, productId }: Props) => {
  const [token, setToken] = useState(null);
  const [userIdFS, setUserIdFS] = useState(null);

  const _likeProduct = async () => {
    try {
      const _token = await AsyncStorage.getItem(AsyncAccessToken);
      const _userIdFS = await AsyncStorage.getItem(UserId);
      await setUserIdFS(_userIdFS);
      await setToken(_token);
      await console.log('1-1. 🍊like token 잘 가져옴 ', token);
      await console.log('1-2.🍊userId도...', userIdFS);
    } catch (e) {
      console.error('1. 🍊like error - token 안 가져와');
    }

    try {
      const model = 'product';
      const object_id = productId;
      const user = userIdFS;
      const response = await fetch(`${BASE_URL}/likes/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          model,
          object_id,
          user,
        }),
      });
      console.log('2. 🍊like post 성공! ', response);
    } catch (error) {
      console.log('2. 🍊like 에러 ', error);
    }
  };

  return (
    <Screen>
      {children}
      <Container>
        <Tab
          onPress={() => {
            _likeProduct();
          }}
        >
          <Title>찜하기</Title>
        </Tab>
        <Tab>
          <Title>공유하기</Title>
        </Tab>
        <Tab
          onPress={() => {
            navigation.navigate('ReviewUpload1', { productId: productId });
          }}
        >
          <Title>리뷰 쓰러 가기</Title>
        </Tab>
      </Container>
    </Screen>
  );
};

export default withNavigation(ProductInfoBar);
