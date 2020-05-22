import * as React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { device } from '~/utils/constant';

import BoxContainer from '~/components/universal/BoxContainer';
import TitleText from '~/components/universal/TitleText';
import TitleTextStack from '~/components/universal/TitleTextStack';
import TopThree from '~/containers/product/main/TopThree';
import Trio from '~/containers/product/main/Trio';
import Margin from '~/components/universal/Margin';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${device.px * 20}px;
`;

const Main = () => {
  return (
    <>
      <ScrollView>
        <Container>
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
    </>
  );
};

export default Main;
