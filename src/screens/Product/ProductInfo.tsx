import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import styled from 'styled-components/native';
import { RouteProp } from '@react-navigation/native';

import { BASE_URL } from '~/utils/constant';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import Blinder from '~/components/product/Blinder';
import ProductInfoImage from '~/containers/product/info/ProductInfoImage';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import ProductInfoNameManufacturer from '~/containers/product/info/ProductInfoNameManufacturer';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import ProductInfoSpecific from '~/containers/product/info/ProductInfoSpecific';
import ProductInfoScore from '~/containers/product/info/ProductInfoScore';
import ProductInfoReview from '~/containers/product/info/ProductInfoReview';
import TopBarBackArrow from '~/components/universal/topBar/TopBarBackArrow';
import ProductInfoBar from '~/components/universal/bottomBar/product/ProductInfoBar';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { llog } from '~/utils/functions';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

interface Props {
  route: RouteProp<ProductStackParamList, 'ProductInfo'>;
}

const ProductInfo = ({ route }: Props) => {
  const { productId } = route.params;
  llog('🍒🍒productId', productId)

  const [productInfo, setProductInfo] = useState(null);

  const _getProductInfo = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/products/condom/${JSON.stringify(productId)}/`
      );
      const json = await response.json();
      console.log('🍒 product info success', productInfo);
      setProductInfo(json);
    } catch (error) {
      console.log('🍒product info error', error);
    }
  };

  useEffect(() => {
    _getProductInfo();
  }, []);

  React.useEffect(() => {
    analytics().setCurrentScreen("ProductInfo");
  }, []);

  return (
    <>
      {productInfo === null ? (
        <TextTitlePurpleRight title={'Loading...'} />
      ) : (
          <ProductInfoBar productId={productId}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TopBarBackArrow />
              <Container>
                <ProductInfoImage imageUri={productInfo.image} />
                <MarginMedium />
                <ProductInfoNameManufacturer
                  nameKor={productInfo.name_kor}
                  nameEng={productInfo.name_eng}
                  manufacturerKor={productInfo.manufacturer_kor}
                  manufacturerEng={productInfo.manufacturer_eng}
                />
                <MarginMedium />
                <LineGrayMiddle />
                <MarginMedium />
                <ProductInfoSpecific
                  category={productInfo.category}
                  length={productInfo.length}
                  width={productInfo.width}
                  thickness={productInfo.thickness}
                />
                <MarginMedium />
                <LineGrayMiddle />
                <MarginMedium />
                <ProductInfoScore
                  score={productInfo.score}
                  avgOily={productInfo.avg_oily}
                  avgThickness={productInfo.avg_thickness}
                  avgDurability={productInfo.avg_durability}
                />

                <MarginMedium />
                <LineGrayMiddle />
                <MarginMedium />
                <ProductInfoReview
                  reviewNum={productInfo.num_of_reviews}
                  productId={productId}
                />
              </Container>
            </ScrollView>
            <MarginBottom />
          </ProductInfoBar>
        )}
      <Blinder />
      {/* Blinder: 스크린의 가장 마지막에 놓아주어야 터치가 됨*/}
    </>
  );
};

export default ProductInfo;
