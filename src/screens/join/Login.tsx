import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { c, d, l, BASE_URL } from '~/utils/constant';
import { requestLogin } from '~/modules/auth/index';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import NavBar from '~/screens/NavBar';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import { withNavigation } from '@react-navigation/compat';
import LinePurpleWhenFocused from '~/components/universal/line/LinePurpleWhenFocused';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { StackActions } from '@react-navigation/native';

const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const InputContainer = styled.View``;
const LoginGuideText = styled.Text`
  font-family: Jost-Light;
  font-size: ${d.px * 15}px;
  color: ${c.lightGray};
  color: ${(props) => (props.focused ? c.purple : c.lightGray)};
`;
const LoginInfoInput = styled.TextInput`
  font-family: Jost-Bold;
  font-size: ${d.px * 23}px;
  color: ${c.darkGray};
`;
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [isFilled, setIsFilled] = useState(false);

  const [emailFocus, handleEmailFocus] = useState(false);
  const [passwordFocus, handlePasswordFocus] = useState(false);
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  console.log('_loggedin', _isLoggedin);
  useEffect(() => {
    _isLoggedin ? navigation.dispatch(StackActions.popToTop()) : null;
  }, [_isLoggedin]);
  useEffect(() => {
    userEmail && userPassword ? setIsFilled(true) : setIsFilled(false);
  }, [userEmail, userPassword]);
  const _login = (email: string, password: string) => {
    console.log('😸5... 로그인 액션 호출');
    dispatch(requestLogin(userEmail, userPassword));
  };

  const LoginInputArry = [
    {
      guideText: '이메일',
      placeholder: '이메일 입력',
      onChangeTextFunction: setUserEmail,
      handleFocusFunction: handleEmailFocus,
      inputContent: userEmail,
      focused: emailFocus,
      isPassword: false,
    },
    {
      guideText: '비밀번호',
      placeholder: '6자리 이상',
      onChangeTextFunction: setUserPassword,
      handleFocusFunction: handlePasswordFocus,
      inputContent: userPassword,
      focused: passwordFocus,
      isPassword: true,
    },
  ];
  return (
    <BottomBtnCollectData
      btnText={'로그인'}
      onPressFunction={_login}
      isFilled={isFilled}
    >
      <Container>
        <TopBarWithIcon />
        {LoginInputArry.map((data) => {
          return (
            <>
              <InputContainer>
                <LoginGuideText focused={data.focused}>
                  {data.guideText}
                </LoginGuideText>
                <MarginNarrow />
                <LoginInfoInput
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
                </LoginInfoInput>
                <LinePurpleWhenFocused focused={data.focused} />
              </InputContainer>
              <MarginWide />
              <MarginWide />
            </>
          );
        })}

        <MarginWide />
      </Container>
    </BottomBtnCollectData>
  );
};

export default withNavigation(Login);
