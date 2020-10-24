import * as React from 'react';
import styled from 'styled-components/native';

import { d, l } from '~/utils/constant';
import { Img } from '~/img';
import SnowflakeLogo from '~/img/svgIcons/SnowflakeLogo';

const Container = styled.View`
  height: ${d.px * l.tB}px;
  width: 100%;
  margin-left: ${d.px * 30}px;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
`;

const SnowFlake = styled.Image`
  height: ${d.px * 42}px;
  width: ${d.px * 42}px;
`;

const TopBarLeftIcon = () => {
  return (
    <Container>
      <SnowflakeLogo/>
    </Container>
  );
};

export default TopBarLeftIcon;
