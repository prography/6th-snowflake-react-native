import * as React from 'react';

import styled from 'styled-components/native';
import { d } from '~/utils/constant';

const Container = styled.View`
  margin-top: ${d.px * 105}px;
  flex-direction: row;
`;

const FirstMenuBox = styled.TouchableOpacity`
  margin-left: ${d.px * 35}px;
`;

const SecondMenuBox = styled.TouchableOpacity`
  margin-left: ${d.px * 47}px;
`;

const ThirdMenuBox = styled.TouchableOpacity`
  margin-left: ${d.px * 48}px;
`;

const FourthMenuBox = styled.TouchableOpacity`
  margin-left: ${d.px * 49}px;
`;

const MenuText = styled.Text`
  font-size: ${d.px * 15}px;
`;

const MenuBar = () => {
  return (
    <Container>
      <FirstMenuBox>
        <MenuText>모두</MenuText>
      </FirstMenuBox>
      <SecondMenuBox>
        <MenuText>제품</MenuText>
      </SecondMenuBox>
      <ThirdMenuBox>
        <MenuText>살험실</MenuText>
      </ThirdMenuBox>
      <FourthMenuBox>
        <MenuText>상담소</MenuText>
      </FourthMenuBox>
    </Container>
  );
};

export default MenuBar;
