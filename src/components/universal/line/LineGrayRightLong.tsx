import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

const Container = styled.View`
  width: ${d.width - d.px * 30}px;

  border-style: solid;
  border-width: ${d.px * 0.2}px;
  border-bottom-color: ${c.extraLightGray};
`;

const LineGrayRightLong = () => {
  return <Container />;
};
export default LineGrayRightLong;
