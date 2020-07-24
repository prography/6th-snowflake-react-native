import * as React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import analytics from "@react-native-firebase/analytics";

import { d, c } from '~/utils/constant';
import TextBottomBtn from '../text/TextBottomBtn';

interface Props {
  buttonText: string;
  link: string;
  navigation: any;
}

const Container = styled.TouchableOpacity`
  background-color: ${c.purple};
  align-self: flex-end;
  padding-left: ${d.px * 10}px;
  padding-right: ${d.px * 10}px;
  height: ${d.px * 40}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.Text`
  font-family: 'Jost-Book';
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 40}px;
  text-align: left;
  color: white;
`;

const TriangleArrow = styled.Image`
  height: ${d.px * 12}px;
  width: ${d.px * 6}px;
  margin-left: ${d.px * 6}px;
`;

const ButtonLinkPurpleLarge = ({ buttonText, link, navigation }: Props) => {
  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        analytics().logEvent("press_btn_in_home", { link });
        navigation.navigate(link);
      }}
    >
      <TextBottomBtn btnName={buttonText} />
      <TriangleArrow
        resizeMode="contain"
        source={require('~/img/triangleArrow.png')}
      />
    </Container>
  );
};

export default withNavigation(ButtonLinkPurpleLarge);
