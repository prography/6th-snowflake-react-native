import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import { d, BASE_URL, c, l } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import RankBar from '~/components/product/ranking/RankBar';
import Blinder from '~/components/product/Blinder';
import styled from 'styled-components/native';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const CategoryWrapper = styled.View`
  flex-direction: row;
  padding: 0 ${l.mL}px;
`;

const Category = styled.TouchableOpacity`
  padding: ${d.px * 9}px;
  margin-right: ${d.px * 20}px;
  padding-left: ${(props) =>
    props.categoryEnum === CategoryEnum.NONE ? 0 : d.px * 9}px;
`;
const CategoryText = styled.Text`
  font-size: ${d.px * 14}px;
  color: ${(props) =>
    props.selectedCategory === props.categoryEnum ? c.black : c.lightGray};
`;
enum CategoryEnum {
  NONE = '',
  NORMAL = 'NORMAL',
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
  const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.NONE);
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

  const categoryList = [
    {
      categoryEnum: CategoryEnum.NONE,
      categoryText: '전체',
      fist: true,
    },
    {
      categoryEnum: CategoryEnum.NORMAL,
      categoryText: '일반형',
    },
    {
      categoryEnum: CategoryEnum.CHOBAK,
      categoryText: '초박형',
    },
    {
      categoryEnum: CategoryEnum.DOLCHUL,
      categoryText: '돌출형',
    },
    {
      categoryEnum: CategoryEnum.SLIM,
      categoryText: '슬림형',
    },
    {
      categoryEnum: CategoryEnum.GGOKJI,
      categoryText: '꼭지형',
    },
    {
      categoryEnum: CategoryEnum.DELAY,
      categoryText: '사전지연형',
    },
  ];

  return (
    <>
      <LineGrayMiddle />
      <ScrollView
        style={{ width: '100%', flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CategoryWrapper>
              {categoryList.map((category) => {
                return (
                  <Category
                    categoryEnum={category.categoryEnum}
                    onPress={() => {
                      setCategoryParam(category.categoryEnum),
                        setSelectedCategory(category.categoryEnum);
                    }}
                  >
                    <CategoryText
                      selectedCategory={selectedCategory}
                      categoryEnum={category.categoryEnum}
                    >
                      {category.categoryText}
                    </CategoryText>
                  </Category>
                );
              })}
            </CategoryWrapper>
          </ScrollView>
          <LineGrayMiddle />
          <ScrollView horizontal={true}>
            <CategoryWrapper>
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
          </ScrollView>
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
