import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import analytics from "@react-native-firebase/analytics";
import { StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import { c, d, l } from '~/utils/constant';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import LinePurpleWhenFocused from '~/components/universal/line/LinePurpleWhenFocused';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { llog } from '~/utils/functions';
import { JoinStackParamList } from '~/navigation/tabs/JoinStack';
import { RootState } from '~/store/modules';
import { loginAC } from '~/store/modules/join/auth';

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
  const [userEmail, setUserEmail] = useState<string>(__DEV__ ? '12@12.com' : null);
  const [userPassword, setUserPassword] = useState<string>(
    __DEV__ ? '12@12.com' : null
  );
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const [emailFocus, handleEmailFocus] = useState<boolean>(false);
  const [passwordFocus, handlePasswordFocus] = useState<boolean>(false);
  const _isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);
  llog('_loggedin', _isLoggedin);

  useEffect(() => {
    _isLoggedin ? navigation.dispatch(StackActions.popToTop()) : null;
  }, [_isLoggedin]);
  useEffect(() => {
    userEmail && userPassword ? setIsFilled(true) : setIsFilled(false);
  }, [userEmail, userPassword]);

  // 임시로 사가 대신 그냥 여기에서 처리.
  const _login = async () => {
    dispatch(loginAC.request({
      email: userEmail,
      password: userPassword,
    })); // saga 쓸 때는 다시 이거로 쓰기
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
