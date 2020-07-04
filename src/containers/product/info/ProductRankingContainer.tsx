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
const TEXT_HEIGHT = d.px * 16;
const Container = styled.View`
  align-items: flex-start;
  padding: 0 ${l.mR}px;
`;

const CategoryWrapper = styled.View`
  flex-direction: row;
  padding: 0 ${l.mR}px;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: ${d.px * 20}px;
  padding-left: ${(props) => (props.first ? 0 : NARROW_MARGIN)}px;
  padding-right: ${(props) => (props.last ? 0 : NARROW_MARGIN)}px;
`;
const CategoryText = styled.Text`
  padding-top: ${NARROW_MARGIN}px;
  padding-bottom: ${NARROW_MARGIN}px;
  font-size: ${d.px * 14}px;
  line-height: ${TEXT_HEIGHT}px;
  text-align: center;
  color: ${(props) =>
    props.selectedCategory === props.categoryEnum ? c.black : c.lightGray};
`;

const FilterWrapper = styled.View`
  padding: 0 ${l.mR}px;
  flex-direction: row;
  justify-content: flex-end;
`;

const FilterBox = styled.TouchableOpacity`
  border-width: 1px;
  border-style: solid;
  border-color: ${c.extraLightGray};
  padding: ${NARROW_MARGIN}px;
  background-color: ${(props) =>
    props.showOrderFilter
      ? c.purple
      : props.selectedOrder === ''
      ? 'white'
      : c.mint};
`;

const FilterText = styled.Text`
  font-size: ${d.px * 14}px;
  line-height: ${TEXT_HEIGHT}px;
  color: ${(props) => (props.showOrderFilter ? 'white' : c.black)};
`;

const OrderFilterWrapper = styled.View`
  padding: ${l.mR}px ${l.mR}px;
`;
const OrderFilterBox = styled.TouchableOpacity`
  width: 100%;
  padding: ${NARROW_MARGIN}px 0;
  margin-bottom: ${TEXT_HEIGHT}px;
  flex-direction: row;
  justify-content: space-between;
`;
const OrderFilterText = styled.Text`
  font-size: ${d.px * 14}px;
  line-height: ${TEXT_HEIGHT}px;
  font-family: ${(props) =>
    props.orderEnum === props.selectedOrder ? 'Jost-Medium' : 'Jost-Light'};
  color: ${(props) =>
    props.orderEnum === props.selectedOrder ? c.black : c.lightGray};
`;
const SelectedCircle = styled.View`
  width: ${TEXT_HEIGHT / 2}px;
  height: ${TEXT_HEIGHT / 2}px;
  background-color: ${c.purple};
  border-radius: 1000px;
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
  const [orderText, setOrderText] = useState('총점순');
  const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.NONE);
  const [showOrderFilter, setShowOrderFilter] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(OrderEnum.NONE);
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

      <CategoryWrapper>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
        </ScrollView>
      </CategoryWrapper>

      <LineGrayMiddle />
      <MarginNarrow />
      <FilterWrapper>
        <FilterBox
          selectedOrder={selectedOrder}
          showOrderFilter={showOrderFilter}
          onPress={() => {
            setShowOrderFilter(!showOrderFilter);
          }}
        >
          <FilterText showOrderFilter={showOrderFilter}>{orderText}</FilterText>
        </FilterBox>
      </FilterWrapper>
      {showOrderFilter && (
        <OrderFilterWrapper>
          {orderFilterList.map((filter) => {
            return (
              <OrderFilterBox
                onPress={() => {
                  setOrderParam(filter.orderEnum);
                  setOrderText(filter.orderText);
                  setSelectedOrder(filter.orderEnum);
                }}
                selectedOrder={selectedOrder}
                orderEnum={filter.orderEnum}
              >
                <OrderFilterText
                  selectedOrder={selectedOrder}
                  orderEnum={filter.orderEnum}
                >
                  {filter.orderText}
                </OrderFilterText>
                {selectedOrder === filter.orderEnum && <SelectedCircle />}
              </OrderFilterBox>
            );
          })}
        </OrderFilterWrapper>
      )}
      <MarginNarrow />
      <LineGrayMiddle />
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
