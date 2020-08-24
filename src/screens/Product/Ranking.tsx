import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import { RouteProp } from '@react-navigation/native';

import { d } from '~/utils/constant';
import ProductRankingContainer from '~/containers/product/info/ProductRankingContainer';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import TopBarBackArrowSearchBar from '~/components/universal/topBar/TopBarBackArrowSearchBar';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import { llog2 } from '~/utils/functions';

interface Props {
  route: RouteProp<ProductStackParamList, 'Ranking'>;
}

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

const Ranking = ({ route }: Props) => {
  llog2('🦚🦚 route 🦚🦚', route.params)

  React.useEffect(() => {
    analytics().setCurrentScreen("Ranking");
  }, []);

  return (
    <Container>
      <TopBarBackArrowSearchBar />
      <ProductRankingContainer serverParams={route.params} />
    </Container>
  );
};

export default Ranking;
