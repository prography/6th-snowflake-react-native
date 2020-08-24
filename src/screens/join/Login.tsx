import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import analytics from "@react-native-firebase/analytics";
import { withNavigation } from '@react-navigation/compat';
import { StackActions } from '@react-navigation/native';

import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import { c, d, l, BASE_URL } from '~/utils/constant';
import { requestLogin, setIsLoggedin } from '~/modules/auth/index';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import LinePurpleWhenFocused from '~/components/universal/line/LinePurpleWhenFocused';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { llog2, llog3 } from '~/utils/functions';
import { StackNavigationProp } from '@react-navigation/stack';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { AsyncAccessToken } from '~/utils/asyncStorage';

interface Props {
  navigation: StackNavigationProp<JoinStackParamList, 'Login'>;
}

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

const HeaderContainer = styled.View`
  margin-left: ${d.px * 3}px;
`;

// 다희 로그인: d@d.com / aaa111
const Login = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState(__DEV__ ? '12@12.com' : null);
  const [userPassword, setUserPassword] = useState(
    __DEV__ ? '12@12.com' : null
  );
  const [isFilled, setIsFilled] = useState(false);

  const [emailFocus, handleEmailFocus] = useState(false);
  const [passwordFocus, handlePasswordFocus] = useState(false);
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  llog2('_loggedin', _isLoggedin);

  useEffect(() => {
    _isLoggedin ? navigation.dispatch(StackActions.popToTop()) : null;
  }, [_isLoggedin]);
  useEffect(() => {
    userEmail && userPassword ? setIsFilled(true) : setIsFilled(false);
  }, [userEmail, userPassword]);

  const { setItem: setTokenItem } = useAsyncStorage(AsyncAccessToken);

  // 임시로 사가 대신 그냥 여기에서 처리.
  const _login = async () => {
    try {
      llog2('😸5... 로그인 액션 호출', userEmail);
      // dispatch(requestLogin(userEmail, userPassword)); // saga 쓸 때는 다시 이거로 쓰기

      const response = await fetch(`${BASE_URL}/api/token/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      });

      const json = await response.json();
      llog3("😸9-1. loginAPI response json", response, json);

      if (response.status !== 200) {
        llog2("response error", response.status);
        return;
      }

      const accessToken = json.access;
      if (accessToken === null) {
        alert("정보가 올바르지 않습니다. 다시 입력해주세요.");
        return;
      }

      // 2. accessToken을 AsyncStorage에 저장
      await setTokenItem(accessToken);

      // 3. isLoggedin 설정
      dispatch(setIsLoggedin(true));
    } catch (e) {
      llog2('💢 login error', e);
    }
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

  React.useEffect(() => {
    analytics().setCurrentScreen("Login");
  }, []);

  return (
    <BottomBtnCollectData
      btnText={'로그인'}
      onPressFunction={_login}
      isFilled={isFilled}
    >
      <Container>
        <HeaderContainer>
          <TopBarBackArrowRightIcon />
        </HeaderContainer>
        {LoginInputArry.map((data, index: number) => {
          return (
            <InputContainer key={index}>
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
              <MarginWide />
              <MarginWide />
            </InputContainer>
          );
        })}
        <MarginWide />
      </Container>
    </BottomBtnCollectData>
  );
};

export default Login;
