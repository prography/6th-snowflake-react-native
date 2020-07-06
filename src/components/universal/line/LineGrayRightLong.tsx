import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

const Container = styled.View`
  width: ${d.width - d.px * 30}px;
  border-width: ${d.px * 0.3}px;
  border-color: ${c.extraLightGray};
  margin-left: ${d.px * 30}px;
  height: 1px;
`;

const LineGrayRightLong = () => {
  return <Container />;
};
export default LineGrayRightLong;
