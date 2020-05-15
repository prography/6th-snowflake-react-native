import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { device, color } from '../../utils/constant';
const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0 ${device.width * 0.05}px;
`;

const Ranking = () => {
  return (
    <Container>
      <Text>ji</Text>
    </Container>
  );
};

export default Ranking;
