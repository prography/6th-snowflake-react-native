import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { d, BASE_URL } from '~/utils/constant';
import { ScrollView } from 'react-native';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import TextContentLightLeft from '~/components/universal/text/TextContentLightLeft';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TrioBox from '~/components/product/main/TrioBox';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
`;

const TrioContainer = styled.View`
  padding-left: ${d.px * 30}px;
  padding-right: ${d.px * 10}px;
  flex-direction: row;
`;

const Trio = () => {
  const trioInfo = [
    {
      key: 0,
      title: '얇기',
      productCompany: '듀렉스',
      productName: '필 울트라씬',
      imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
    },
    {
      key: 1,
      title: '내구성',
      productCompany: '유니더스',
      productName: '롱러브',
      imageUri:
        'https://p7.hiclipart.com/preview/843/339/817/5bbff9096ac0c.jpg',
    },
    {
      key: 2,
      title: '윤활제',
      productCompany: '이브',
      productName: '플레져미',
      imageUri:
        'https://images-na.ssl-images-amazon.com/images/I/51tPmiQBoHL.jpg',
    },
  ];
  return (
    <>
      <Container>
        <TextTitleDarkLeft title={'콘돔 삼박자 BEST'} />
        <MarginMedium />
        <TextContentLightLeft
          content={
            '눈송이 팀이 생생한 후기를 꼼꼼히 분석하여 선정한\n콘돔의 가장 중요한 3가지 요소, 콘돔 삼박자!'
          }
        />
        <MarginMedium />
      </Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TrioContainer>
          {trioInfo.map((product) => {
            return (
              <TrioBox
                title={product.title}
                productCompany={product.productCompany}
                productName={product.productName}
                imageUri={product.imageUri}
              />
            );
          })}
        </TrioContainer>
      </ScrollView>
    </>
  );
};

export default Trio;
