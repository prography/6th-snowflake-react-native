import * as React from 'react';
import { useSelector } from 'react-redux';
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
  width: ${d.px * 45}px;
  height: ${d.px * 50}px;
`;
const ImageWrapper = styled.View`
  flex: 0.9;
  justify-content: center;
  align-items: center;
`;
const RankNumWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextWrapper = styled.View`
  flex: 3;
  justify-content: center;
`;
const ScoreWrapper = styled.View`
  flex: 1.2;
  align-items: flex-end;
  justify-content: center;
`;

const RankBar = ({
  rankNum,
  score,
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
      <RankNumWrapper>
        <TextRankNum rankNum={rankNum} />
      </RankNumWrapper>
      <TextWrapper>
        <TextProductCompany productCompany={productCompany} />
        <TextProductName productName={productName} />
      </TextWrapper>
      <ScoreWrapper>
        <TextProductScore score={score} />
      </ScoreWrapper>
    </Container>
  );
};

export default withNavigation(RankBar);
