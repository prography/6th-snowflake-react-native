import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import { withNavigation } from '@react-navigation/compat';

interface Props {
  buttonText: string;
  stack: string;
  screen: string;
  navigation: any;
}

const Container = styled.TouchableOpacity`
  background-color: ${c.purple};
  height: ${d.px * 20}px;
  padding-left: ${d.px * 5}px;
  padding-right: ${d.px * 5}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.Text`
  font-family: 'Jost-Bold';
  font-size: ${d.px * 13}px;
  line-height: ${d.px * 20}px;
  text-align: left;
  color: white;
`;
const TriangleArrow = styled.Image`
  height: ${d.px * 10}px;
  width: ${d.px * 5}px;
  margin-left: ${d.px * 5}px;
`;

const ButtonLinkPurple = ({ buttonText, stack, screen, navigation }: Props) => {
  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate(stack, { screen: screen });
      }}
    >
      <TextStyle>{buttonText}</TextStyle>
      <TriangleArrow
        style={{ resizeMode: 'contain' }}
        source={require('~/img/triangleArrow.png')}
      />
    </Container>
  );
};

export default withNavigation(ButtonLinkPurple);
