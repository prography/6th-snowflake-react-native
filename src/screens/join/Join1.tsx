import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinePurpleWhenFocused from '~/components/universal/line/LinePurpleWhenFocused';

import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { d, c, l, BASE_URL } from '~/utils/constant';

import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import MarginWide from '~/components/universal/margin/MarginWide';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const InputContainer = styled.View``;
const GuideTextWrapper = styled.View`
  flex-direction: row;
`;
const JoinGuideText = styled.Text`
  font-family: Jost-Light;
  font-size: ${d.px * 15}px;
  color: ${(props) => (props.focused ? c.purple : c.lightGray)};
  margin-right: ${d.px * 5}px;
`;
const WarningText = styled.Text`
  color: ${c.purple};
  font-family: Jost-Bold;
  font-size: ${d.px * 13}px;
`;
const JoinInfoInput = styled.TextInput`
  font-family: Jost-Bold;
  font-size: ${d.px * 23}px;
  font-family: 'Jost-Bold';
  color: ${c.darkGray};
`;

const Join1 = () => {
  const dispatch = useDispatch();
  const [isFilled, setIsFilled] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [emailDuplicateCheck, setEmailDuplicateCheck] = useState(true);
  const [passwordInput, setPasswordInput] = useState('');
  const [checkPasswordInput, setCheckPasswordInput] = useState('');
  const [emailFocus, handleEmailFocus] = useState(false);
  const [passwordFocus, handlePasswordFocus] = useState(false);
  const [checkPasswordFocus, handleCheckPasswordFocus] = useState(false);
  const [checkPasswordWarning, setCheckPasswordWarning] = useState(false);
  useEffect(() => {
    setIsFilled(
      emailInput && passwordInput === checkPasswordInput ? true : false
    );
  }, [emailInput, passwordInput, checkPasswordInput]);

  useEffect(() => {
    _checkEmailDuplicate();
  }, [emailInput]);

  const _checkEmailDuplicate = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/accounts/check-duplicates/email/?value=${emailInput}`
      );
      const json = await response.json();
      console.log(
        '🧢이메일 중복 체크 성공적으로',
        json.message,
        '🧢중복상태:',
        emailDuplicateCheck
      );
      json.message === 'no email duplicates :)'
        ? setEmailDuplicateCheck(false)
        : setEmailDuplicateCheck(true);
    } catch (error) {
      console.log('🧢이메일 중복 체크 실패', error);
    }
  };

  const checkPassword = () => {
    passwordInput === ''
      ? setCheckPasswordWarning(false)
      : checkPasswordInput === ''
      ? setCheckPasswordWarning(false)
      : passwordInput === checkPasswordInput
      ? setCheckPasswordWarning(false)
      : setCheckPasswordWarning(true);
  };

  useEffect(() => {
    checkPassword();
  }, [passwordInput, checkPasswordInput]);
  const JoinInputArray = [
    {
      guideText: '이메일',
      placeholder: '이메일 입력',
      onChangeTextFunction: setEmailInput,
      handleFocusFunction: handleEmailFocus,
      inputContent: emailInput,
      focused: emailFocus,
      isPassword: false,
      warningText: '* 중복된 이메일입니다.',
      warning: false,
    },
    {
      guideText: '비밀번호',
      placeholder: '6자리 이상',
      onChangeTextFunction: setPasswordInput,
      handleFocusFunction: handlePasswordFocus,
      inputContent: passwordInput,
      focused: passwordFocus,
      isPassword: true,
      warningText: '* 중복된 이메일입니다.',
      warning: false,
    },
    {
      guideText: '비밀번호 확인',
      placeholder: '6자리 이상',
      onChangeTextFunction: setCheckPasswordInput,
      handleFocusFunction: handleCheckPasswordFocus,
      inputContent: checkPasswordInput,
      focused: checkPasswordFocus,
      isPassword: true,
      warningText: '* 비밀번호가 일치하지 않습니다.',
      warning: checkPasswordWarning,
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
        params={{ signUpEmail: emailInput, signUpPassword: passwordInput }}
      >
        <Container>
          <TopBarWithIcon />
          {JoinInputArray.map((data) => {
            return (
              <>
                <InputContainer>
                  <GuideTextWrapper>
                    <JoinGuideText focused={data.focused}>
                      {data.guideText}
                    </JoinGuideText>
                    {data.warning ? (
                      <WarningText>{data.warningText}</WarningText>
                    ) : null}
                  </GuideTextWrapper>
                  <MarginNarrow />
                  <JoinInfoInput
                    placeholder={data.placeholder}
                    placeholderTextColor={c.extraLightGray}
                    secureTextEntry={data.isPassword}
                    onChangeText={(text) => {
                      data.onChangeTextFunction(text);
                    }}
                    onFocus={() => {
                      data.handleFocusFunction(true);
                    }}
                    onBlur={() => {
                      data.handleFocusFunction(false);
                    }}
                  >
                    {data.inputContent}
                  </JoinInfoInput>
                  <LinePurpleWhenFocused focused={data.focused} />
                </InputContainer>
                <MarginWide />
                <MarginWide />
              </>
            );
          })}
        </Container>
      </BottomBtnCollectData>
    </>
  );
};

export default Join1;
