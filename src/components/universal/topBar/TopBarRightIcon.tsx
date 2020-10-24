import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { d } from '~/utils/constant';
import { Img } from '~/img';
import SnowflakeLogo from '~/img/svgIcons/SnowflakeLogo';

const Container = styled.View`
  height: ${d.px * 75}px;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const SnowFlake = styled.Image`
  height: ${d.px * 42}px;
  width: ${d.px * 42}px;
`;

const TopBarWithIcon = () => {
  return (
    <Container>
      <SnowflakeLogo/>
    </Container>
  );
};

export default TopBarWithIcon;
