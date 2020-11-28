import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { d, c, l } from '~/utils/constant';
import { RootState } from '~/store/modules';
import { Img } from '~/img';

const Container = styled.View`
margin-left: ${props => props.theme.paddingWidth.wideLeftRight.paddingLeft};
  height: ${d.px * 130}px;
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
  imageUri: any;
}
const ProductImageBox = ({ imageUri }: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );
  return (
    <Container>
      <PImage
        style={{ resizeMode: 'contain' }}
        source={
          blindState
            ? Img.doodle.cdBoxMintPurpleHeart
            : imageUri === null
              ? Img.icon.null
              : { uri: imageUri }
        }
      />
    </Container>
  );
};

export default ProductImageBox;
