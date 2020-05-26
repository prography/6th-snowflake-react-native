import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextProductCompany from '~/components/universal/text/TextProductCompany';
import TextProductName from '~/components/universal/text/TextProductName';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { Text } from 'react-native';

const Container = styled.View``;

const ProductBox = styled.TouchableOpacity`
  width: ${(d.width - d.px * 70) / 2}px;
  height: ${d.px * 110}px;
  background-color: ${c.mint};
  margin-right: ${d.px * 10}px;
`;

interface Props {
  title: string;
  productCompany: string;
  productName: string;
}
const TrioBox = ({ title, productCompany, productName }: Props) => {
  return (
    <Container>
      <TextMiddleTitleDark title={title} />
      <MarginNarrow />
      <ProductBox activeOpacity={0.8}>
        <TextProductCompany productCompany={productCompany} />
        <TextProductName productName={productName} />
      </ProductBox>
    </Container>
  );
};

export default TrioBox;
