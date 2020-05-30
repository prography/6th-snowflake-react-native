import * as React from 'react';
import styled from 'styled-components/native';
import { d } from '~/utils/constant';
import TextTitleDarkPurpleLink from '~/components/universal/text/TextTitleDarkPurpleLink';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import RankBar from '~/components/product/ranking/RankBar';

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  margin-left: ${d.px * 30}px;
`;

const TopFive = () => {
  const topFiveInfo = [
    {
      key: 0,
      rankNum: 1,
      productCompany: '듀렉스',
      productName: '필 울트라씬',
      imageUri: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
      score: 4.97,
    },
    {
      key: 1,
      rankNum: 2,
      productCompany: '유니더스',
      productName: '롱러브',
      imageUri: 'https://i.dlpng.com/static/png/291856_preview.png',
      score: 4.84,
    },
    {
      key: 2,
      rankNum: 3,
      productCompany: '이브',
      productName: '플레져미',
      imageUri: 'https://i.dlpng.com/static/png/117198_preview.png',
      score: 4.8,
    },
    {
      key: 3,
      rankNum: 4,
      productCompany: '유니더스',
      productName: '003',
      imageUri:
        'https://p7.hiclipart.com/preview/843/339/817/5bbff9096ac0c.jpg',
      score: 4.77,
    },
    {
      key: 4,
      rankNum: 5,
      productCompany: 'Durex',
      productName: 'Pleasure Me',
      imageUri:
        'https://images-na.ssl-images-amazon.com/images/I/51tPmiQBoHL.jpg',
      score: 4.65,
    },
  ];
  return (
    <>
      <Container>
        <TextTitleDarkPurpleLink
          title={'콘돔 총점 TOP5'}
          buttonText={'RANKING'}
          link={'Ranking'}
        />
        <MarginMedium />
        {topFiveInfo.map((product) => {
          return (
            <RankBar
              rankNum={product.rankNum}
              productCompany={product.productCompany}
              productName={product.productName}
              imageUri={product.imageUri}
              score={product.score}
            />
          );
        })}
      </Container>
    </>
  );
};

export default TopFive;
