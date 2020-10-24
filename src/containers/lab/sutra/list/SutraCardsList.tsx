import * as React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import OneSutraCard from "~/components/lab/sutra/list/OneSutraCard";
import { getTokenItem } from "~/utils/asyncStorage";
import { fetchAPI } from "~/api";
import { llog } from "~/utils/functions";
import { ResultsRes, Sutra } from "~/api/interface";
import MarginMedium from "~/components/universal/margin/MarginMedium";

// [x] 여기에서 데이터 받아와서 map 돌려서 OneSutraCard에 넘겨주면 됩니다!

// [ ] TempContainer 대신 필터 디자인
const TempContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px; /* 대충대충~ㅋㅋ */
  align-self: center;
`;
const TempBtn = styled.TouchableOpacity`
  width: 55px;
  height: 35px;
  background-color: ${({ selected }: { selected: boolean }) => selected ? 'lightblue' : '#e6faf9'};
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;
const TempBtnText = styled.Text`
  font-size: 11px;
  align-self: center;
  margin-bottom: 10px;
`;

enum FilterEnum {
  none = 'none',
  recommend = 'recommend',
  unrecommend = 'unrecommend',
  notyet = 'notyet',
  like = 'like',
}
enum OrderEnum {
  none = 'none',
  default = 'default',
  evaluation = 'evaluation',
  recommend = 'recommend',
  unrecommend = 'unrecommend',
  notyet = 'notyet',
  like = 'like',
}
interface Filter {
  enum: FilterEnum;
  text: string;
}
interface Order {
  enum: OrderEnum;
  text: string;
}
const filters: Filter[] = [
  { enum: FilterEnum.recommend, text: '추천' },
  { enum: FilterEnum.unrecommend, text: '비추천' },
  { enum: FilterEnum.notyet, text: '안해봤어요' },
  { enum: FilterEnum.like, text: '찜' },
];
const orders: Order[] = [
  { enum: OrderEnum.default, text: '최신순' }, // 이게 먹히는건가? 아님 안써줘도 되나?
  { enum: OrderEnum.evaluation, text: '평가개수순' },
  { enum: OrderEnum.recommend, text: '추천순' },
  { enum: OrderEnum.unrecommend, text: '비추천순' },
  { enum: OrderEnum.notyet, text: '안해봤어요순' },
  { enum: OrderEnum.like, text: '찜순' },
];
// API DOCS: http://snowflakeproduction-env.eba-qnph52vm.ap-northeast-2.elasticbeanstalk.com/swagger/
// order => default: 최신순 | 평가개수순: evaluation | 추천순: recommend | 비추천순: unrecommend | 안해봤어요 순: notyet | 찜순: like
// filter => 추천: recommend | 비추천: unrecommend | 안해봤어요: notyet | 찜: like

const SutraCardsList = () => {
  const [_sutraCardsList, _setSutraCardsList] = useState<Sutra[]>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterEnum>(FilterEnum.none);
  const [selectedOrder, setSelectedOrder] = useState<OrderEnum>(OrderEnum.none);

  const _getSutraList = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        return;
      }

      let url = `labs/sutra?`;
      if (selectedFilter !== FilterEnum.none) {
        url += `filter=${selectedFilter}&`;
      }
      if (selectedOrder !== OrderEnum.none) {
        url += `order=${selectedOrder}&`;
      }

      // url의 끝에 ?나 &가 있으면
      if (url[url.length - 1] === '&' || url[url.length - 1] === '?') {
        url = url.substring(0, url.length - 1);
      }
      llog('🍎 url', url);

      const { status, response } = await fetchAPI(`${url}/`, {
        token, // FIXME 토큰 없이
      });
      const json: ResultsRes<Sutra> = await response.json();
      llog("SutraList - success!", json);

      if (status === 200) {
        _setSutraCardsList(json.results);
      }
    } catch (error) {
      llog("StruaList - error", error);
    }
  };

  useEffect(() => {
    _getSutraList();
  }, [selectedFilter, selectedOrder]);

  return (
    <>
      {/* 임시 View Start */}
      <TempBtnText>클릭해서 Filter, Order 선택 (어떻게 될지 몰라서 초기값을 none으로 해놓음)</TempBtnText>
      <TempContainer>
        <TempBtnText>Filter</TempBtnText>
        {filters.map((f: Filter) => {
          return (
            <TempBtn selected={selectedFilter === f.enum} onPress={() => setSelectedFilter(f.enum)}>
              <TempBtnText>{f.text}</TempBtnText>
            </TempBtn>
          );
        })}
      </TempContainer>
      <TempContainer>
        <TempBtnText>Order</TempBtnText>
        {orders.map((o: Order) => {
          return (
            <TempBtn selected={selectedOrder === o.enum} onPress={() => setSelectedOrder(o.enum)}>
              <TempBtnText>{o.text}</TempBtnText>
            </TempBtn>
          );
        })}
      </TempContainer>
      <MarginMedium />
      {/* 임시 View End */}


      {_sutraCardsList?.map((sutra: Sutra) => <OneSutraCard sutra={sutra} />)}
    </>
  );
};

export default SutraCardsList;
