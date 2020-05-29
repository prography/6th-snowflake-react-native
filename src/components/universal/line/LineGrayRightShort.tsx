import * as React from 'react';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';

const Container = styled.View`
  width: ${d.width - l.mR * 2 - l.lW}px;
  border-width: ${d.px * 0.3}px;
  border-color: ${c.extraLightGray};
`;

const LineGrayRightShort = () => {
  return <Container />;
};
export default LineGrayRightShort;
