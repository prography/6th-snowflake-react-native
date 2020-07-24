import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { d, c, l, BASE_URL, isAndroid } from '~/utils/constant';
import KakaoLogins from '@react-native-seoul/kakao-login';
import analytics from "@react-native-firebase/analytics";

import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import { withNavigation } from '@react-navigation/compat';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import { llog2, llog1 } from '~/utils/functions';
import { KakaoLoginResponse } from '~/utils/interface';
import { StackNavigationProp } from '@react-navigation/stack';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';

const JOIN_BOX_HEIGHT = d.px * 50;
const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const JoinContainer = styled.View`
  margin: 0 ${l.mR}px;
`;
const JoinBox = styled.TouchableOpacity`
  width: 100%;
  height: ${JOIN_BOX_HEIGHT}px;
  background-color: ${(props) =>
    props.guide === 'email' ? c.purple : 'white'};
  justify-content: center;
  align-items: center;
  margin-bottom: ${d.px * 8}px;
  border-color: ${c.extraLightGray};
  border-style: solid;
  border-width: ${d.px * 1}px;
`;
const JoinText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${(props) => (props.guide === 'email' ? 'white' : c.darkGray)};
  margin-right: ${d.px * 5}px;
  line-height: ${JOIN_BOX_HEIGHT}px;
`;

interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'JoinScreen'>;
}

const JoinScreen = ({ navigation }: Props) => {
  const _signInWithKakao = async () => {
    try {
      llog1('🥎 카카오 가입을 해보자');
      const result: KakaoLoginResponse = await KakaoLogins.login();
      llog2('🥎 카카오 서버와 통신', result);
      // const result = { accessToken: 'aa' }
      // const result = null

      //카카오로 accessToken을 받으면
      if (result) {
        const response = await fetch(
          `${BASE_URL}/accounts/social/kakao-login-callback?access_token=${result.accessToken}`,
          {
            method: 'POST',
          }
        );

        const json = await response.json();
        llog2('🥎 카카오 가입 api,', json);

        navigation.navigate('JoinStack', {
          screen: 'Join2',
          params: { _token: json.access, socialJoin: true },
        });
      } else {
        throw Error;
      }
    } catch (error) {
      llog2('💢 kakao error', error);
      Alert.alert('오류', '카카오 로그인 실패');
    }
  };

  const joinArray = [
    {
      guideText: '이메일로 가입하기',
      guide: 'email',
      screen: 'Join1',
      function: 'none',
      img: 'none',
      key: 0,
    },
    {
      guideText: '카카오로 가입하기',
      guide: 'kakao',
      screen: 'JoinWithKakao',
      function: _signInWithKakao,
      img: 'kakao',
      key: 1,
    },
    {
      guideText: '애플 로그인으로 가입하기',
      guide: 'apple',
      screen: 'JoinWithApple',
      function: 'signInWithApple',
      img: 'apple',
      key: 2,
    },
  ];

  React.useEffect(() => {
    analytics().setCurrentScreen("JoinScreen");
  }, []);

  return (
    <>
      <Container>
        <TopBarBackArrowRightIcon />
        {joinArray.map((join, index: number) => {
          // apple login은 iOS 기기에만 보여준다
          if (join.guide === 'apple' && isAndroid) {
            return null
          }
          return (
            <JoinContainer key={index}>
              <JoinBox
                guide={join.guide}
                activeOpacity={1}
                onPress={() => {
                  join.function === 'none'
                    ? navigation.navigate('JoinStack', { screen: join.screen })
                    : join.function();
                }}
              >
                <JoinText guide={join.guide}>{join.guideText}</JoinText>
              </JoinBox>
            </JoinContainer>
          );
        })}
      </Container>
    </>
  );
};

export default withNavigation(JoinScreen);
