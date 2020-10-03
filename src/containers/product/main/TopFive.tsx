import * as React from 'react';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { d } from '~/utils/constant';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import RankBar from '~/components/product/ranking/RankBar';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';
import { ResultsRes, CondomProductMain } from '~/api/interface';

interface Props {
  navigateToProductInfo: (productId: number) => void;
}

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
`;

const TopFive = ({ navigateToProductInfo }: Props) => {
  const [_topFiveList, _setTopFiveList] = useState<CondomProductMain[]>(null);

  const _getTopFiveList = async () => {
    try {
      const { status, response } = await fetchAPI(`products/condom/top-n/`);
      const json: ResultsRes<CondomProductMain> = await response.json();
      llog('🍪top5 - success!', json);

      if (status === 200) {
        _setTopFiveList(json.results);
      }
    } catch (error) {
      llog('🍪top5 - error', error);
    }
  };

  useEffect(() => {
    _getTopFiveList();
  }, []);

  return (
    <>
      <Container>
        <TextTitleDarkPurpleLink
          title={'콘돔 총점 TOP5'}
          buttonText={'모든 제품 보기'}
          stack={'ProductStack'}
          screen={'Ranking'}
          params={undefined}
        />
        <MarginMedium />
        {_topFiveList === null ? (
          <TextTitlePurpleRight title={'Loading...'} />
        ) : (
            _topFiveList.map((product: CondomProductMain, index: number) => {
              return (
                <RankBar
                  key={index}
                  rankNum={_topFiveList.indexOf(product) + 1}
                  productCompany={product.manufacturer_kor}
                  productName={product.name_kor}
                  imageUri={product.thumbnail}
                  score={product.score}
                  id={product.id}
                  navigateToProductInfo={navigateToProductInfo}
                />
              );
            })
          )}
      </Container>
    </>
  );
};

export default TopFive;
