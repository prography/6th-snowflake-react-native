import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';

import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { d, c, l } from '~/utils/constant';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';
import { AsyncAccessToken } from '~/utils/asyncStorage';
import { RootState } from '~/store/modules';
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';

interface Props {
  token: any;
  navigation: any;
}
const ProfileContainer = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;
const Container = styled.View`
  align-items: flex-start;
  flex-direction: row;
`;

const TitleWrapper = styled.View`
  flex-direction: row;

  align-items: center;
`;
const ShowLikesButton = styled.TouchableOpacity`
  width: ${d.px * 30}px;
  height: ${d.px * 30}px;
  align-items: center;
  justify-content: center;
`;

const LikeProductContainer = styled.TouchableOpacity`
  margin-top: ${d.px * 7}px;
  margin-right: ${d.px * 20}px;
  justify-content: center;

  align-items: center;
`;
const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: ${d.px * 70}px;
  height: ${d.px * 70}px;
`;
const ProductImage = styled.Image`
  width: ${d.px * 45}px;
  height: ${d.px * 50}px;
`;

const Likes = ({ navigation }: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );
  const _isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);

  const [_rankingList, _setRankingList] = useState(null);
  const [showLikes, setShowLikes] = useState(false);

  const { getItem: getTokenItem } = useAsyncStorage(AsyncAccessToken);
  const _getLikes = async () => {
    try {
      const token = await getTokenItem();
      if (!token) { return; }

      const { status, response } = await fetchAPI(
        `likes/?model=product&is_product_detail=true`,
        { token },
      );

      if (status === 200) {
        const json = await response.json();
        llog('2.🐰Like List 불러옴 - 성공!', response);
        _setRankingList(json.results);
      }
    } catch (error) {
      llog('🐰Like List - error', error);
    }
  };

  useEffect(() => {
    _getLikes();
    setShowLikes(false);
  }, []);

  return (
    <>
      {_isLoggedin ? (
        <>
          <ProfileContainer>
            <TitleWrapper>
              <TextTitleDarkLeft title={'찜한 제품들'} />
              <ShowLikesButton
                onPress={() => {
                  setShowLikes(!showLikes);
                  _getLikes();
                }}
              >
                <Text>{showLikes ? '▼' : '▲'}</Text>
              </ShowLikesButton>
            </TitleWrapper>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {showLikes && (
                <Container>
                  {_rankingList ? (
                    _rankingList.map((product, index: number) => {
                      return (
                        <LikeProductContainer
                          onPress={() => {
                            navigation.navigate('JoinStack', {
                              screen: 'ProductInfo',
                              params: { productId: product.object_detail.id },
                            });
                          }}
                          // stack, { screen: screen, params: params }
                          key={index}
                        >
                          <ImageWrapper>
                            <ProductImage
                              style={{ resizeMode: 'contain' }}
                              source={
                                blindState
                                  ? require('~/img/doodle/doodleCdBoxMint.png')
                                  : product.object_detail.thumbnail === null
                                    ? require('~/img/icon/imageNull.png')
                                    : { uri: product.object_detail.thumbnail }
                              }
                            />
                          </ImageWrapper>
                          <TextProductCompany
                            productCompany={
                              product.object_detail.manufacturer_kor
                            }
                          />
                          <TextProductName
                            productName={product.object_detail.name_kor}
                          />
                        </LikeProductContainer>
                      );
                    })
                  ) : (
                      <TextTitlePurpleRight title={'Loading...'} />
                    )}
                </Container>
              )}
            </ScrollView>
          </ProfileContainer>
        </>
      ) : (
          <TextTitlePurpleRight title={'로그인 안 됨'} />
        )}
    </>
  );
};

export default withNavigation(Likes);
