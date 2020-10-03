import * as React from 'react';
import { Text, ScrollView, BackHandler } from 'react-native';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import { withNavigation } from '@react-navigation/compat';
import { Img } from '~/img';

const Container = styled.View`
  height: ${d.px * l.tB}px;
  width: 100%;
  margin-left: ${l.mR}px;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
`;

const Button = styled.TouchableOpacity`
  height: ${l.tB / 2}px;
  width: ${d.px * 50}px;

  align-items: flex-start;
  justify-content: center;
`;

const SnowFlake = styled.Image`
  height: ${d.px * 15}px;
  width: ${d.px * 23}px;
`;
interface Props {
  navigation: any;
}
const TopBarBackArrow = ({ navigation }: Props) => {
  return (
    <Container>
      <Button onPress={() => navigation.pop()}>
        <SnowFlake
          style={{ resizeMode: 'contain' }}
          source={Img.icon.backArrow}
        />
      </Button>
    </Container>
  );
};

export default withNavigation(TopBarBackArrow);
