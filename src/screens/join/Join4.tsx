import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '~/modules/auth';
import { d, c, l, BASE_URL } from '~/utils/constant';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import { StackActions } from '@react-navigation/native';

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
  const {
    signUpEmail,
    signUpPassword,
    signUpName,
    signUpYear,
    signUpGender,
    signUpPartnerGender,
  } = route.params;

  const noticeList = ['눈송이 성명서 coming soon...'];

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
    console.log('😸1. _signup 호출됨');
    const email = signUpEmail;
    const password = signUpPassword;
    const username = signUpName;
    const birth_year = signUpYear;
    const gender = signUpGender;
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
          partner_gender,
        }),
      });

      const json = await response.json();
      console.log('😸3. /accounts 회원가입 api 응답 확인');
      switch (response.status) {
        case 201:
          console.log('😸4. /accounts 회원가입 성공!!', response.status, json);
          // 회원가입 성공하면 바로 로그인 ㄱㄱ
          _login(email, password);
          navigation.dispatch(StackActions.popToTop());
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
