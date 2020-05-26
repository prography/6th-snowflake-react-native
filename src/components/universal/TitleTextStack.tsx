import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d, color } from '../../utils/constant';
import { withNavigation } from '@react-navigation/compat';

const Container = styled.View`
  height: ${d.width / 10}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: ${d.px * 20}px;
  font-family: 'Jost-Heavy';
`;

const Button = styled.TouchableOpacity`
  height: ${d.width / 10}px;
  justify-content: center;
  align-items: flex-end;
  width: ${d.width / 5}px;
`;

const ButtonText = styled.Text`
  font-size: ${d.px * 15}px;
  font-weight: 500;
  color: ${color.grayLight};
`;
interface Props {
  title: any;
  button: any;
  stack: any;
  navigation: any;
}

const TitleTextStack = ({ title, button, stack, navigation }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button
        onPress={() => {
          navigation.navigate(stack);
        }}
      >
        <ButtonText>{button}</ButtonText>
      </Button>
    </Container>
  );
};

export default withNavigation(TitleTextStack);
