import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import { d, BASE_URL } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import RankBar from '~/components/product/ranking/RankBar';
import Blinder from '~/components/product/Blinder';
import styled from 'styled-components/native';
import MarginBottom from '~/components/universal/margin/MarginBottom';

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const CategoryWrapper = styled.View``;

const Category = styled.TouchableOpacity`
  width: ${d.px * 45}px;
  height: ${d.px * 50}px;
  background-color: yellow;
`;

enum CategoryEnum {
  NONE = '',
  NOMAL = 'NOMAL',
  SLIM = 'SLIM',
  CHOBAK = 'CHOBAK',
  DOLCHUL = 'DOLCHUL',
  GGOKJI = 'GGOKJI',
  DELAY = 'DELAY',
}
enum OrderEnum {
  NONE = '',
  num_of_reviews = 'num_of_reviews',
  avg_oily = 'avg_oily',
  avg_thickness = 'avg_thickness',
  avg_durability = 'avg_durability',
}

const ProductRankingContainer = () => {
  const [_rankingList, _setRankingList] = useState(null);
  const [categoryParam, setCategoryParam] = useState(CategoryEnum.NONE);
  const [orderParam, setOrderParam] = useState(OrderEnum.NONE);

  const _getRankingList = async () => {
    let url = `${BASE_URL}/products/condom?`;
    if (categoryParam !== CategoryEnum.NONE) {
      url += `category=${categoryParam}&`;
    }
    if (orderParam !== OrderEnum.NONE) {
      url += `order=${orderParam}&`;
    }

    // url의 끝에 ?나 &가 있으면
    if (url[url.length - 1] === '&' || url[url.length - 1] === '?') {
      url = url.substring(0, url.length - 1);
    }
    console.log('🍎 url', url);

    try {
      const response = await fetch(url);

      const json = await response.json();
      _setRankingList(json.results);
      console.log('🧤Ranking List - success!', _rankingList);
    } catch (error) {
      console.log('🧤Ranking List - error', error);
    }
  };

  useEffect(() => {
    _getRankingList();
  }, [categoryParam, orderParam]);

  return (
    <>
      <ScrollView style={{ width: '100%', flex: 1 }}>
        <Container>
          <CategoryWrapper>
            <Category
              onPress={() => {
                setCategoryParam(CategoryEnum.SLIM);
              }}
            >
              <Text>normal</Text>
            </Category>
            <Category
              onPress={() => {
                setCategoryParam(CategoryEnum.NONE);
              }}
            >
              <Text>normal</Text>
            </Category>
            <Category
              onPress={() => {
                setOrderParam(OrderEnum.avg_thickness);
              }}
            >
              <Text>순서변경</Text>
            </Category>
            <Category
              onPress={() => {
                setOrderParam(OrderEnum.NONE);
              }}
            >
              <Text>순서없애</Text>
            </Category>
          </CategoryWrapper>
          {_rankingList ? (
            _rankingList.map((product) => {
              return (
                <RankBar
                  rankNum={_rankingList.indexOf(product) + 1}
                  productCompany={product.manufacturer_kor}
                  productName={product.name_kor}
                  imageUri={product.thumbnail}
                  score={product.score}
                  id={product.id}
                />
              );
            })
          ) : (
            <TextTitlePurpleRight title={'Loading...'} />
          )}
        </Container>
      </ScrollView>

      <Blinder />
    </>
  );
};

export default ProductRankingContainer;
