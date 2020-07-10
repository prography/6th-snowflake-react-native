import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d } from '~/utils/constant';
import ProductRankingContainer from '~/containers/product/info/ProductRankingContainer';
import TopBarBackArrowRightIcon from '~/components/universal/topBar/TopBarBackArrowRightIcon';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import TopBarBackArrowSearchProduct from '~/components/universal/topBar/TopBarBackArrowSearchProduct';

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

const SearchProduct = () => {
  return (
    <Container>
      <Text>검색 을 해봅시다.</Text>
    </Container>
  );
};

export default SearchProduct;
