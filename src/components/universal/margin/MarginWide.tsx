import * as React from 'react';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';

const Container = styled.View`
  height: ${d.px * 33}px;
  width: 100%;
`;

const MarginWide = () => {
  return <Container />;
};
export default MarginWide;
