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

interface Props {
  token: any;
}
const ProfileContainer = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;
const Container = styled.View`
  align-items: flex-start;

  flex-direction: row;
`;
const Likes = ({ token }: Props) => {
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);

  const [_rankingList, _setRankingList] = useState(null);
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
  }, []);

  return (
    <>
      {_isLoggedin ? (
        <>
          <ProfileContainer>
            <TextTitleDarkLeft title={'찜한 제품들'} />
            <ScrollView horizontal={true}>
              <Container>
                {_rankingList ? (
                  _rankingList.map((product) => {
                    return (
                      <RankBar
                        rankNum={_rankingList.indexOf(product) + 1}
                        productCompany={product.object_detail.manufacturer_kor}
                        productName={product.object_detail.name_kor}
                        imageUri={product.object_detail.thumbnail}
                        score={product.object_detail.score}
                        id={product.object_detail.id}
                      />
                    );
                  })
                ) : (
                  <TextTitlePurpleRight title={'Loading...'} />
                )}
              </Container>
            </ScrollView>
          </ProfileContainer>
        </>
      ) : (
        <TextTitlePurpleRight title={'로그인 안 됨'} />
      )}
    </>
  );
};
export default Likes;
