import * as React from 'react';
import styled from 'styled-components/native';
import analytics from "@react-native-firebase/analytics";
import { RouteProp } from '@react-navigation/native';

import { d } from '~/utils/constant';
import ProductRankingContainer from '~/containers/product/info/ProductRankingContainer';
import TopBarBackArrowSearchBar from '~/components/universal/topBar/TopBarBackArrowSearchBar';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import { llog } from '~/utils/functions';
import { StackNavigationProp } from '@react-navigation/stack';

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
    analytics().setCurrentScreen("Ranking");
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
