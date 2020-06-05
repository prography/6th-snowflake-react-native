import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '~/modules/auth';
import { d, c, l, BASE_URL } from '~/utils/constant';
import {
  State,
  setUserEmail,
  setUserPassword1,
  setUserPassword2,
  setUserName,
  setUserBirthYear,
  setUserGender,
  setUserPartnerGender,
} from '~/modules/join/userInfoReducer';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import GenderCircle from '~/components/universal/profile/GenderCircle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginMedium from '~/components/universal/margin/MarginMedium';
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

const Join4 = ({ navigation, route }) => {
  const {signUpEmail, signUpPassword, signUpName, signUpYear, signUpGender, signUpPartnerGender} = route.params;

  const noticeList = ["1. 한 사람을, 사물을, 현상을 단 하나의 관점에서만 본다면 그것에 숨겨진 무한한 세계를 발견할 수 없다.\n",
  "2. 과학과 예술은 서로를 경유해 새로운 의미를 찾아낸다. 과학자는 우주에서 시를 발견하고 디자이너는 글자의 아름다움에 관한 법칙을 쓴다.\n",
  "3. 서로 다른 영역에서 출발한 선이 무수히 교차하는 지점들이 펼쳐진다.\n",
  "4. 각 다른 분야의 전문가들이 이처럼 공통된 창의력을 발휘한다는 점이 큰 충격으로 다가왔다.\n",
  "5. “낯선 언어는 인식을 확장한다.”는 말처럼, 두 저자의 기막힌 만남이 “뜻밖의 연결을 만들어”내면서 빛을 발하고 있다.\n",
  "6. 매우 크리에이티브해서 맘껏 칭찬하고 싶다.\n"];

  const dispatch = useDispatch();
  const _login = (email: string, password: string) => {
    console.log('😸5. 회원가입 성공 후 로그인 액션 호출');
    dispatch(requestLogin(email, password));
  };

  // const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  // useEffect(() => {
  //   _isLoggedin ? navigation.navigate('HomeStack') : null;
  // }, [_isLoggedin]);

  const _signup = async () => {
    
    console.log('😸1. _signup 호출됨')
    const email = signUpEmail;
    const password = signUpPassword;
    const username = signUpName;
    const birth_year = signUpYear;
    const gender = signUpGender
    // console.log(typeof gender);
    const partner_gender = signUpPartnerGender;
      
    // 아래 두 줄은 로그인만 테스트해보고 싶을 때
    // _login(email, password)
    // return

    try {
      console.log('😸2. /accounts 회원가입 api 호출');
      const response = await fetch(`${BASE_URL}/accounts/`, {
        // 뒤에 슬래시 꼭 붙여야함
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
          birth_year,
          gender,
          partner_gender
        }),
      });

      const json = await response.json();
      console.log('😸3. /accounts 회원가입 api 응답 확인');
      switch (response.status) {
        case 201:
          console.log('😸4. /accounts 회원가입 성공!!', response.status, json);
          // 회원가입 성공하면 바로 로그인 ㄱㄱ
          _login(email, password);
          navigation.navigate('HomeStack')
          break;
        case 400:
          console.log('😸4. /accounts 회원가입 실패.. ', response.status, json);
          break;
        default:
          console.log('😸4. /accounts 회원가입 실패.. ', response.status, json);
          break;
      }
    } catch (error) {
      console.log('😸. /accounts 회원가입 오류 catch.. ', error);
    }
  };
    
  return (
    <>
      <BottomBtnCollectData
        btnText={'동의하고 시작하기'}
        stack={'HomeStack'}
        screen={'HomeMain'}
        isFilled={true}
        onPressFunction={_signup}
      >
        <TopBarBackArrowRightIcon />
        <WelcomeText>{signUpName}님, 환영합니다.</WelcomeText>
        <MarginMedium/>
        <NoiceTitleText>서로 존중하는 깨끗한 눈송이 문화를 위해</NoiceTitleText>
        <MarginNarrow/>
        <NoiceTitleText>다음 내용을 반드시 숙지해주세요.</NoiceTitleText>
        <MarginWide/>
        {noticeList.map(notice => {
          return <NoticeText>{notice}</NoticeText>
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