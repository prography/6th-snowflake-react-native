import * as React from 'react';
import styled from 'styled-components/native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import analytics from "@react-native-firebase/analytics";
import { StackActions, RouteProp } from '@react-navigation/native';

import { loginAC } from '~/store/modules/join/auth';
import { d, c, l } from '~/utils/constant';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const OneLineWrapper = styled.View`
  flex-direction: row;
`;

const WelcomeText = styled.Text`
  margin-left: ${d.px * 20}px;
  font-family: 'Jost-Semi';
  font-size: ${d.px * 27}px;
  color: ${c.darkGray};
`;

const NoiceTitleText = styled.Text`
  margin-left: ${d.px * 20}px;
  font-family: 'Jost-Bold';
  font-size: ${d.px * 16}px;
  color: ${c.darkGray};
`;

const NoticeText = styled.Text`
  margin-left: ${d.px * 20}px;
  font-family: 'Jost-Semi';
  font-size: ${d.px * 15}px;
  color: ${c.darkGray};
`;

const LeftMargin = styled.View`
  margin-left: ${l.mR}px;
`;
interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'Join4'>;
  route: RouteProp<JoinStackParamList, 'Join4'>;
}
const Join4 = ({ navigation, route }: Props) => {
  const {
    signUpEmail,
    signUpPassword,
    signUpName,
    signUpYear,
    signUpGender,
    signUpPartnerGender,
    _token,
    socialJoin,
  } = route.params;

  const noticeList = ['눈송이 성명서 coming soon...'];

  const dispatch = useDispatch();
  const _login = (email: string, password: string) => {
    llog('😸5. 회원가입 성공 후 로그인 액션 호출');
    dispatch(loginAC.request(email, password));
  };

  const _socialSignup = async () => {
    llog('1.🥎 social token 으로 user 정보 업데이트 호출');
    const username = signUpName;
    const birth_year = signUpYear;
    const gender = signUpGender;
    const partner_gender = signUpPartnerGender;

    try {
      const { status, response } = await fetchAPI('accounts/', {
        method: 'PATCH',
        token: _token,
        params: {
          username,
          birth_year,
          gender,
          partner_gender
        },
      });
      const json = await response.json();
      llog('2.🥎 social token 으로 user 정보 업데이트 결과는?', response, json);
      switch (status) {
        case 200:
          navigation.navigate('SettimgMain');
          return;
        default:
          alert('회원가입 처리중 오류가 발생했어요');
          return;
      }
    } catch (error) {
      llog('🥎🥎. social token 유저 정보 업데이트 실패', error);
    }
  };

  const _signup = async () => {
    llog('😸1. _signup 호출됨');
    const email = signUpEmail;
    const password = signUpPassword;
    const username = signUpName;
    const birth_year = signUpYear;
    const gender = signUpGender;
    // llog(typeof gender);
    const partner_gender = signUpPartnerGender;

    // 아래 두 줄은 로그인만 테스트해보고 싶을 때
    // _login(email, password)
    // return

    try {
      llog('😸2. /accounts 회원가입 api 호출');
      const { status, response } = await fetchAPI('accounts/', {
        // 뒤에 슬래시 꼭 붙여야함
        method: 'POST',
        params: {
          email,
          password,
          username,
          birth_year,
          gender,
          partner_gender,
        },
      });

      const json = await response.json();
      llog('😸3. /accounts 회원가입 api 응답 확인');
      switch (status) {
        case 201:
          llog('😸4. /accounts 회원가입 성공!!', response.status, json);
          // 회원가입 성공하면 바로 로그인 ㄱㄱ
          _login(email, password);
          navigation.dispatch(StackActions.popToTop());
          break;
        case 400:
          llog('😸4. /accounts 회원가입 실패.. ', response.status, json);
          break;
        default:
          llog('😸4. /accounts 회원가입 실패.. ', response.status, json);
          break;
      }
    } catch (error) {
      llog('😸. /accounts 회원가입 오류 catch.. ', error);
    }
  };

  useEffect(() => {
    analytics().setCurrentScreen("Join4_Our_Statement");
  }, []);

  return (
    <>
      <BottomBtnCollectData
        btnText={'동의하고 시작하기'}
        stack={'HomeStack'}
        screen={'HomeMain'}
        isFilled={true}
        onPressFunction={socialJoin ? _socialSignup : _signup}
      >
        <LeftMargin>
          <TopBarBackArrowRightIcon />
        </LeftMargin>
        <WelcomeText>{signUpName}님, 환영합니다.</WelcomeText>
        <MarginMedium />
        <NoiceTitleText>서로 존중하는 깨끗한 눈송이 문화를 위해</NoiceTitleText>
        <MarginNarrow />
        <NoiceTitleText>다음 내용을 반드시 숙지해주세요.</NoiceTitleText>
        <MarginWide />
        {noticeList.map((notice, index: number) => {
          return <NoticeText key={index}>{notice}</NoticeText>;
        })}
      </BottomBtnCollectData>
    </>
  );
};

export default Join4;

// onPress={() =>
//   onPressFunction ? onPressFunction() : isFilled
//       ? stack && screen
//         ? navigation.navigate(screen, params)
//         : null
//       : null
// }
