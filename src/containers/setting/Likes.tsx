import * as React from 'react';
import { useEffect, useState } from 'react';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { useSelector } from 'react-redux';
import { d, BASE_URL, c, l } from '~/utils/constant';
import styled from 'styled-components/native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import { UserId, AsyncAccessToken, UserName } from '~/utils/asyncStorage';
import RankBar from '~/components/product/ranking/RankBar';
import { ScrollView } from 'react-native';
import Blinder from '~/components/product/Blinder';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import { withNavigation } from '@react-navigation/compat';
import { Text } from 'react-native';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';

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
  width: ${d.px * 30};
  height: ${d.px * 30};
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

const Likes = ({ token, navigation }: Props) => {
  const blindState = useSelector((state) => state.blindReducer.blindState);
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);

  const [_rankingList, _setRankingList] = useState(null);
  const [showLikes, setShowLikes] = useState(false);
  const _getLikes = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/likes/?model=product&is_product_detail=true`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();

      console.log('2.🐰Like List 불러옴 - 성공!', json.results);
      _setRankingList(json.results);
    } catch (error) {
      console.log('🐰Like List - error', error);
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
                    _rankingList.map((product) => {
                      return (
                        <>
                          <LikeProductContainer
                            onPress={() => {
                              navigation.navigate('JoinStack', {
                                screen: 'ProductInfo',
                                params: { productId: product.object_detail.id },
                              });
                            }}
                            // stack, { screen: screen, params: params }
                            key={_rankingList.indexOf(product) + 1}
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
                        </>
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
