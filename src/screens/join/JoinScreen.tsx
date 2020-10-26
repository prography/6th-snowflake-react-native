import * as React from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { StackActions } from '@react-navigation/native';
import KakaoLogins from '@react-native-seoul/kakao-login';
import { NaverLogin, getProfile, TokenResponse as NaverTokenResponse } from "@react-native-seoul/naver-login";

import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
  AppleAuthRequestResponse,
} from '@invertase/react-native-apple-authentication';

import { d, c, l, BASE_URL, isAndroid } from '~/utils/constant';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import { llog } from '~/utils/functions';
import { KakaoLoginResponse } from '~/utils/interface';
import { StackNavigationProp } from '@react-navigation/stack';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { manageLoginLogout } from '~/store/modules/join/auth';
import { eventUtil } from '~/utils/firebase/event';

interface JoinInfo {
  guideText: string;
  guide: 'email' | 'kakao' | 'apple' | 'naver';
  screen?: string;
  function: (() => Promise<void>) | 'none';
}

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

const iosKeys = {
  // test
  // kConsumerKey: "VC5CPfjRigclJV_TFACU",
  // kConsumerSecret: "f7tLFw0AHn",
  kConsumerKey: "uH3FW_nhGyuxxOcckFcp",
  kConsumerSecret: "E85tv_Brxc",
  kServiceAppName: "눈송이",
  kServiceAppUrlScheme: "naverlogin" // only for iOS
  // kServiceAppUrlScheme: "testapp" // only for iOS
};

const androidKeys = {
  // test
  // kConsumerKey: "QfXNXVO8RnqfbPS9x0LR",
  // kConsumerSecret: "6ZGEYZabM9",
  kConsumerKey: "uH3FW_nhGyuxxOcckFcp",
  kConsumerSecret: "E85tv_Brxc",
  kServiceAppName: "눈송이"
};

const naverInitials = {
  callback: 'http://snowflakeproduction-env.eba-qnph52vm.ap-northeast-2.elasticbeanstalk.com/accounts/social/naver-login-callback',
  ...isAndroid ? androidKeys : iosKeys,
};

const JoinScreen = ({ navigation }: Props) => {
  const _signInWithKakao = async () => {
    try {
      eventUtil.logEvent("press_kakao_login_btn");
      llog('🥎 카카오 가입을 해보자');
      const result: KakaoLoginResponse = await KakaoLogins.login();
      llog('🥎 카카오 서버와 통신', result);

      // login 관련만 이렇게 FormData를 넣기!
      const formdata = new FormData();
      formdata.append("access_token", result.accessToken);
      const requestOptions = {
        method: 'POST',
        body: formdata,
      };

      // 카카오로 accessToken을 받으면
      if (result) {
        const response = await fetch( // 여기는 그냥 fetch
          `${BASE_URL}/accounts/social/kakao-login-callback`,
          requestOptions,
        );

        const json = await response.json();
        llog('🥎 카카오 가입 response,', response);
        llog('🥎 카카오 가입 api,', json);

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
      llog('💢 kakao error', error);
      Alert.alert('오류', '카카오 로그인 실패');
    }
  };

  const _signInWithApple = async () => {
    try {
      eventUtil.logEvent("press_apple_login_btn");
      const appleAuthRequestResponse: AppleAuthRequestResponse = await appleAuth.performRequest(
        {
          requestedOperation: AppleAuthRequestOperation.LOGIN,
          requestedScopes: [AppleAuthRequestScope.FULL_NAME],
        },
      );

      llog(
        '🐒 appleLogin appleAuthRequestResponse',
        appleAuthRequestResponse,
        appleAuthRequestResponse.identityToken,
      );
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
        const { identityToken } = appleAuthRequestResponse;
        llog('🐒 Apple AUTHORIZED~~', identityToken);

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
        llog('🐒 Apple 가입 response,', response);
        llog('🐒 Apple 가입 api,', json);

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
      llog('💢 apple error', e);
      Alert.alert('오류', '애플 로그인 실패');
    }
  };


  const naverLogin = props => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        llog('🤢 naver token', token);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    });
  };
  const getUserProfile = async (accessToken: string) => {
    const profileResult = await getProfile(accessToken);
    if (profileResult.resultcode === "024") {
      Alert.alert("로그인 실패", profileResult.message);
      return;
    }
    console.log("profileResult", profileResult);
  };
  const _signInWithNaver = async () => {
    // 코드 미완.
    try {
      // const response = await fetch(`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverInitials.kConsumerKey}&redirect_uri=${naverInitials.callback}&state=DAHEE`);
      // const json = await response.json();
      // llog('🤢🤢 json', response.status, json);
      // return

      eventUtil.logEvent("press_naver_login_btn");
      llog('🤢 네이버 가입을 해보자');
      const result: NaverTokenResponse = await naverLogin(naverInitials);
      llog('🤢result', result.accessToken);
      // getUserProfile(result.accessToken);
      // ??

    } catch (error) {
      llog('💢 naver error', error);
      Alert.alert('오류', '네이버 로그인 실패');
    }
  };

  const joinArray: JoinInfo[] = [
    {
      guideText: '이메일로 가입하기',
      guide: 'email',
      screen: 'Join1',
      function: 'none',
    },
    {
      guideText: '카카오로 가입하기',
      guide: 'kakao',
      function: _signInWithKakao,
    },
    {
      guideText: '애플로 가입하기',
      guide: 'apple',
      function: _signInWithApple,
    },
    // {
    //   guideText: '네이버로 가입하기',
    //   guide: 'naver',
    //   function: _signInWithNaver,
    // },
  ];

  useEffect(() => {
    eventUtil.logScreenView("JoinScreen");
  }, []);

  return (
    <>
      <Container>
        <LeftMargin>
          <TopBarBackArrowRightIcon />
        </LeftMargin>
        {joinArray.map((join: JoinInfo, index: number) => {
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
                    ? navigation.navigate(join.screen)
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
