import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';
import { ScrollView } from 'react-native';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import TextContentLightLeft from '~/components/universal/text/TextContentLightLeft';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import TrioBox from '~/components/product/main/TrioBox';
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';
import { CondomTrio, CondomProductMain } from '~/api/interface';

interface Props {
  navigateToProductInfo: (productId: number) => void;
  navigateToRanking: () => void;
}

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
`;

const TrioContainer = styled.View`
  padding-left: ${d.px * 30}px;
  padding-right: ${d.px * 10}px;
  flex-direction: row;
`;

const Trio = ({ navigateToProductInfo, navigateToRanking }: Props) => {
  const [_trioList, _setTrioList] = useState<CondomTrio>(null);

  const _getTrioList = async () => {
    try {
      const { status, response } = await fetchAPI(`products/condom/trio/`);
      const json: CondomTrio = await response.json();
      llog('🍡trio - success!', json);

      if (status === 200) {
        _setTrioList(json);
      }
    } catch (error) {
      llog('🍡trio - error', error);
    }
  };

  useEffect(() => {
    _getTrioList();
  }, []);

  // const trioInfo = [
  //   {
  //     key: 0,
  //     title: '얇기',
  //     productCompany: '듀렉스',
  //     productName: '필 울트라씬',
  //     imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
  //   },
  //   {
  //     key: 1,
  //     title: '내구성',
  //     productCompany: '유니더스',
  //     productName: '롱러브',
  //     imageUri:
  //       'https://p7.hiclipart.com/preview/843/339/817/5bbff9096ac0c.jpg',
  //   },
  //   {
  //     key: 2,
  //     title: '윤활제',
  //     productCompany: '이브',
  //     productName: '플레져미',
  //     imageUri:
  //       'https://images-na.ssl-images-amazon.com/images/I/51tPmiQBoHL.jpg',
  //   },
  // ];
  return (
    <>
      <Container>
        <TextTitleDarkLeft title={'콘돔 삼박자 BEST'} />
        <MarginMedium />
        <TextContentLightLeft
          content={
            '눈송이 팀이 생생한 후기를 꼼꼼히 분석하여 선정한\n콘돔의 가장 중요한 3가지 요소, 콘돔 삼박자!'
          }
        />
        <MarginMedium />
      </Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TrioContainer>
          {_trioList &&
            _trioList.thickness.map((product: CondomProductMain, index: number) => {
              return (
                <TrioBox
                  key={index}
                  id={product.id}
                  title={'얇기'}
                  productCompany={product.manufacturer_kor}
                  productName={product.name_kor}
                  imageUri={product.thumbnail}
                  navigateToProductInfo={navigateToProductInfo}
                  navigateToRanking={navigateToRanking}
                />
              );
            })}
          {_trioList &&
            _trioList.durability.map((product: CondomProductMain, index: number) => {
              return (
                <TrioBox
                  key={index + 100}
                  id={product.id}
                  title={'내구성'}
                  productCompany={product.manufacturer_kor}
                  productName={product.name_kor}
                  imageUri={product.thumbnail}
                  navigateToProductInfo={navigateToProductInfo}
                  navigateToRanking={navigateToRanking}
                />
              );
            })}
          {_trioList &&
            _trioList.oily.map((product: CondomProductMain, index: number) => {
              return (
                <TrioBox
                  key={index + 200}
                  id={product.id}
                  title={'윤활제'}
                  productCompany={product.manufacturer_kor}
                  productName={product.name_kor}
                  imageUri={product.thumbnail}
                  navigateToProductInfo={navigateToProductInfo}
                  navigateToRanking={navigateToRanking}
                />
              );
            })}
        </TrioContainer>
      </ScrollView>
    </>
  );
};

export default Trio;
