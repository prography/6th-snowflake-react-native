import * as React from 'react';
import { Text } from 'react-native';
import { useState } from 'react';
import styled from 'styled-components/native';

import { d, l, c } from '~/utils/constant';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import ProductInfoSpecific from '~/containers/product/info/ProductInfoSpecific';
import { Img } from '~/img';
import { Sutra, RecommendType } from '~/api/interface';
import { llog } from '~/utils/functions';
import { RootState } from '~/store/modules';
import { useSelector } from 'react-redux';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
`;
const TopArea = styled.View`
  flex-direction: row;
  width: 100%;
`;
const ImageContainer = styled.View`
  margin-right: ${d.px * 15}px;
  flex: 1;
`;
const LikeContainer = styled.TouchableOpacity`
  position: absolute;
  width: ${d.px * 40}px;
  height: ${d.px * 45}px;
  top: ${-d.px * 1}px;
  margin-left: ${d.px * 10}px;

  align-items: center;
`;
const LikeImage = styled.Image`
  width: ${d.px * 33}px;
  height: ${d.px * 40}px;
`;
const SutraImage = styled.Image`
  width: 100%;
  height: ${d.px * 120}px;
`;
const SelectionContainer = styled.View`
  flex: 1;
`;
const GoodScoreContainer = styled.View`
  width: 100%;
  height: ${d.px * 60}px;
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
  height: ${d.px * 60}px;
  flex-direction: row;

  margin-bottom: ${d.px * 20}px;
`;
const GoodButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${c.darkGray};
`;
const BadButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-color: ${c.extraLightGray};
`;

const GoodBadText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${(props) => (props.white ? 'white' : c.black)};
`;
const NotYet = styled.TouchableOpacity`
  width: 100%;
  height: ${d.px * 40}px;

  justify-content: center;
  align-items: center;
  background-color: ${c.lightGray};
`;
const SutraTitle = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 17}px;
  color: ${c.black};
`;
const CommentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CommentUsername = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${c.lightGray};
  margin-right: ${15 * d.px}px;
`;
const CommentText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${c.darkGray};
`;

interface Props {
  sutra: Sutra;
  onPressEvaluation: (id: number, rcType: RecommendType) => void;
  onPressLike: (id: number) => void;
}

// 하나짜리 컴포넌트! SutraCardsList에서 데이터 받아와서 list로...!
const OneSutraCard = ({ sutra, onPressEvaluation, onPressLike }: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );

  // state
  const [bookmarked, setBookmarked] = useState(false); // FIXME: 서버에서 bookmark 가져오기 // 나중에 삭제.
  const [selected, setSelected] = useState(true); // FIXME: 서버에서 selected 가져오기 // 나중에 삭제.
  // sutra
  const { id, name_kor, thumbnail, comment, recommend_data } = sutra;
  const { content, username } = comment || {};
  llog('sutra', sutra);
  llog('recommend_data', recommend_data);

  return (
    <>
      <Container>
        <TopArea>
          <ImageContainer>
            <SutraImage
              resizeMode={"cover"}
              source={
                blindState
                  ? Img.doodle.cdBoxMintPurpleHeart
                  : { uri: thumbnail }
              }
            />
            <LikeContainer activeOpacity={1.0} onPress={() => onPressLike(id)}>
              {/* 찜했으면 보라색으로, 찜 안 한 건 하얀색으로 */}
              {bookmarked ? (
                <LikeImage
                  resizeMode="contain"
                  source={Img.icon.bookmarkSelected}
                />
              ) : (
                  <LikeImage
                    resizeMode="contain"
                    source={Img.icon.bookmarkUnselected}
                  />
                )}
            </LikeContainer>
          </ImageContainer>
          <Text />
          {/* 내가 추천/비추/안해봤 중에 하나를 누르면 
            selected가 true가 되면서,
            통계를 볼 수 있게끔
          */}
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
                  <GoodButton onPress={() => onPressEvaluation(id, RecommendType.RECOMMEND)} activeOpacity={1}>
                    <GoodBadText white={true}>추천</GoodBadText>
                  </GoodButton>
                  <BadButton onPress={() => onPressEvaluation(id, RecommendType.UNRECOMMEND)} activeOpacity={1}>
                    <GoodBadText white={false}>비추</GoodBadText>
                  </BadButton>
                </GoodOrBadButtonContainer>
                <NotYet onPress={() => onPressEvaluation(id, RecommendType.NOTYET)} activeOpacity={1}>
                  <GoodBadText white={true}>안 해 봤어요</GoodBadText>
                </NotYet>
              </SelectionContainer>
            )}
        </TopArea>
        <MarginNarrow />
        <SutraTitle>{name_kor}</SutraTitle>
        {comment && (
          <>
            <MarginNarrow />
            <CommentWrapper>
              <CommentUsername>{username}</CommentUsername>
              <CommentText>{content}</CommentText>
            </CommentWrapper>
          </>
        )}
      </Container>

      <MarginWide />
    </>
  );
};

export default OneSutraCard;
