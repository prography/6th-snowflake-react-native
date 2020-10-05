import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import styled from 'styled-components/native';

import { d, c, l } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import RankBar from '~/components/product/ranking/RankBar';
import Blinder from '~/components/product/Blinder';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { llog } from '~/utils/functions';
import { RankingParamList } from '~/navigation/tabs/ProductStack';
import { fetchAPI } from '~/api';
import { CondomProductForRank, ResultsRes } from '~/api/interface';

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
export enum CategoryEnum {
  NONE = '',
  NORMAL = 'NORMAL',
  SLIM = 'SLIM',
  CHOBAK = 'CHOBAK',
  DOLCHUL = 'DOLCHUL',
  GGOKJI = 'GGOKJI',
  DELAY = 'DELAY',
}
export enum OrderEnum {
  NONE = '',
  num_of_reviews = 'num_of_reviews',
  avg_oily = 'avg_oily',
  avg_thickness = 'avg_thickness',
  avg_durability = 'avg_durability',
}

interface CategoryObj {
  categoryEnum: CategoryEnum;
  categoryText: string;
  first: boolean;
  last: boolean;
}
const categoryList: CategoryObj[] = [
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

interface OrderFilter {
  orderEnum: OrderEnum;
  orderText: string;
}
const orderFilterList: OrderFilter[] = [
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

interface Props {
  serverParams: RankingParamList;
  navigateToProductInfo: (productId: number) => void;
}

const ProductRankingContainer = ({ serverParams, navigateToProductInfo }: Props) => {
  llog('🦨 serverParams', serverParams);
  const [_rankingList, _setRankingList] = useState<CondomProductForRank[]>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(CategoryEnum.NONE);
  const [showOrderFilter, setShowOrderFilter] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderEnum>(OrderEnum.NONE);

  const _getRankingList = async () => {
    let url = `products/condom?`;
    if (selectedCategory !== CategoryEnum.NONE) {
      url += `category=${selectedCategory}&`;
    }
    if (selectedOrder !== OrderEnum.NONE) {
      url += `order=${selectedOrder}&`;
    }

    // url의 끝에 ?나 &가 있으면
    if (url[url.length - 1] === '&' || url[url.length - 1] === '?') {
      url = url.substring(0, url.length - 1);
    }
    llog('🍎 url', url);

    try {
      const { status, response } = await fetchAPI(url);
      const json: ResultsRes<CondomProductForRank> = await response.json();
      llog('🧤Ranking List - success!', json);

      if (status === 200) {
        _setRankingList(json.results);
      }
    } catch (error) {
      llog('🧤Ranking List - error', error);
    }
  };

  const _getOrderTextBySelectedOrder = () => {
    const found = orderFilterList.find((orderFilter: OrderFilter) => orderFilter.orderEnum === selectedOrder);
    llog('😎😎😎😎 selectedOrder found', selectedOrder, found)
    return found?.orderText;
  };

  useEffect(() => {
    if (serverParams) {
      setSelectedCategory(serverParams.category);
      setSelectedOrder(serverParams.order);
    }

  }, [serverParams])

  useEffect(() => {
    _getRankingList();
  }, [selectedCategory, selectedOrder]);

  return (
    <>
      <LineGrayMiddle />

      <CategoryWrapper>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryList.map((category, index: number) => {
            return (
              <Category
                key={index}
                first={category.first}
                last={category.last}
                onPress={() => {
                  analytics().logEvent("press_category_in_ranking", { category: category.categoryEnum });
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
            analytics().logEvent("press_show_order_filter", { to: !showOrderFilter });
            setShowOrderFilter(!showOrderFilter);
          }}
        >
          <FilterText showOrderFilter={showOrderFilter}>{_getOrderTextBySelectedOrder()}</FilterText>
        </FilterBox>
      </FilterWrapper>
      {showOrderFilter && (
        <OrderFilterWrapper>
          {orderFilterList.map((filter, index: number) => {
            return (
              <OrderFilterBox
                key={index + 100}
                onPress={() => {
                  analytics().logEvent("press_order_in_ranking", { order: filter.orderEnum });
                  setSelectedOrder(filter.orderEnum);
                }}>
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
            _rankingList.map((product: CondomProductForRank, index: number) => {
              return (
                <RankBar
                  key={index + 200}
                  rankNum={_rankingList.indexOf(product) + 1}
                  productCompany={product.manufacturer_kor}
                  productName={product.name_kor}
                  imageUri={product.thumbnail}
                  score={product.score}
                  id={product.id}
                  navigateToProductInfo={navigateToProductInfo}
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
