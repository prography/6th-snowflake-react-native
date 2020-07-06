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

const ProfileContainer = styled.View``;
const Container = styled.View`
  align-items: flex-start;
  padding: 0 ${l.mR}px;
`;
const Likes = () => {
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  const [token, setToken] = useState(null);

  const [_rankingList, _setRankingList] = useState(null);
  const _getLikes = async () => {
    try {
      const _token = await AsyncStorage.getItem(AsyncAccessToken);
      setToken(_token);
      console.log('1.🐰 토큰 store에 저장해서 불러옴:', token);
    } catch (e) {
      console.error('안 가져와');
    }

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
            <TextTitlePurpleRight title={'로그인 라이크'} />

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
          </ProfileContainer>
        </>
      ) : (
        <TextTitlePurpleRight title={'로그인이 안 됨 라이크'} />
      )}
    </>
  );
};
export default Likes;
