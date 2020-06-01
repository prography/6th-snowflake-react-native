import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { requestLogin } from '~/modules/auth';
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const OneInfoContainer = styled.View``;
const GuideTextArea = styled.View`
  flex-direction: row;
`;
const GuideText = styled.Text``;
const WarningText = styled.Text``;
const UserInfoInput = styled.TextInput``;
const Join1 = () => {
  const dispatch = useDispatch();
  const _userEmail = useSelector(
    (state: State) => state.userInfoReducer.userEmail
  );
  const _setUserEmail = (userEmail: State) => {
    dispatch(setUserEmail(userEmail));
  };
  const _userPassword1 = useSelector(
    (state: State) => state.userInfoReducer.userPassword1
  );
  const _setUserPassword1 = (userPassword1: State) => {
    dispatch(setUserPassword1(userPassword1));
  };
  const _userPassword2 = useSelector(
    (state: State) => state.userInfoReducer.userPassword2
  );
  const _setUserPassword2 = (userPassword2: State) => {
    dispatch(setUserPassword2(userPassword2));
  };
  const _userName = useSelector(
    (state: State) => state.userInfoReducer.userName
  );
  const _setUserName = (userName: State) => {
    dispatch(setUserName(userName));
  };
  const _userBirthYear = useSelector(
    (state: State) => state.userInfoReducer.userBirthYear
  );
  const _setUserBirthYear = (userBirthYear: State) => {
    dispatch(setUserBirthYear(userBirthYear));
  };
  const _userGender = useSelector(
    (state: State) => state.userInfoReducer.userGender
  );
  const _setUserGender = (userGender: State) => {
    dispatch(setUserGender(userGender));
  };
  const _userPartnerGender = useSelector(
    (state: State) => state.userInfoReducer.userGender
  );
  const _setUserPartnerGender = (userPartnerGender: State) => {
    dispatch(setUserPartnerGender(userPartnerGender));
  };
  const [isFilled, setIsFilled] = useState(false);
  useEffect(() => {
    setIsFilled(_userEmail && _userPassword1 && _userPassword2 ? true : false);
  }, [_userEmail, _userPassword1, _userPassword2]);
  const JoinList = [
    {
      guideText: '이메일',
      warningText: '* 중복된 이메일입니다.',
      infoGiven: _userEmail,
      placeholder: '이메일 입력',
      function: _setUserEmail,
      autoCompleteType: 'email',
      textContentType: 'emailAddress',
    },
    {
      guideText: '비밀번호',
      warningText: '* 일치하지 않습니다',
      infoGiven: _userPassword1,
      placeholder: '6자리 이상',
      function: _setUserPassword1,
      autoCompleteType: 'password',
      textContentType: 'newPassword',
    },
    {
      guideText: '비밀번호 확인',
      warningText: '* 일치하지 않습니다',
      infoGiven: _userPassword2,
      placeholder: '6자리 이상',
      function: _setUserPassword2,
      autoCompleteType: 'password',
      textContentType: 'newPassword',
    },
  ];

  const _login = (email: string, password: string) => {
    console.log('😸5. 회원가입 성공 후 로그인 액션 호출')
    dispatch(requestLogin(email, password))
  }

  const _signup = async () => {



    console.log('😸1. _signup 호출됨')
    const email = 'd@d3.com'
    const password = '1111'
    const username = 'dahee983'

    // 아래 두 줄은 로그인만 테스트해보고 싶을 때
    // _login(email, password)
    // return

    try {
      console.log('😸2. /accounts 회원가입 api 호출')
      const response = await fetch(`${BASE_URL}/accounts/`, { // 뒤에 슬래시 꼭 붙여야함
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });

      const json = await response.json()
      console.log('😸3. /accounts 회원가입 api 응답 확인')
      switch (response.status) {
        case 201:
          console.log('😸4. /accounts 회원가입 성공!!', response.status, json)
          // 회원가입 성공하면 바로 로그인 ㄱㄱ
          _login(email, password)
          break;
        case 400:
          console.log('😸4. /accounts 회원가입 실패.. ', response.status, json)
          break;
        default:
          console.log('😸4. /accounts 회원가입 실패.. ', response.status, json)
          break;
      }
    } catch (error) {
      console.log('😸. /accounts 회원가입 오류 catch.. ', error)
    }





  }

  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join2'}
        isFilled={isFilled}
        onPressFunction={_signup}
      >
        <Container>
          <TopBarWithIcon />
          {JoinList.map((info) => {
            return (
              <OneInfoContainer>
                <GuideTextArea>
                  <GuideText>{info.guideText}</GuideText>
                  <WarningText>{info.warningText}</WarningText>
                </GuideTextArea>
                <UserInfoInput
                  autoCompleteType={info.autoCompleteType}
                  textContentType={info.textContentType}
                  placeholder={info.placeholder}
                  onChangeText={(text) => info.function(text)}
                >
                  {info.infoGiven}
                </UserInfoInput>
                <MarginWide />
              </OneInfoContainer>
            );
          })}

          <Text>수집된 이메일:</Text>
          <Text>{_userEmail}</Text>
          <Text>수집된 비번1:</Text>
          <Text>{_userPassword1}</Text>
          <Text>수집된 비번2:</Text>
          <Text>{_userPassword2}</Text>
        </Container>
      </BottomBtnCollectData>
    </>
  );
};

export default Join1;
