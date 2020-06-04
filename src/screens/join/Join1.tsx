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

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [checkPasswordInput, setCheckPasswordInput] = useState('');


  useEffect(() => {
    setIsFilled(emailInput && passwordInput && checkPasswordInput ? true : false);
  }, [emailInput, passwordInput, checkPasswordInput]);
  const JoinList = [
    {
      guideText: '이메일',
      warningText: '* 중복된 이메일입니다.',
      infoGiven: emailInput,
      placeholder: '이메일 입력',
      function: setEmailInput,
      autoCompleteType: 'email',
      textContentType: 'emailAddress',
    },
    {
      guideText: '비밀번호',
      warningText: '* 일치하지 않습니다',
      infoGiven: passwordInput,
      placeholder: '6자리 이상',
      function: setPasswordInput,
      autoCompleteType: 'password',
      textContentType: 'newPassword',
    },
    {
      guideText: '비밀번호 확인',
      warningText: '* 일치하지 않습니다',
      infoGiven: checkPasswordInput,
      placeholder: '6자리 이상',
      function: setCheckPasswordInput,
      autoCompleteType: 'password',
      textContentType: 'newPassword',
    },
  ];
  
  return (
    <>
      <BottomBtnCollectData
        btnText={'다음'}
        stack={'JoinStack'}
        screen={'Join2'}
        isFilled={isFilled}
        // onPressFunction={_signup}
        params={{ email: emailInput, password: passwordInput }}
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
                  onChangeText={info.function}
                  value={info.infoGiven}
                >
                </UserInfoInput>
                <MarginWide />
              </OneInfoContainer>
            );
          })}

          <Text>수집된 이메일:</Text>
          <Text>{emailInput}</Text>
          <Text>수집된 비번1:</Text>
          <Text>{passwordInput}</Text>
          <Text>수집된 비번2:</Text>
          <Text>{checkPasswordInput}</Text>
        </Container>
      </BottomBtnCollectData>
    </>
  );
};

export default Join1;
