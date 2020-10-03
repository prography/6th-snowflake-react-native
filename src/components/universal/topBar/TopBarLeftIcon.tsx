import * as React from 'react';
import styled from 'styled-components/native';

import { d } from '~/utils/constant';
import { Img } from '~/img';

const Container = styled.View`
  height: ${d.px * 75}px;
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
      <SnowFlake
        style={{ resizeMode: 'contain' }}
        source={Img.logo}
      />
    </Container>
  );
};

export default TopBarLeftIcon;
