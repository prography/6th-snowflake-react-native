import * as React from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextProductSpecificTitle from '~/components/universal/text/product/info/TextProductSpecificTitle';
import TextProductSpecificContent from '~/components/universal/text/product/info/TextProductSpecificContent';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import HeartUnselected from '~/img/svgIcon/heart_unselected.svg'
const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
  flex-direction: row;
`;
const LeftWrapper = styled.View`
  width: ${l.lW}px;
`;
const RightWapper = styled.View`
  width: 100%;
`;
interface Props {
  category: string;
  length: number;
  width: number;
  thickness: number;
}
const ProductInfoSpecific = ({ category, length, width, thickness }: Props) => {
  const setCategoryToKor = (category) => {
    switch (category) {
      case 'CHOBAK':
        return '초박형';
      case 'NORMAL':
        return '일반형';
      case 'SLIM':
        return '슬림형';
      case 'DOLCHUL':
        return '돌출형';
      case 'GGOKJI':
        return '꼭지형';
      case 'DELAY':
        return '사전지연형';
      default:
        return '일반형';
    }
  };
  return (
    <>
      <Container>
        <LeftWrapper>
          <TextProductSpecificTitle title={'제품유형'} />
          <MarginNarrow />
          <HeartUnselected width={30} height={20}/>
          <TextProductSpecificTitle title={'제품정보'} />
        </LeftWrapper>
        <RightWapper>
          <TextProductSpecificContent category={setCategoryToKor(category)} />
          <MarginNarrow />
          <TextProductSpecificContent
            length={length || null}
            width={width || null}
            thickness={thickness || null}
          />
        </RightWapper>
      </Container>
    </>
  );
};

export default ProductInfoSpecific;
