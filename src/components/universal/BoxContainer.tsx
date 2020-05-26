import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { device } from '../../utils/constant';

const Container = styled.View`
  height: ${device.width / 2}px;
  width: ${device.width * 0.9}px;
  background-color: white;

  border-radius: ${device.width / 10}px;
`;

const BoxContainer = () => {
  return <Container />;
};

export default BoxContainer;
