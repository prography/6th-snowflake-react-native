import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d } from '~/utils/constant';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0 ${d.width * 0.05}px;
`;

const Ranking = () => {
  return (
    <Container>
      <Text>ji</Text>
    </Container>
  );
};

export default Ranking;
