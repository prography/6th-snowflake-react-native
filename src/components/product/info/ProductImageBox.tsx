import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import { withNavigation } from '@react-navigation/compat';

const Container = styled.View`
  margin: 0 ${l.mR}px;
  height: ${d.px * 150}px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const PImage = styled.Image`
  margin: ${d.px * 10}px;
  width: ${d.px * 150}px;
  height: ${d.px * 90}px;
`;

interface Props {
  imageUri: string;
}
const ProductImageBox = ({ imageUri }: Props) => {
  const blindState = useSelector(
    (state: State) => state.blindReducer.blindState
  );
  return (
    <Container>
      <PImage
        style={{ resizeMode: 'contain' }}
        source={
          blindState
            ? require('~/img/doodle/doodleCdBoxMintPurpleHeart.png')
            : { uri: imageUri }
        }
      />
    </Container>
  );
};

export default withNavigation(ProductImageBox);
