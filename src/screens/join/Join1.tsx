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
const JoinGuideText = styled.Text`
  font-family: Jost-Light;
  font-size: ${d.px * 15}px;
  color: ${c.lightGray};
`;
const JoinInfoInput = styled.TextInput`
  font-family: Jost-Bold;
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
`;

const Join1 = () => {
  const dispatch = useDispatch();

  const [isFilled, setIsFilled] = useState(false);

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [checkPasswordInput, setCheckPasswordInput] = useState('');
  const [emailFocus, handleEmailFocus] = useState(false);
  const [passwordFocus, handlePasswordFocus] = useState(false);
  const [checkPasswordFocus, handleCheckPasswordFocus] = useState(false);
  useEffect(() => {
    setIsFilled(
      emailInput && passwordInput && checkPasswordInput ? true : false
    );
  }, [emailInput, passwordInput, checkPasswordInput]);
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
    },
    {
      guideText: '비밀번호 확인',
      placeholder: '6자리 이상',
      onChangeTextFunction: setCheckPasswordInput,
      handleFocusFunction: handleCheckPasswordFocus,
      inputContent: checkPasswordInput,
      focused: checkPasswordFocus,
      isPassword: true,
      warningText: '* 중복된 이메일입니다.',
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
                  <JoinGuideText>{data.guideText}</JoinGuideText>
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
