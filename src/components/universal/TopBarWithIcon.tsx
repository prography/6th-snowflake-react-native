import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { device } from '../../utils/constant';

const Container = styled.View`
  height: ${device.height / 12}px;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const SnowFlake = styled.Image`
  height: ${device.px * 42}px;
  width: ${device.px * 42}px;
  resize-mode: contain;
`;

const TopBarWithIcon = () => {
  return (
    <Container>
      <SnowFlake source={require('../../img/logo.png')} />
    </Container>
  );
};

export default TopBarWithIcon;
