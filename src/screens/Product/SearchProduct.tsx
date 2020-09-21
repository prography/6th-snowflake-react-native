import * as React from 'react';
import { ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import analytics from "@react-native-firebase/analytics";
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { d, l, c, BASE_URL } from '~/utils/constant';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';
import Blinder from '~/components/product/Blinder';
import BackButton from '~/components/universal/button/BackButton';
import { RootState } from '~/store/modules';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';

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
  width: ${d.px * 240}px;
  padding: ${d.px * 5}px ${d.px * 10}px;
  font-family: Jost-Book;
  font-size: ${d.px * 17}px;
  font-family: 'Jost-Book';
  color: ${c.darkGray};
  justify-content: center;
  align-items: center;
`;
const WarningText = styled.Text`
  color: ${c.purple};
  font-family: Jost-Bold;
  font-size: ${d.px * 13}px;
  line-height: ${d.px * 20}px;
`;
const ResultContainer = styled.View`
  margin: ${l.mR}px;
`;
const ProductContainer = styled.TouchableOpacity`
  margin: ${d.px * 7}px 0;
  justify-content: center;
  align-items: center;
`;
const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: ${d.px * 70}px;
  height: ${d.px * 70}px;
`;
const ProductImage = styled.Image`
  width: ${d.px * 45}px;
  height: ${d.px * 50}px;
`;

interface Props {
  navigation: StackNavigationProp<ProductStackParamList, 'SearchProduct'>;
}
const SearchProduct = ({ navigation }: Props) => {
  const [searchInput, setSearchInput] = useState(null);
  const [_searchResult, _setSearchResult] = useState(null);
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );
  const _searchProduct = async () => {
    try {
      const _searchInput = searchInput ? searchInput.replace(/(\s*)/g, '') : '';
      const response = await fetch(
        `${BASE_URL}/products/search/?keyword=${_searchInput}`,
        {
          method: 'GET',
        }
      );
      const json = await response.json();
      _setSearchResult(json.results);
      console.log('💎검색 - 성공!', _searchInput, json.results);
    } catch (error) {
      console.log('💎검색- error', error);
    }
  };

  useEffect(() => {
    _searchProduct();
  }, [searchInput]);

  useEffect(() => {
    analytics().setCurrentScreen("SearchProduct");
  }, []);

  return (
    <Container>
      <TopBarContainer>
        <BackButton />
        <SearchInput
          placeholderTextColor={c.lightGray}
          placeholder={'검색어를 입력해주세요'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(text) => [setSearchInput(text)]}
          placeholderTextColor={c.lightGray}
        >
          {searchInput}
        </SearchInput>
      </TopBarContainer>
      {searchInput ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ResultContainer>
            {_searchResult && _searchResult.length === 0 ? (
              <WarningText>검색 결과가 없습니다</WarningText>
            ) : (
                _searchResult.map((product, index: number) => {
                  return (
                    <>
                      <ProductContainer
                        key={index}
                        onPress={() => {
                          navigation.navigate('ProductStack', {
                            screen: 'ProductInfo',
                            params: { productId: product.id },
                          });
                        }}
                        key={_searchResult.indexOf(product) + 1}
                      >
                        <ImageWrapper>
                          <ProductImage
                            style={{ resizeMode: 'contain' }}
                            source={
                              blindState
                                ? require('~/img/doodle/doodleCdBoxMint.png')
                                : product.thumbnail === null
                                  ? require('~/img/icon/imageNull.png')
                                  : { uri: product.thumbnail }
                            }
                          />
                        </ImageWrapper>
                        <TextProductCompany
                          productCompany={product.manufacturer_kor}
                        />
                        <TextProductName productName={product.name_kor} />
                      </ProductContainer>
                    </>
                  );
                })
              )}
          </ResultContainer>
        </ScrollView>
      ) : null}
      <Blinder />
    </Container>
  );
};

export default SearchProduct;
