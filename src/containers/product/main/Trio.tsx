import * as React from 'react';
import styled from 'styled-components/native';
import { d, color } from '~/utils/constant';
import { View, Text } from 'react-native';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import TextContentLightLeft from '~/components/universal/text/TextContentLightLeft';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TrioBox from '~/components/product/main/TrioBox';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
  margin-right: ${d.px * 20}px;
`;

const TrioContainer = styled.View`
  padding: ${d.px * 30}px;
  flex-direction: row;
`;

const Trio = () => {
  const trioInfo = [
    {
      key: 0,
      title: '얇기',
      productCompany: '듀렉스',
      productName: '필 울트라씬',
    },
    {
      key: 1,
      title: '내구성',
      productCompany: '유니더스',
      productName: '롱러브',
    },
    {
      key: 2,
      title: '윤활제',
      productCompany: '이브',
      productName: '플레져미',
    },
  ];
  return (
    <>
      <Container>
        <TextTitleDarkLeft title={'콘돔 삼박자 BEST'} />
        <MarginMedium />
        <TextContentLightLeft
          content={
            '눈송이 팀이 설문조사를 꼼꼼히 분석하여 선정한\n콘돔의 가장 중요한 3가지 요소, 콘돔 삼박자!'
          }
        />
        <MarginMedium />
      </Container>
      <TrioContainer>
        {trioInfo.map((product) => {
          return (
            <TrioBox
              title={product.title}
              productCompany={product.productCompany}
              productName={product.productName}
            />
          );
        })}
      </TrioContainer>
      <MarginWide />
      <LineGrayRightLong />
    </>
  );
};

export default Trio;
