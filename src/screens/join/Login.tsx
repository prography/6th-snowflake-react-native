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
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const LoginInfoInput = styled.TextInput``;
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  console.log('_loggedin', _isLoggedin);
  useEffect(() => {
    _isLoggedin ? navigation.navigate('HomeStack') : null;
  }, _isLoggedin);
  const _login = (email: string, password: string) => {
    console.log('😸5... 로그인 액션 호출');
    dispatch(requestLogin(userEmail, userPassword));
  };
  return (
    <BottomBtnCollectData
      btnText={'로그인'}
      onPressFunction={_login}
      isFilled={true}
    >
      <Container>
        <TopBarWithIcon />
        <LoginInfoInput
          placeholder={'이메일 입력'}
          onChangeText={(text) => {
            setUserEmail(text);
          }}
        >
          {userEmail}
        </LoginInfoInput>
        <LoginInfoInput
          placeholder={'6자리 이상'}
          onChangeText={(text) => {
            setUserPassword(text);
          }}
        >
          {userPassword}
        </LoginInfoInput>
        <Text>입력한 이메일: {userEmail}</Text>
        <Text>입력한 비번: {userPassword}</Text>
      </Container>
    </BottomBtnCollectData>
  );
};

export default withNavigation(Login);
