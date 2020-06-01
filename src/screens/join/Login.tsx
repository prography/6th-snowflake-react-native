import * as React from 'react';
import { useState } from 'react';
import { c, d, l } from '~/utils/constant';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import NavBar from '~/screens/NavBar';
import BottomBtnCollectData from '~/components/universal/bottomBar/BottomBtnCollectData';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
const Container = styled.View`
  margin: 0 ${l.mR}px;
`;
const LoginInfoInput = styled.TextInput``;
const Login = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  return (
    <BottomBtnCollectData
      btnText={'로그인'}
      onPressFunction={() => alert('로그인 기능을 추가해 봅시다')}
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

export default Login;
