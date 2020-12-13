import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

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
import { llog, consoleError } from '~/utils/functions';
import { ProductStackParamList } from '~/navigation/tabs/ProductStack';
import { fetchAPI } from '~/api';
import { CondomProduct } from '~/api/interface';
import { eventUtil } from '~/utils/firebase/event';
import { getTokenItem } from '~/utils/asyncStorage';
import { RootState } from '~/store/modules';
import { alertUtil } from '~/utils/alert';
import { toast } from '~/utils/toast';

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

interface Props {
  navigation: StackNavigationProp<ProductStackParamList, 'ProductInfo'>;
  route: RouteProp<ProductStackParamList, 'ProductInfo'>;
}

const ProductInfo = ({ navigation, route }: Props) => {
  // param
  const { productId } = route.params;
  llog('🍒 productId', productId)
  // state
  const [productInfo, setProductInfo] = useState<CondomProduct>(null);
  // redux
  const isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);
  // func
  const navigateToJoinStack = () => navigation.navigate('JoinStack');

  // api
  const _getProductInfo = async () => {
    try {
      const token = await getTokenItem();

      const { status, response } = await fetchAPI(`products/condom/${productId}/`, { token });
      const json: CondomProduct = await response.json();
      llog('🍒 product info success', json);
      if (status === 200) {
        setProductInfo(json);
      }
    } catch (error) {
      llog('🍒product info error', error);
    }
  };

  // 찜 or 찜 삭제
  const onPressLikeOrDeleteLike = async (action: 'like' | 'deleteLike') => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }

      const { status } = await fetchAPI('likes/', {
        method: action === 'like' ? 'POST' : 'DELETE',
        token,
        params: {
          model: 'product',
          object_id: productId,
        },
      });
      // const json = await response.json(); // 204 일 때 .json() 하면 서버쪽에서 보내주는게 없어서 에러남
      llog('💚 product - like or delete like', status);
      if (action === 'like' && status === 201) {
        _getProductInfo();
      } else if (action === 'deleteLike' && status === 204) {
        _getProductInfo();
      } else {
        toast('오류가 발생했어요');
      }
    } catch (error) {
      consoleError(`ProductInfo(Bar) - ${action === 'like' ? '좋아요' : '좋아요 삭제'}  error`, error);
    }
  };

  useEffect(() => {
    // event는 componentDidMount에서만
    eventUtil.logScreenView(eventUtil.ProductInfo);
  }, []);

  useEffect(() => {
    // 로그인 상태 변할 때마다 불러옴
    _getProductInfo();
  }, [isLoggedin]);

  return (
    <>
      {productInfo === null ? (
        <TextTitlePurpleRight title={'Loading...'} />
      ) : (
          <ProductInfoBar
            isLiked={true} // TODO: is_user_like
            onPressLikeOrDeleteLike={onPressLikeOrDeleteLike}
            onPressWriteReview={() => {
              if (isLoggedin) {
                navigation.navigate('ReviewUpload1', { productInfo });
              } else {
                alertUtil.needLogin(navigateToJoinStack, '로그인');
              }
            }}>
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
