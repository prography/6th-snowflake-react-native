import * as React from 'react';

import { useState, useEffect } from 'react';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { d, c, BASE_URL } from '~/utils/constant';
import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import Trio from '~/containers/product/main/Trio';
import CardPurpleRight from '~/components/universal/card/CardPurpleRight';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import TopFive from '~/containers/product/main/TopFive';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import Blinder from '~/components/product/Blinder';
import TopBarLeftIconSearchBar from '~/components/universal/topBar/TopBarLeftIconSearchBar';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const ProductMain = () => {
  const _getCondomList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/condom/`);
      const json = await response.json();
      console.log('🍕product - condom list success!', json);
    } catch (error) {
      console.log('🍕product - condom list error', error);
    }
  };
  //제품 리스트에 현재 id 안 오고 있음
  useEffect(() => {
    _getCondomList();
  }, []);
  return (
    <>
      <NavBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarLeftIconSearchBar />
          <Container>
            {/* 제목이 보라색인 카드 */}
            <CardPurpleRight
              title={'Closed beta OPEN!'}
              content={
                '2020년 6월 6일 기준,\nPROGRAPHY 내부에 공개된 버전입니다.\n추후 더 다양한 제품군으로 확장 예정입니다.'
              }
            />

            <MarginWide />
            <LineGrayRightLong />
            <MarginWide />
            {/* 콘돔 삼박자 BEST */}
            <Trio />
            <MarginWide />
            <LineGrayRightLong />
            <MarginWide />
            {/* 콘돔 총점 TOP5 */}
            <TopFive />
            <MarginBottom />
          </Container>
        </ScrollView>
      </NavBar>
      <Blinder />
      {/* Blinder: 스크린의 가장 마지막에 놓아주어야 터치가 됨*/}
    </>
  );
};

export default ProductMain;
