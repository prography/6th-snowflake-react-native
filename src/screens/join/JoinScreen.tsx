import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import KakaoLogins from '@react-native-seoul/kakao-login';

import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
  AppleAuthRequestResponse,
} from '@invertase/react-native-apple-authentication';
import analytics from "@react-native-firebase/analytics";

import { d, c, l, BASE_URL, isAndroid } from '~/utils/constant';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import { llog2, llog1, llog3 } from '~/utils/functions';
import { KakaoLoginResponse } from '~/utils/interface';
import { StackNavigationProp } from '@react-navigation/stack';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { manageLoginLogout } from '~/store/modules/join/auth';

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

const LeftMargin = styled.View`
  margin-left: ${l.mR}px;
`;
interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'JoinScreen'>;
}

const JoinScreen = ({ navigation }: Props) => {
  const _signInWithKakao = async () => {
    try {
      analytics().logEvent("press_kakao_login_btn");
      llog1('🥎 카카오 가입을 해보자');
      const result: KakaoLoginResponse = await KakaoLogins.login();
      llog2('🥎 카카오 서버와 통신', result);

      // login 관련만 이렇게 FormData를 넣기!
      const formdata = new FormData();
      formdata.append("access_token", result.accessToken);
      const requestOptions = {
        method: 'POST',
        body: formdata,
      };

      // 카카오로 accessToken을 받으면
      if (result) {
        const response = await fetch(
          `${BASE_URL}/accounts/social/kakao-login-callback`,
          requestOptions,
        );

        const json = await response.json();
        llog2('🥎 카카오 가입 response,', response);
        llog2('🥎 카카오 가입 api,', json);

        switch (response.status) {
          case 200: // 이미 가입된 유저
            alert('이미 가입되어 있는 유저입니다 / 로그인 완료');
            // 바로 토큰 가지고 로그인 처리, stack top으로 이동
            // dispatch(manageLoginLogout(dispatch, true, accessToken));
            // navigation.dispatch(StackActions.popToTop());
            // toast도 메세지 준대
            // toast(`${json.message}`);
            break;
          case 201: // 새로 회원가입
            // TODO 이 Token은 어디 저장을 하나? 아니면 새로 나중에 회원가입 완료할 때 다시 하나?
            navigation.navigate('Join2', {
              _token: json.access, socialJoin: true,
            });
            break;
          case 400: // accessToken을 잘못 보냈을 때
          // access_token이 존재하지 않습니다.
          default:
            alert(`${response.status} / ${json.message}`);
            break;
        }
      } else {
        throw Error;
      }
    } catch (error) {
      llog2('💢 kakao error', error);
      Alert.alert('오류', '카카오 로그인 실패');
    }
  };

  const _signInWithApple = async () => {
    try {
      analytics().logEvent("press_apple_login_btn");
      const appleAuthRequestResponse: AppleAuthRequestResponse = await appleAuth.performRequest(
        {
          requestedOperation: AppleAuthRequestOperation.LOGIN,
          requestedScopes: [AppleAuthRequestScope.FULL_NAME],
        },
      );

      llog3(
        '🐒 appleLogin appleAuthRequestResponse',
        appleAuthRequestResponse,
        appleAuthRequestResponse.identityToken,
      );
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
        const { identityToken } = appleAuthRequestResponse;
        llog2('🐒 Apple AUTHORIZED~~', identityToken);

        // login 관련만 이렇게 FormData를 넣기!
        const formdata = new FormData();
        formdata.append("identity_token", identityToken);
        const requestOptions = {
          method: 'POST',
          body: formdata,
        };
        // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAxMzAyMjA3LCJqdGkiOiI5YzExNWZhM2FhMjc0MjUwYWM4Yjc1M2RlZTE1NGIzOSIsInVzZXJfaWQiOjEwNywidXNlcm5hbWUiOiJcdWM1NjBcdWQ1MGNcdWIyZTQiLCJzb2NpYWwiOiJBUFBMRSIsImJpcnRoX3llYXIiOjE5OTgsImdlbmRlciI6IldPTUFOIn0.j-436cd7lT6kYcTaWsUKPjGTfZnetjo1fjHuVE7oa54"
        // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…FOIn0.ZsnpxrtM2oJ-Mm5zLH_wmv8s4wGcm3pRE0sf6mCnw04
        const response = await fetch(`${BASE_URL}/accounts/social/apple-login-callback`, requestOptions);

        const json = await response.json();
        llog2('🐒 Apple 가입 response,', response);
        llog2('🐒 Apple 가입 api,', json);

        switch (response.status) {
          case 200: // 이미 가입된 유저
            alert('이미 가입되어 있는 유저입니다 / 로그인 완료');
            // 바로 토큰 가지고 로그인 처리, stack top으로 이동
            // dispatch(manageLoginLogout(dispatch, true, accessToken));
            // navigation.dispatch(StackActions.popToTop());
            // toast도 메세지 준대
            // toast(`${json.message}`);
            break;
          case 201: // 새로 회원가입
            // TODO 이 Token은 어디 저장을 하나? 아니면 새로 나중에 회원가입 완료할 때 다시 하나?
            navigation.navigate('Join2', {
              _token: json.access, socialJoin: true,
            });
            break;
          case 400: // accessToken을 잘못 보냈을 때
          // access_token이 존재하지 않습니다.
          default:
            alert(`${response.status} / ${json.message}`);
            break;
        }
      } else {
        throw Error;
      }
    } catch (e) {
      llog2('💢 apple error', e);
      Alert.alert('오류', '애플 로그인 실패');
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
      guideText: '애플로 가입하기',
      guide: 'apple',
      screen: 'JoinWithApple',
      function: _signInWithApple,
      img: 'apple',
      key: 2,
    },
  ];

  useEffect(() => {
    analytics().setCurrentScreen("JoinScreen");
  }, []);

  return (
    <>
      <Container>
        <LeftMargin>
          <TopBarBackArrowRightIcon />
        </LeftMargin>
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

export default JoinScreen;
