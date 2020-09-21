import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import analytics from "@react-native-firebase/analytics";
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';

import { d, c } from '~/utils/constant';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import TextLink from '~/components/universal/text/TextLink';
import { RootState } from '~/store/modules';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import TextProductFlowName from '~/components/universal/text/product/TextProductFlowName';


const Container = styled.View`
  width: ${(d.width - d.px * 70) / 2}px;
  margin-right: ${d.px * 10}px;
`;

const ProductBox = styled.TouchableOpacity`
  width: ${(d.width - d.px * 70) / 2}px;
  height: ${d.px * 110}px;
  background-color: ${c.mint};
  flex-direction: row;
  align-items: center;
`;
const ProductImage = styled.Image`
  margin: ${d.px * 10}px;
  width: ${d.px * 40}px;
  height: ${d.px * 65}px;
`;
const TextWrapper = styled.View`
  width: ${(d.width - d.px * 70) / 2 - d.px * 60}px;
`;

const Link = styled.TouchableOpacity``;

interface Props {
  id: number;
  title: string;
  productCompany: string;
  productName: string;
  imageUri: string;
  navigation: StackNavigationProp<ProductStackParamList>;
}
const TrioBox = ({
  id,
  title,
  productCompany,
  productName,
  imageUri,
  navigation,
}: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );
  return (
    <Container>
      <TextMiddleTitleDark title={title} />
      <MarginNarrow />
      <ProductBox
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('ProductInfo', { productId: id });
        }}
      >
        <ProductImage
          style={{ resizeMode: 'contain' }}
          source={
            blindState
              ? require('~/img/doodle/doodleCdBoxCrownFilledMint.png')
              : imageUri === null
                ? require('~/img/icon/imageNull.png')
                : { uri: imageUri }
          }
        />
        <TextWrapper>
          <TextProductCompany productCompany={productCompany} />
          <TextProductFlowName productName={productName} />
        </TextWrapper>
      </ProductBox>
      <MarginNarrow />
      <Link
        activeOpacity={0.5}
        onPress={() => {
          analytics().logEvent("press_go_to_ranking", { from: title });
          navigation.navigate('Ranking');
        }}
      >
        <TextLink content={title + ' 랭킹'} />
      </Link>
    </Container>
  );
};

export default withNavigation(TrioBox);
