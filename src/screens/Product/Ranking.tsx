import * as React from 'react';
import styled from 'styled-components/native';
import { RouteProp } from '@react-navigation/native';

import { d } from '~/utils/constant';
import ProductRankingContainer from '~/containers/product/info/ProductRankingContainer';
import TopBarBackArrowSearchBar from '~/components/universal/topBar/TopBarBackArrowSearchBar';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import { llog } from '~/utils/functions';
import { StackNavigationProp } from '@react-navigation/stack';
import { eventUtil } from '~/utils/firebase/event';

interface Props {
  navigation: StackNavigationProp<ProductStackParamList, 'Ranking'>;
  route: RouteProp<ProductStackParamList, 'Ranking'>;
}

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

const Ranking = ({ navigation, route }: Props) => {
  llog('🦚🦚 route 🦚🦚', route.params)

  React.useEffect(() => {
    eventUtil.logScreenView("Ranking");
  }, []);

  return (
    <Container>
      <TopBarBackArrowSearchBar />
      <ProductRankingContainer
        serverParams={route.params}
        navigateToProductInfo={(productId: number) => navigation.navigate('ProductInfo', { productId })} />
    </Container>
  );
};

export default Ranking;
