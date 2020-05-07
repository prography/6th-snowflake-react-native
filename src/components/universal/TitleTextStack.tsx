import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import { device, color } from '../../utils/constant';
import { withNavigation } from '@react-navigation/compat';

const Container = styled.View`
    height: ${device.width / 10}px
    width: 100%
    flex-direction: row
    align-items:center
    justify-content: space-between
`;

const Title = styled.Text`
  font-size: ${device.px * 18}px;
  font-weight: 600;
`;

const Button = styled.TouchableOpacity`
  
  height: ${device.width / 10}px;
  justify-content: center;
  align-items: flex-end
  width: ${device.width / 5}px;
`;

const ButtonText = styled.Text`
  font-size: ${device.px * 15}px;
  font-weight: 500;
  color: ${color.grayLight};
`;
interface Props {
  title: string;
  button?: string;
  stack: string;
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
