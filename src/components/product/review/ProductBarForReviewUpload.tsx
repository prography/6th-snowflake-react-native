import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';
import { withNavigation } from '@react-navigation/compat';
import TextRankNum from '~/components/universal/text/product/TextRankNum';
import TextProductScore from '~/components/universal/text/product/TextProductScore';

interface Props {
  rankNum: number;

  productCompany: string;
  productName: string;
  imageUri: string;
  navigation: any;
}

const Container = styled.TouchableOpacity`
  height: ${d.px * 80}px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 ${l.mR}px;
`;
const ProductImage = styled.Image`
  width: ${d.px * 45}px;
  height: ${d.px * 50}px;
`;
const ImageWrapper = styled.View`
  width: ${l.lW}px;
  justify-content: center;
  align-items: flex-start;
`;

const TextWrapper = styled.View`
  justify-content: center;
`;

const ProductBarForReviewUpload = ({
  rankNum,

  productCompany,
  productName,
  imageUri,
  navigation,
}: Props) => {
  const blindState = useSelector(
    (state: State) => state.blindReducer.blindState
  );
  return (
    <Container
      activeOpacity={1}
      onPress={() => [navigation.navigate('ProductInfo')]}
    >
      <ImageWrapper>
        <ProductImage
          style={{ resizeMode: 'contain' }}
          source={
            blindState
              ? rankNum < 4
                ? require('~/img/doodle/doodleCdBoxPurple.png')
                : require('~/img/doodle/doodleCdBoxMint.png')
              : { uri: imageUri }
          }
        />
      </ImageWrapper>

      <TextWrapper>
        <TextProductCompany productCompany={productCompany} />
        <TextProductName productName={productName} />
      </TextWrapper>
    </Container>
  );
};

export default withNavigation(ProductBarForReviewUpload);
