import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';

const Container = styled.View`
  height: ${d.px * 75}px;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const SnowFlake = styled.Image`
  height: ${d.px * 42}px;
  width: ${d.px * 42}px;
`;

const TopBarWithIcon = () => {
  return (
    <Container>
      <SnowFlake
        style={{ resizeMode: 'contain' }}
        source={require('~/img/logo.png')}
      />
    </Container>
  );
};

export default TopBarWithIcon;
