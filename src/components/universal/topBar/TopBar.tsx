import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';

const Container = styled.View`
  height: ${d.height / 12}px;
  width: 100%;
  background-color: white;
`;

const TopBar = () => {
  return (
    <Container>
      <Text>이거슨 TopBar입니다</Text>
    </Container>
  );
};

export default TopBar;
