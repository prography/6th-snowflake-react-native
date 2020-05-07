import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import { device } from '../../utils/constant';
import TopBar from '../../components/universal/TopBar';

import BoxContainer from '../../components/universal/BoxContainer';
import TitleText from '../../components/universal/TitleText';
import TitleTextStack from '../../components/universal/TitleTextStack';
import TopThree from '../../containers/product/TopThree';
import Margin from '../../components/universal/Margin';

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0 ${device.width * 0.05}px;
`;

const Product = () => {
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
        </Container>
      </ScrollView>
    </>
  );
};

export default Product;
