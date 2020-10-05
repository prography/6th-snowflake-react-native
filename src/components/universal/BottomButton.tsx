import * as React from 'react';
import styled from 'styled-components/native';

import { d, c } from '~/utils/constant';

interface Props {
  children: React.ReactNode;
  navigateHome: () => void;
}

const Screen = styled.View`
  flex: 1;
  background-color: white;
`;

const Container = styled.TouchableOpacity`
  height: ${d.height / 11}px;
  width: ${d.width}px;
  position: absolute;
  bottom: 0px;
  flex: 1;
  flex-direction: row;
  background-color: ${c.lightGray};
  padding-top: ${d.px * 10}px;
  justify-content: center;
`;

const Title = styled.Text`
  color: white;
  font-size: ${d.px * 15}px;
  font-weight: 400;
`;

const BottomButton = ({ children, navigateHome }: Props) => {
  return (
    <Screen>
      {children}
      <Container onPress={navigateHome}>
        <Title>눈송이 시작하기</Title>
      </Container>
    </Screen>
  );
};

export default BottomButton;
