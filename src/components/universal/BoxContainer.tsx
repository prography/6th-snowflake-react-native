import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { device } from '../../utils/constant';

const Container = styled.View`
  height: ${device.width / 2}px;
  width: ${device.width * 0.9}px;
  background-color: white;
  shadow-color: "#000";
  shadow-offset: {
      width: 10,
      height: 10,
  };
  shadow-opacity: 0.3;
  shadow-radius: 10;
  elevation: 10;
  border-radius:${device.width / 10}px;
`;

const BoxContainer = () => {
  return <Container />;
};

export default BoxContainer;
