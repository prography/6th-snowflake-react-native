import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';

const Container = styled.View`
  height: ${d.px * 8}px;
  width: 100%;
`;

const MarginNarrow = () => {
  return <Container />;
};
export default MarginNarrow;