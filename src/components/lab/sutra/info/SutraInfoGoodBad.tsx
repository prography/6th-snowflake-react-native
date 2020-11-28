import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, Text, Alert } from 'react-native';

import { d, l, c } from '~/utils/constant';
import { Img } from '~/img';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import MarginWide from '~/components/universal/margin/MarginWide';
import { FirebaseAnalyticsTypes } from '@react-native-firebase/analytics';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/modules';
import { Card, RecommendType } from '~/api/interface';
import { consoleError, llog } from '~/utils/functions';
import { fetchAPI } from '~/api';
import { getTokenItem } from '~/utils/asyncStorage';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { alertUtil } from '~/utils/alert';

interface Props {
  newSutraId: number;
}

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
`;
const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const LikeContainer = styled.TouchableOpacity`
  position: absolute;
  width: ${d.px * 40}px;
  height: ${d.px * 45}px;
  top: ${-d.px * 1}px;
  right: ${l.mR - 3.5}px;
  margin-left: ${d.px * 10}px;
  align-items: center;
`;
const LikeImage = styled.Image`
  width: ${d.px * 33}px;
  height: ${d.px * 40}px;
`;
const SutraImage = styled.Image`
  width: 100%;
  height: ${d.px * 230}px;
`;

const InfoContainer = styled.View``;
const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const KoreanNameText = styled.Text`
  font-family: Jost-Bold;
  font-size: ${d.px * 20}px;
  color: ${c.black};
  margin-right: ${d.px * 15}px;
`;
const EnglishNameText = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 15}px;
  color: ${c.darkGray};
`;
const DetailContainer = styled.View``;
const DetailText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${c.darkGray};
`;
const SelectionContainer = styled.View``;
const GoodScoreContainer = styled.View`
  width: 100%;
  height: ${d.px * 50}px;
  flex-direction: row;
  background-color: ${c.mint};
  margin-bottom: ${d.px * 13}px;
  align-items: center;
  justify-content: center;
`;
const GoodScore = styled.View`
  width: ${(props) => props.score}%;
  height: 100%;
  background-color: ${c.purple};
  position: absolute;
  left: 0;
`;
const GoodScoreText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 17}px;
  color: white;
`;
const PurpleSkyScoreContainer = styled.View`
  flex-direction: column;
  width: 100%;
`;
const PurpleScoreContainer = styled.View`
  flex-direction: column;
`;
const PurpleHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 5}px;
`;
const PurpleScoreWrapper = styled.View`
  width: 100%;
  position: absolute;
  height: ${d.px * 23}px;
  justify-content: center;
`;
const PurpleScore = styled.View`
  height: ${d.px * 5}px;
  width: ${(props) => props.score}%;
  background-color: ${c.purple};
`;
const SkyScoreContainer = styled.View`
  flex-direction: row;
`;
const SkyHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 5}px;
`;
const SkyScoreWrapper = styled.View`
  width: 100%;
  position: absolute;
  height: ${d.px * 23}px;
  justify-content: center;
`;
const SkyScore = styled.View`
  height: ${d.px * 5}px;
  width: ${(props) => props.score}%;
  background-color: ${c.purple};
`;
const GoodOrBadButtonContainer = styled.View`
  width: 100%;
  height: ${d.px * 50}px;
  flex-direction: row;
  margin-bottom: ${d.px * 20}px;
`;
const GoodButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${c.purple};
`;
const BadButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${c.mint};
`;

const GoodBadText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${(props) => (props.white ? 'white' : c.darkGray)};
`;
const NotYet = styled.TouchableOpacity`
  width: 100%;
  height: ${d.px * 30}px;
  justify-content: center;
  align-items: center;
  background-color: ${c.darkGray};
`;
const SutraInfoGoodBad = ({newSutraId}: Props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [selected, setSelected] = useState(FirebaseAnalyticsTypes);

  const { data: userInfo } = useSelector((state: RootState) => state.join.userInfo.userInfo);

  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );

const [_newCard, _setNewCard] = useState<Card>(null);

  const _getNewCard = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        return;
      }

      const { response, status } = await fetchAPI(`labs/sutras/${newSutraId}/`, { token });
      const json: Card = await response.json();
      llog("New Card Detail Info - success!", json);

      if (status === 200) {
        _setNewCard(json);
      }
    } catch (error) {
      consoleError("New Card - error", error);
    }
  };




  // const onPressEvaluation = async (sutraId: number, rcType: RecommendType) => {
  //   try {
  //     const token = await getTokenItem();
  //     if (!token) {
  //       Alert.alert("❄️", "로그인 후 이용해주세요!");
  //       return;
  //     }

  //     if (position === Position.NONE) {
  //       openQuestionModal();
  //       return;
  //     }

  //     const { status } = await fetchAPI(`labs/sutras/${sutraId}/evaluations/`, { method: 'POST', token, params: { recommend_type: rcType } });
  //     llog('🐰 Sutra', rcType, '성공 = 201', status);

  //     if (status === 201) {
  //       _getSutraList();
  //     }
  //   } catch (error) {
  //     consoleError(`SutraList - ${rcType} error`, error);
  //   }
  // };
  // // 평가 삭제
  // const onPressDeleteEvaluation = async (sutraId: number) => {
  //   try {
  //     const token = await getTokenItem();
  //     if (!token) {
  //       alertUtil.needLogin(navigateToJoinStack, '로그인');
  //       return;
  //     }

  //     const { status } = await fetchAPI(`labs/sutras/${sutraId}/evaluations/`, { method: 'DELETE', token });
  //     llog('🐰 Sutra 삭제', '성공 = 204', status);

  //     if (status === 204) {
  //       _getSutraList();
  //     }
  //   } catch (error) {
  //     consoleError(`SutraList - delete 평가 error`, error);
  //   }
  // }
  // // 찜
  // const onPressLike = async (sutraId: number) => {
  //   try {
  //     const token = await getTokenItem();
  //     if (!token) {
  //       alertUtil.needLogin(navigateToJoinStack, '로그인');
  //       return;
  //     }

  //     const { status } = await fetchAPI('likes/', {
  //       method: 'POST',
  //       token,
  //       params: {
  //         model: 'sutra',
  //         object_id: sutraId,
  //       },
  //     });
  //     llog('🐰 Sutra Like - 성공 = 201', status);

  //     if (status === 201) {
  //       _getSutraList();
  //     }
  //   } catch (error) {
  //     consoleError('SutraList - 찜 error', error);
  //   }
  // };
  // // 찜 삭제
  // const onPressDeleteLike = async (likeId: number) => {
  //   try {
  //     const token = await getTokenItem();
  //     if (!token) {
  //       alertUtil.needLogin(navigateToJoinStack, '로그인');
  //       return;
  //     }

  //     const { status, response } = await fetchAPI(`likes/${likeId}`, {
  //       method: 'DELETE',
  //       token,
  //     });

  //     const json = await response.json();
  //     llog('🐰 Sutra Delete Like - 성공 = 204', status, json);

  //     if (status === 204) {
  //       _getSutraList();
  //     }
  //   } catch (error) {
  //     consoleError('SutraList - 찜 delete error', error);
  //   }
  // };













  useEffect(() => {
    console.log('newSUtraId', newSutraId)
    _getNewCard();
  }, []);

  return (
    <>
    {!_newCard ? <TextTitlePurpleRight title={"Loading..."} />:(
      <>
      <Container>
        <ImageContainer>
          <SutraImage
            style={{ resizeMode: "cover" }}
            source={
              blindState
                ? Img.doodle.cdBoxMintPurpleHeart
                : { uri: _newCard?.image }
            }
          />
          <LikeContainer activeOpacity={1}>
            {/* 찜했으면 보라색으로, 찜 안 한 건 하얀색으로 */}
            {bookmarked ? (
              <LikeImage
                style={{ resizeMode: "contain" }}
                source={Img.icon.bookmarkSelected}
              />
            ) : (
              <LikeImage
                style={{ resizeMode: "contain" }}
                source={Img.icon.bookmarkUnselected}
              />
            )}
          </LikeContainer>
        </ImageContainer>
        <MarginMedium />
        <InfoContainer>
          <NameContainer>
            <KoreanNameText>{_newCard.name_kor}</KoreanNameText>
            <EnglishNameText>{_newCard.name_eng}</EnglishNameText>
          </NameContainer>
          <MarginNarrow />
          <DetailContainer>
            <DetailText>{_newCard.description}</DetailText>
          </DetailContainer>
        </InfoContainer>
      </Container>
      <MarginNarrow />
      <LineGrayMiddle />
      <MarginMedium />
      <Container>
        {selected ? (
          <SelectionContainer>
            <GoodScoreContainer>
              {/* score들의 숫자는 임의로 넣은 점수... 받아온 점수가 들어가면 됨! */}
              <GoodScore score={74.5} />
              <GoodScoreText>추천 74.5%</GoodScoreText>
            </GoodScoreContainer>

            <PurpleSkyScoreContainer>
              <PurpleScoreContainer>
                <PurpleScoreWrapper>
                  <PurpleScore score={84.6} />
                </PurpleScoreWrapper>
                <PurpleHead
                  style={{ resizeMode: "contain" }}
                  source={Img.sample.purpleCharacHead}
                />
              </PurpleScoreContainer>
              <SkyScoreContainer>
                <SkyScoreWrapper>
                  <SkyScore score={68.3} />
                </SkyScoreWrapper>
                <SkyHead
                  style={{ resizeMode: "contain" }}
                  source={Img.sample.skyCharacHead}
                />
              </SkyScoreContainer>
            </PurpleSkyScoreContainer>
          </SelectionContainer>
        ) : (
          <SelectionContainer>
            <GoodOrBadButtonContainer>
              <GoodButton activeOpacity={1}>
                <GoodBadText white={true}>추천</GoodBadText>
              </GoodButton>
              <BadButton activeOpacity={1}>
                <GoodBadText white={false}>비추</GoodBadText>
              </BadButton>
            </GoodOrBadButtonContainer>
            <NotYet activeOpacity={1}>
              <GoodBadText white={true}>안 해 봤어요</GoodBadText>
            </NotYet>
          </SelectionContainer>
        )}
      </Container>
      </>
    )}
      
      <MarginMedium />
      <LineGrayMiddle />
    </>
  );
};

export default SutraInfoGoodBad;
