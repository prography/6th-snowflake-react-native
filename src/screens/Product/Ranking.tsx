import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d } from '~/utils/constant';
import ProductRankingContainer from '~/containers/product/info/ProductRankingContainer';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

const Ranking = () => {
  return (
    <Container>
      <TopBarBackArrow />

      <ProductRankingContainer />
    </Container>
  );
};

export default Ranking;
