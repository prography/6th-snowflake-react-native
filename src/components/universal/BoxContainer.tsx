import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d } from '../../utils/constant';

const Container = styled.View`
  height: ${d.width / 2}px;
  width: ${d.width * 0.9}px;
  background-color: white;

  border-radius: ${d.width / 10}px;
`;

const BoxContainer = () => {
  return <Container />;
};

export default BoxContainer;
