import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { Text } from 'react-native';
import TextLink from '~/components/universal/text/TextLink';
import { withNavigation } from '@react-navigation/compat';
import TextRankNum from '~/components/universal/text/product/TextRankNum';
import TextProductScore from '~/components/universal/text/product/TextProductScore';

interface Props {
  rankNum: number;
  score: number;
  productCompany: string;
  productName: string;
  imageUri: string;
  navigation: any;
}

const Container = styled.TouchableOpacity`
  height: ${d.px * 95}px;
  flex-direction: row;
`;
const ProductImage = styled.Image`
  margin: ${d.px * 10}px;
  width: ${d.px * 40}px;
  height: ${d.px * 65}px;
`;

const RankBar = ({
  rankNum,
  score,
  productCompany,
  productName,
  imageUri,
  navigation,
}: Props) => {
  const [blind, setBlind] = useState(true);

  return (
    <Container activeOpacity={1} onPress={() => navigation.navigate('Review')}>
      <ProductImage
        style={{ resizeMode: 'contain' }}
        source={
          blind
            ? rankNum < 4
              ? require('~/img/doodle/doodleCdBoxPurple.png')
              : require('~/img/doodle/doodleCdBoxMintPurpleHeart.png')
            : { uri: imageUri }
        }
      />
      <TextRankNum rankNum={rankNum} />
      <TextProductCompany productCompany={productCompany} />
      <TextProductName productName={productName} />
      <TextProductScore score={score} />
    </Container>
  );
};

export default withNavigation(RankBar);
