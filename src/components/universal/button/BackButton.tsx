import * as React from 'react';
import styled from 'styled-components/native';

import { d, c } from '~/utils/constant';
import { Img } from '~/img';

interface Props {
  onPressBack: () => void;
}

const Container = styled.TouchableOpacity`
    height: ${d.px * 20}px;
    padding-left: ${d.px * 5}px;
    padding-right: ${d.px * 5}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;


const SnowFlake = styled.Image`
  height: ${d.px * 15}px;
  width: ${d.px * 23}px;
  margin-right: ${d.px * 10}px;
`;

const BackButton = ({ onPressBack }: Props) => {
  return (
    <Container
      activeOpacity={1}
      onPress={onPressBack}>
      <SnowFlake
        style={{ resizeMode: 'contain' }}
        source={Img.icon.backArrow}
      />
    </Container>
  );
};

export default BackButton;
