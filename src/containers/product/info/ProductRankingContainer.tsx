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
import MarginNarrow from '~/components/universal/margin/MarginNarrow';

const NARROW_MARGIN = d.px * 9;
const TEXT_HEIGHT = d.px * 15;
const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 0 ${l.mL}px;
`;

const CategoryWrapper = styled.View`
  flex-direction: row;

  padding: 0 ${l.mL}px;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: yellow;
  margin-right: ${d.px * 20}px;
  padding-left: ${(props) => (props.first ? 0 : NARROW_MARGIN)}px;
  padding-right: ${(props) => (props.last ? 0 : NARROW_MARGIN)}px;
`;
const CategoryText = styled.Text`
  padding-top: ${NARROW_MARGIN}px;
  padding-bottom: ${NARROW_MARGIN}px;
  font-size: ${d.px * 14}px;
  line-height: ${NARROW_MARGIN}px;
  text-align: center;
  color: ${(props) =>
    props.selectedCategory === props.categoryEnum ? c.black : c.lightGray};
`;

const FilterWrapper = styled.View`
  padding: 0 ${l.mL}px;
  flex-direction: row;
  justify-content: flex-end;
`;

const FilterBox = styled.TouchableOpacity`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.showOrderFilter ? 'white' : c.extraLightGray};
  padding: ${NARROW_MARGIN}px;
  background-color: ${(props) => (props.showOrderFilter ? c.mint : 'white')};
`;

const FilterText = styled.Text`
  font-size: ${d.px * 14}px;
  line-height: ${TEXT_HEIGHT}px;
`;

const OrderFilterWrapper = styled.View`
  padding: ${l.mL}px ${l.mL}px;
`;
const OrderFilterBox = styled.TouchableOpacity`
  width: 100%;

  padding: ${NARROW_MARGIN}px 0;
  margin-bottom: ${TEXT_HEIGHT}px;
`;
const OrderFilterText = styled.Text`
  font-size: ${d.px * 14}px;
  line-height: ${TEXT_HEIGHT}px;
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
  const [showOrderFilter, setShowOrderFilter] = useState(false);
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
      first: true,
      last: false,
    },
    {
      categoryEnum: CategoryEnum.NORMAL,
      categoryText: '일반형',
      first: false,
      last: false,
    },
    {
      categoryEnum: CategoryEnum.CHOBAK,
      categoryText: '초박형',
      first: false,
      last: false,
    },
    {
      categoryEnum: CategoryEnum.DOLCHUL,
      categoryText: '돌출형',
      first: false,
      last: false,
    },
    {
      categoryEnum: CategoryEnum.SLIM,
      categoryText: '슬림형',
      first: false,
      last: false,
    },
    {
      categoryEnum: CategoryEnum.GGOKJI,
      categoryText: '꼭지형',
      first: false,
      last: false,
    },
    {
      categoryEnum: CategoryEnum.DELAY,
      categoryText: '사전지연형',
      first: false,
      last: true,
    },
  ];

  const orderFilterList = [
    {
      orderEnum: OrderEnum.NONE,
      orderText: '총점순',
    },
    {
      orderEnum: OrderEnum.num_of_reviews,
      orderText: '리뷰 개수순',
    },
    {
      orderEnum: OrderEnum.avg_thickness,
      orderText: '얇기순',
    },
    {
      orderEnum: OrderEnum.avg_durability,
      orderText: '내구성순',
    },
    {
      orderEnum: OrderEnum.avg_oily,
      orderText: '윤활제순',
    },
  ];

  return (
    <>
      <LineGrayMiddle />

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CategoryWrapper>
          {categoryList.map((category) => {
            return (
              <Category
                first={category.first}
                last={category.last}
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
      <MarginNarrow />
      <FilterWrapper>
        <FilterBox
          showOrderFilter={showOrderFilter}
          onPress={() => {
            setShowOrderFilter(!showOrderFilter);
          }}
        >
          <FilterText>총점순</FilterText>
        </FilterBox>
      </FilterWrapper>
      {showOrderFilter && (
        <OrderFilterWrapper>
          {orderFilterList.map((filter) => {
            return (
              <OrderFilterBox
                onPress={() => {
                  setOrderParam(filter.orderEnum);
                }}
              >
                <OrderFilterText>{filter.orderText}</OrderFilterText>
              </OrderFilterBox>
            );
          })}
        </OrderFilterWrapper>
      )}
      <ScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
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
