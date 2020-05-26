import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';

const Container = styled.View`
  height: ${d.height / 12}px;
  width: 100%;
  margin-left: ${d.px * 30}px;
  align-items: flex-start;
  justify-content: center;
`;

const SnowFlake = styled.Image`
  height: ${d.px * 42}px;
  width: ${d.px * 42}px;
  resize-mode: contain;
`;

const TopBarLeftIcon = () => {
  return (
    <Container>
      <SnowFlake source={require('~/img/logo.png')} />
    </Container>
  );
};

export default TopBarLeftIcon;
