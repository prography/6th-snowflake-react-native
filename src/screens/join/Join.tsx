import * as React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { View, Text } from 'react-native';
import NavBar from '~/screens/NavBar';
import { c, d, l } from '~/utils/constant';
import TopBarWithIcon from '~/components/universal/topBar/TopBarRightIcon';
import EmailInput from '~/components/universal/input/EmailInput'
import PasswdInput from '~/components/universal/input/PasswdInput';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const Join = () => {
  return (
    <NavBar>
      <Container>
        <TopBarWithIcon/>
        <Text>이메일</Text>
        <EmailInput/>
        <Text>비밀번호</Text>
        <PasswdInput/>
      </Container>
    </NavBar>
  );
};

export default Join;
