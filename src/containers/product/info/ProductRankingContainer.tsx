import * as React from 'react';
import { useState, useEffect } from 'react';
import { d, BASE_URL } from '~/utils/constant';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import RankBar from '~/components/product/ranking/RankBar';
import Blinder from '~/components/product/Blinder';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import MarginBottom from '~/components/universal/margin/MarginBottom';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;
const ScrollContainer = styled.ScrollView``;

const ProductRankingContainer = () => {
  const [_rankingList, _setRankingList] = useState(null);
  const _getRankingList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/condom/`);
      const json = await response.json();
      _setRankingList(json.results);
      console.log('🧤Ranking List - success!', _rankingList);
    } catch (error) {
      console.log('🧤Ranking List - error', error);
    }
  };

  useEffect(() => {
    _getRankingList();
  }, []);
  return (
    <>
      <Container>
        {_rankingList === null ? (
          <TextTitlePurpleRight title={'Loading...'} />
        ) : (
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
        )}
      </Container>
      <MarginBottom />

      <Blinder />
    </>
  );
};

export default ProductRankingContainer;
