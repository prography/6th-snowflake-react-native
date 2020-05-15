import React from 'react';
import styled from 'styled-components';
import { device, color } from '../../utils/constant';

const Container = styled.View`
  width: 100%;
  height: ${device.width * 0.8}px;
  background-color: white;
  border-bottom-left-radius: ${device.px * 60}px;
  border-bottom-right-radius: ${device.px * 60}px;
`;

const Test = () => {
  return <Container />;
};

export default Test;
