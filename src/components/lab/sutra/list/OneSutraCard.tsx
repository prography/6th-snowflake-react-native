import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { HIT_SLOP } from '~/utils/theme';
import { d, l, c } from '~/utils/constant';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import { Img } from '~/img';
import { Sutra, RecommendType } from '~/api/interface';
import { RootState } from '~/store/modules';
import { useSelector } from 'react-redux';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import LinearGradient from 'react-native-linear-gradient';

const TOP_AREA = 40;
const LIKE_HEIGHT = 30;
const SUTRA_IMAGE_HEIGHT = 120
const SCORE_BORDER_RADIUS = 10
const SCORE_AREA_TOP_HEIGHT = 45
const SCORE_AREA_BOTTOM_HEIGHT = 35
const CHARAC_HEAD_HEIGHT = 23
const SCORE_AREA_MARGIN = 15
const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
`;
const TopArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: ${props => props.theme.dimensions.px * TOP_AREA}px;
`;
const AgainLikeWrapper = styled.View`
  flex-direction: row;
  
`
const AgainIcon = styled.View`
  width: ${props => props.theme.dimensions.px * 20}px;
  height: ${props => props.theme.dimensions.px * 20}px;
  border-radius: 1000px;
  background-color: ${props => props.theme.themeColor.extraLightGray};
  margin-right: ${props => props.theme.dimensions.px * 15}px;
  margin-top:${props => props.theme.dimensions.px * (LIKE_HEIGHT - 20) / 2}px;
  justify-content: center;
  align-items: center;
`
const AgainIconImg = styled.Image`
   width: ${props => props.theme.dimensions.px * 13}px;
  height: ${props => props.theme.dimensions.px * 13}px;
  margin-bottom:  ${props => props.theme.dimensions.px * 1}px;
`
const MiddleArea = styled.View`
  flex-direction: row;
`
const ImageContainer = styled.TouchableOpacity`
  margin-right: ${d.px * 15}px;
  flex: 1;
`;
const LikeContainer = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: flex-start;
`;
const LikeImage = styled.Image`
  width: ${d.px * 22}px;
  height: ${d.px * LIKE_HEIGHT}px;
`;
const SutraImage = styled.Image`
  width: 100%;
  height: ${d.px * SUTRA_IMAGE_HEIGHT}px;
`;
const SelectionContainer = styled.View`
  flex: 1;
  height: ${d.px * SUTRA_IMAGE_HEIGHT}px;
  
  justify-content: center;
`;
const GoodScoreContainer = styled.View`
  width: 100%;
  height: ${d.px * SCORE_AREA_TOP_HEIGHT}px;
  flex-direction: row;
  margin-bottom: ${d.px * SCORE_AREA_MARGIN}px;
  align-items: center;
  justify-content: center;
  /* background-color: gray; */
  border-radius: 10;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.themeColor.extraLightGray};
`;

const GoodScoreText = styled.Text`
  font-family: Jost-Bold;
  font-size: ${d.px * 15}px;
  color: ${c.black};
`;
const PurpleSkyScoreContainer = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${d.px * CHARAC_HEAD_HEIGHT * 2}px;
`;
const OneScoreContainer = styled.View`
  flex-direction: column;
  height: ${d.px * CHARAC_HEAD_HEIGHT}px;
`;
const CharacHead = styled.Image`
  height: ${d.px * CHARAC_HEAD_HEIGHT * 0.9}px;
  width: ${d.px * 30}px;
  background-color: white;

`;
const ScoreWrapper = styled.View`
  width: 100%;
  position: absolute;
  height: ${d.px * 23}px;
  justify-content: center;
`;


interface ScoreBar {
  score: number;
}
const ScoreBar = styled.View<ScoreBar>`
  height: ${d.px * 5}px;
  width: ${(props) => props.score}%;
  background-color: ${c.purple};
  border-radius: 10px;
`;
const GoodOrBadButtonContainer = styled.View`
  width: 100%;
  height: ${d.px * SCORE_AREA_TOP_HEIGHT}px;
  flex-direction: row;
  margin-bottom: ${d.px * SCORE_AREA_MARGIN}px;
  border-radius: ${SCORE_BORDER_RADIUS}px;
  
`;
const GoodButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${c.darkGray};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius:${SCORE_BORDER_RADIUS};
  border-top-left-radius: ${SCORE_BORDER_RADIUS};
`;
const BadButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-color: ${c.extraLightGray};
  border-top-right-radius:${SCORE_BORDER_RADIUS};
  border-bottom-right-radius: ${SCORE_BORDER_RADIUS};
  border-bottom-left-radius:0;
  border-top-left-radius: 0;
`;

const GoodBadText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${(props) => (props.white ? 'white' : c.black)};
`;
const NotYetWrapper = styled.View`
   height: ${d.px * CHARAC_HEAD_HEIGHT * 2}px;
`
const NotYet = styled.TouchableOpacity`
  width: 100%;
  height: ${d.px * SCORE_AREA_BOTTOM_HEIGHT}px;
  justify-content: center;
  align-items: center;
  background-color: ${c.lightGray};
  border-radius: ${SCORE_BORDER_RADIUS};
`;
const SutraTitle = styled.Text`
  font-family: Jost-Bold;
  font-size: ${d.px * 16}px;
  color: ${c.black};
  
`;
const CommentWrapper = styled.TouchableOpacity`
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
  navigateSutraInfo: () => void;
  onPressEvaluation: (sutraId: number, rcType: RecommendType) => void;
  onPressDeleteEvaluation: (sutraId: number) => void;
  onPressLikeOrDeleteLike: (action: 'like' | 'deleteLike', sutraId: number) => void;
}

const OneSutraCard = ({
  sutra,
  navigateSutraInfo,
  onPressEvaluation,
  onPressDeleteEvaluation,
  onPressLikeOrDeleteLike,
}: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState,
  );

  // sutra
  const { id, name_kor, thumbnail, comment, recommend_data, is_user_like } = sutra;
  const { percentage, purple_count, sky_count } = recommend_data || {};

  return (
    <>
      <Container>
        <TopArea>
          <SutraTitle onPress={navigateSutraInfo}>{name_kor}</SutraTitle>
          <AgainLikeWrapper>
            {recommend_data !== null && <TouchableOpacity hitSlop={HIT_SLOP} onPress={() => onPressDeleteEvaluation(id)} >
              <AgainIcon>
                <AgainIconImg source={Img.icon.againIcon} resizeMode='contain' />
              </AgainIcon>
            </TouchableOpacity>}
            <LikeContainer
              hitSlop={HIT_SLOP}
              activeOpacity={1.0}
              onPress={() => onPressLikeOrDeleteLike(is_user_like ? 'deleteLike' : 'like', id)}>
              {/* 찜했으면 보라색으로, 찜 안 한 건 하얀색으로 */}
              <LikeImage
                resizeMode="contain"
                source={is_user_like ? Img.icon.bookmarkSelected : Img.icon.bookmarkUnselected}
              />
            </LikeContainer>
          </AgainLikeWrapper>
        </TopArea>
        <MiddleArea>
          <ImageContainer activeOpacity={1.0} onPress={navigateSutraInfo}>

            <SutraImage
              resizeMode={"contain"}
              source={
                blindState
                  ? Img.sutra.sutraHidden
                  : { uri: thumbnail }
              }
            />

          </ImageContainer>
          {/* 내가 추천/비추/안해봤 중에 하나를 누르면 
            selected가 true가 되면서,
            통계를 볼 수 있게끔
            => 평가 했으면 recommend_data != null, 평가 안했으면 recommend_data = null 임
          */}
          {recommend_data !== null ? (
            <SelectionContainer>

              <GoodScoreContainer>
                {/* score들의 숫자는 임의로 넣은 점수... 받아온 점수가 들어가면 됨! */}

                <LinearGradient

                  colors={['#9BE4FA', c.mint]}
                  style={{
                    position: 'absolute',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: SCORE_BORDER_RADIUS,
                    borderTopLeftRadius: SCORE_BORDER_RADIUS,
                    height: '100%',
                    /* width: '50%', */
                    width: `${(percentage)}%`,
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 0
                  }}>

                </LinearGradient>
                <GoodScoreText>{Number.isInteger(percentage) ? percentage : percentage.toFixed(1)}%</GoodScoreText>
              </GoodScoreContainer>

              <PurpleSkyScoreContainer>
                <OneScoreContainer>
                  <ScoreWrapper>
                    <LinearGradient
                      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                      colors={['#9BE4FA', '#C289F6']}
                      style={{
                        borderRadius: SCORE_BORDER_RADIUS,
                        height: d.px * 7,
                        width: `${(purple_count / (purple_count + sky_count) * 100)}%`
                      }}></LinearGradient>

                  </ScoreWrapper>
                  <CharacHead
                    resizeMode='contain'
                    source={Img.sutra.purpleHead}
                  />
                </OneScoreContainer>
                <OneScoreContainer>
                  <ScoreWrapper>
                    <LinearGradient
                      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                      colors={['#C289F6', '#9BE4FA']}
                      style={{
                        borderRadius: 500,
                        height: 7,
                        width: `${(sky_count / (purple_count + sky_count) * 100)}%`
                      }}></LinearGradient>

                  </ScoreWrapper>
                  <CharacHead
                    resizeMode='contain'
                    source={Img.sutra.skyHead}
                  />
                </OneScoreContainer>
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
                <NotYetWrapper>
                  <NotYet onPress={() => onPressEvaluation(id, RecommendType.NOTYET)} activeOpacity={1}>
                    <GoodBadText white={true}>안 해 봤어요</GoodBadText>
                  </NotYet>
                </NotYetWrapper>
              </SelectionContainer>
            )}

        </MiddleArea>
        <MarginMedium />

        {comment && (
          <>
            <MarginNarrow />
            <CommentWrapper activeOpacity={1.0} onPress={navigateSutraInfo}>
              <CommentUsername>{comment.username}</CommentUsername>
              <CommentText>{comment.content}</CommentText>
            </CommentWrapper>
          </>
        )}
      </Container>
      <MarginWide />
      <LineGrayMiddle />
      <MarginWide />


    </>
  );
};

export default OneSutraCard;
