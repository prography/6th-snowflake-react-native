import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';

import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import BoxContainer from '~/components/universal/BoxContainer';
import TitleText from '~/components/universal/TitleText';
import TitleTextStack from '~/components/universal/TitleTextStack';
import TopThree from '~/containers/product/main/TopThree';
import Trio from '~/containers/product/main/Trio';
import Margin from '~/components/universal/Margin';
import TitleRightPurpleContainer from '~/components/universal/containerComponent/TitleRightPurpleContainer';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const ProductMain = () => {
  return (
    <>
      <NavBar>
        <TopBarLeftIcon />
        <ScrollView>
          <Container>
            <TitleRightPurpleContainer title={'Closed beta OPEN!'} />
            <Margin />
            <BoxContainer />
            <Margin />
            <TitleTextStack
              title={'총점 TOP 3'}
              button={'더 보기'}
              stack={'Ranking'}
            />
            <TopThree />
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
