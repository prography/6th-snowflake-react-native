<<<<<<< HEAD
// import * as React from '~/screens/product/node_modules/react';
import * as React from "react";
=======
import * as React from 'react';
import { useState } from 'react';
>>>>>>> bbd5ec8bbf4ce8abe5dbdabba05fefe04532b679
import { SafeAreaView, Text, ScrollView } from 'react-native';
// import styled from '~/screens/product/node_modules/styled-components/native';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import BoxContainer from '~/components/universal/BoxContainer';
import TitleText from '~/components/universal/TitleText';
import TitleTextStack from '~/components/universal/TitleTextStack';
import Trio from '~/containers/product/main/Trio';
import Margin from '~/components/universal/Margin';
import CardPurpleRight from '~/components/universal/card/CardPurpleRight';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import TopFive from '~/containers/product/main/TopFive';
import MarginBottom from '~/components/universal/margin/MarginBottom';

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarLeftIcon />
          {/* <Blinder
          onPress={() => {
            setBlind(!blind);
          }}
        /> */}

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
            <Margin />
            {/* 콘돔 총점 TOP5 */}
            <TopFive />
            <MarginBottom />
          </Container>
        </ScrollView>
      </NavBar>
    </>
  );
};

export default ProductMain;
