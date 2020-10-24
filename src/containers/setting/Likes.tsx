import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { useFocusEffect } from '@react-navigation/native';

import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { d, c, l } from '~/utils/constant';
import TextTitleDarkLeft from '~/components/universal/text/TextTitleDarkLeft';
import TextProductCompany from '~/components/universal/text/product/TextProductCompany';
import TextProductName from '~/components/universal/text/product/TextProductName';
import { getTokenItem } from '~/utils/asyncStorage';
import { RootState } from '~/store/modules';
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';
import { Img } from '~/img'
import { ResultsRes, CondomLiked } from '~/api/interface';

interface Props {
  navigateToProductInfo: (productId: number) => void;
}
const ProfileContainer = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;
const Container = styled.View`
  align-items: flex-start;
  flex-direction: row;
`;

const TitleWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const ShowLikesContainer = styled.View`
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

const Likes = ({ navigateToProductInfo }: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );
  const _isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);

  const [_likeList, _setLikeList] = useState<CondomLiked[]>(null);
  const [showLikes, setShowLikes] = useState<boolean>(false);

  const _getLikes = async () => {
    try {
      const token = await getTokenItem();
      if (!token) { return; }

      const { status, response } = await fetchAPI(
        `likes/?model=product&is_product_detail=true`,
        { token },
      );
      const json: ResultsRes<CondomLiked> = await response.json();
      llog('2.🐰Like List 불러옴 - 성공!', json);

      if (status === 200) {
        _setLikeList(json.results);
      }
    } catch (error) {
      llog('🐰Like List - error', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      _getLikes();
    }, [])
  );

  useEffect(() => {
    setShowLikes(false);
  }, []);

  return (
    <>
      {_isLoggedin ? (
        <>
          <ProfileContainer>
            <TitleWrapper
              activeOpacity={1}
              onPress={() => {
                setShowLikes(!showLikes);
                _getLikes();
              }}
            >
              <TextTitleDarkLeft title={"찜한 제품들"} />
              <ShowLikesContainer>
                <Text>{showLikes ? "▼" : "▲"}</Text>
              </ShowLikesContainer>
            </TitleWrapper>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {showLikes && (
                <Container>
                  {_likeList ? (
                    _likeList.map(
                      ({ object_detail }: CondomLiked, index: number) => {
                        const {
                          id,
                          thumbnail,
                          manufacturer_kor,
                          name_kor,
                        } = object_detail;
                        return (
                          <LikeProductContainer
                            key={index}
                            onPress={() => navigateToProductInfo(id)}
                          >
                            <ImageWrapper>
                              <ProductImage
                                style={{ resizeMode: "contain" }}
                                source={
                                  blindState
                                    ? Img.doodle.cdBoxMint
                                    : thumbnail === null
                                    ? Img.icon.null
                                    : { uri: thumbnail }
                                }
                              />
                            </ImageWrapper>
                            <TextProductCompany
                              productCompany={manufacturer_kor}
                            />
                            <TextProductName productName={name_kor} />
                          </LikeProductContainer>
                        );
                      }
                    )
                  ) : (
                    <TextTitlePurpleRight title={"Loading..."} />
                  )}
                </Container>
              )}
            </ScrollView>
          </ProfileContainer>
        </>
      ) : (
        <TextTitlePurpleRight title={"로그인 안 됨"} />
      )}
    </>
  );
};

export default Likes;
