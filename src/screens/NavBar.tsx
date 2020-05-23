import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeMain from '~/screens/home/HomeMain';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '~/navigation/RootTabNavigation';
import { device, color } from '~/utils/constant';

interface Props {
  children: React.ReactNode;
  navigation: StackNavigationProp<RootTabParamList>;
}

const Screen = styled.View`
  flex: 1;
`;

const Container = styled.View`
  height: ${device.height / 11}px;
  width: ${device.width}px;
  flex: 1;
  flex-direction: row;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
`;
const Title = styled.Text``;

const NavBar = ({ children, navigation }: Props) => {
  return (
    <Screen>
      {children}
      <Container>
        <Tab
          onPress={() => {
            navigation.navigate('HomeStack');
          }}
        >
          <Title>제목</Title>
        </Tab>
        <Tab
          onPress={() => {
            navigation.navigate('ProductStack');
          }}
        >
          <Title>제목</Title>
        </Tab>
        <Tab
          onPress={() => {
            navigation.navigate('ClinicStack');
          }}
        >
          <Title>제목</Title>
        </Tab>
        <Tab
          onPress={() => {
            navigation.navigate('LabStack');
          }}
        >
          <Title>제목</Title>
        </Tab>
        <Tab
          onPress={() => {
            navigation.navigate('SettingStack');
          }}
        >
          <Title>제목</Title>
        </Tab>
      </Container>
    </Screen>
  );
};

export default NavBar;
