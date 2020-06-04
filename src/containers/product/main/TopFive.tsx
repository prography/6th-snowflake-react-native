import * as React from 'react';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { d, BASE_URL } from '~/utils/constant';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import RankBar from '~/components/product/ranking/RankBar';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
`;

const TopFive = () => {
  const [_topFiveList, _setTopFiveList] = useState(null);
  const _getTopFiveList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/condom/top-n/`);
      const json = await response.json();
      _setTopFiveList(json.results);
      console.log('🍪top5 - success!', _topFiveList);
    } catch (error) {
      console.log('🍪top5 - error', error);
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
          buttonText={'RANKING'}
          stack={'ProductStack'}
          screen={'Ranking'}
        />
        <MarginMedium />
        {_topFiveList === null ? (
          <TextTitlePurpleRight title={'Loading...'} />
        ) : (
          _topFiveList.map((product) => {
            return (
              <RankBar
                rankNum={_topFiveList.indexOf(product) + 1}
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
    </>
  );
};

export default TopFive;
