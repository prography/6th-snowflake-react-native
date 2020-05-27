import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';

const Container = styled.View`
  height: ${l.bottomBar}px;
  width: 100%;
`;

const MarginBottom = () => {
  return <Container />;
};
export default MarginBottom;
