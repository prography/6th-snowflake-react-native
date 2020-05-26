import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import BoxContainer from '~/components/universal/BoxContainer';
import TitleText from '~/components/universal/TitleText';
import TitleTextStack from '~/components/universal/TitleTextStack';
import TopThree from '~/containers/product/main/TopThree';
import Trio from '~/containers/product/main/Trio';
import Margin from '~/components/universal/Margin';
import CardPurpleRight from '~/components/universal/card/CardPurpleRight';
import MarginWide from '~/components/universal/margin/MarginWide';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;
const Blinder = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${c.mint};
  position: absolute;
  right: ${d.px * 20}px;
  top: ${d.px * 25}px;
`;

const ProductMain = () => {
  const [blind, setBlind] = useState(true);
  return (
    <>
      <NavBar>
        <TopBarLeftIcon />
        <Blinder
          onPress={() => {
            setBlind(!blind);
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <CardPurpleRight
              title={'Closed beta OPEN!'}
              content={
                '2020년 6월 6일 기준,\nPROGRAPHY 내부에 공개된 버전입니다.\n추후 더 다양한 제품군으로 확장 예정입니다.'
              }
            />
            <MarginWide />
            <Trio />
            <MarginWide />
            <Margin />
            <TitleText title={'콘돔 핵심 트리오'} />
            <Trio />
            <Margin />
            <Margin />
          </Container>
        </ScrollView>
      </NavBar>
    </>
  );
};

export default ProductMain;
