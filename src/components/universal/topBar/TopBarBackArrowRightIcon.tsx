import * as React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';

import { d, l } from '~/utils/constant';
import { Img } from '~/img';
import BackArrow from '~/img/svgIcons/BackArrow';
import SnowflakeLogo from '~/img/svgIcons/SnowflakeLogo';

const Container = styled.View`
  height: ${d.px * l.tB}px;
  width: ${d.width - 2 * l.mR}px;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  height: ${l.tB / 2}px;
  width: ${d.px * 50}px;

  align-items: flex-start;
  justify-content: center;
`;

const Arrow = styled.Image`
  height: ${d.px * 15}px;
  width: ${d.px * 23}px;
`;
const SnowFlake = styled.Image`
  height: ${d.px * 42}px;
  width: ${d.px * 42}px;
`;
interface Props {
  navigation: any;
}
const TopBarBackArrowRightIcon = ({ navigation }: Props) => {
  return (
    <Container>
      <Button
        onPress={() => {
          navigation.pop();
        }}
      >
        <BackArrow/>
      </Button>
      <SnowflakeLogo/>
    </Container>
  );
};

export default withNavigation(TopBarBackArrowRightIcon);
