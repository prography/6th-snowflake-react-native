import * as React from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useLinkTo } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import NavBar from '~/screens/NavBar';
import Trio from '~/containers/product/main/Trio';
import CardPurpleRight from '~/components/universal/card/CardPurpleRight';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import TopFive from '~/containers/product/main/TopFive';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import Blinder from '~/components/product/Blinder';
import TopBarLeftIconSearchBar from '~/components/universal/topBar/TopBarLeftIconSearchBar';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import { eventUtil } from '~/utils/firebase/event';

interface Props {
  navigation: StackNavigationProp<ProductStackParamList, 'ProductMain'>;
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const ProductMain = ({ navigation }: Props) => {
  const linkTo = useLinkTo();

  //제품 리스트에 현재 id 안 오고 있음
  useEffect(() => {
    eventUtil.logScreenView(eventUtil.ProductMain);

    // 딥링크 테스트용 코드
    // setTimeout(() => { // 이거 없으면 가끔 안넘어감
    // linkTo('/ranking?category=DELAY&order=num_of_reviews')
    // linkTo('/productInfo/42')
    // linkTo('/login')
    // }, 1000)
  }, []);
  return (
    <>
      <NavBar selectedStack={'ProductStack'} navigateToStack={(stackName: string) => navigation.navigate(stackName)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopBarLeftIconSearchBar />
          <Container>
            {/* 제목이 보라색인 카드 */}
            <CardPurpleRight
              title={'Open beta OPEN!'}
              content={
                '다양한 콘돔 제품 & 후기를 준비했어요.\n추후 더 다양한 제품군으로 확장 예정이니\n많은 관심 부탁드립니다 :)'
              }
            />

            <MarginWide />
            <LineGrayRightLong />
            <MarginWide />
            {/* 콘돔 삼박자 BEST */}
            <Trio
              navigateToProductInfo={(productId: number) => navigation.navigate('ProductInfo', { productId })}
              navigateToRanking={() => navigation.navigate('Ranking')}
            />
            <MarginWide />
            <LineGrayRightLong />
            <MarginWide />
            {/* 콘돔 총점 TOP5 */}
            <TopFive
              navigateToProductInfo={(productId: number) => navigation.navigate('ProductInfo', { productId })}
            />
            <MarginBottom />
          </Container>
        </ScrollView>
      </NavBar>
      <Blinder />
      {/* Blinder: 스크린의 가장 마지막에 놓아주어야 터치가 됨*/}
    </>
  );
};

export default ProductMain;
