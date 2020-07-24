import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import analytics from "@react-native-firebase/analytics";

import { d } from '~/utils/constant';
import ProductRankingContainer from '~/containers/product/info/ProductRankingContainer';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import TopBarBackArrowSearchBar from '~/components/universal/topBar/TopBarBackArrowSearchBar';

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

const Ranking = () => {

  React.useEffect(() => {
    analytics().setCurrentScreen("Ranking");
  }, []);

  return (
    <Container>
      <TopBarBackArrowSearchBar />
      <ProductRankingContainer />
    </Container>
  );
};

export default Ranking;
