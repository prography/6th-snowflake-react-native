import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, l, c } from '~/utils/constant';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const TopBarContainer = styled.View`
  height: ${d.px * l.tB}px;
  width: 100%;
  margin-left: ${l.mR}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
`;
const SearchInput = styled.TextInput`
  background-color: ${c.mint};
  height: ${d.px * 40}px;
  width: ${d.px * 300}px;
  padding: ${d.px * 5}px ${d.px * 10}px;
`;

const SearchProduct = () => {
  return (
    <Container>
      <TopBarContainer>
        <SearchInput />
        <Text>여기에 취소</Text>
      </TopBarContainer>
    </Container>
  );
};

export default SearchProduct;
