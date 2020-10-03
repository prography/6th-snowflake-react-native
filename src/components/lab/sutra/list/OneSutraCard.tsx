import * as React from 'react';
import { Text } from 'react-native';
import { useState } from 'react';
import styled from 'styled-components/native';

import { d, l, c } from '~/utils/constant';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import ProductInfoSpecific from '~/containers/product/info/ProductInfoSpecific';

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
const BookmarkContainer = styled.TouchableOpacity`
  position: absolute;
  width: ${d.px * 40}px;
  height: ${d.px * 45}px;
  top: ${-d.px * 1}px;
  margin-left: ${d.px * 10}px;

  align-items: center;
`;
const BookmarkImage = styled.Image`
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
  border-color: ${c.darkGray};
  border-width: ${d.px * 0.5}px;
  border-style: solid;
  margin-bottom: ${d.px * 13}px;
  align-items: center;
  justify-content: center;
`;
const GoodScore = styled.View`
  width: ${(props) => props.score}%;
  height: 100%;
  background-color: ${c.mint};
  position: absolute;
  left: 0;
`;
const GoodScoreText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 17}px;
  color: ${c.black};
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
  border-color: ${c.darkGray};
  border-width: ${d.px * 0.5}px;
  border-style: solid;
  margin-bottom: ${d.px * 20}px;
`;
const GoodButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${c.mint};
  border-color: ${c.darkGray};
  border-right-width: ${d.px * 0.5}px;
  border-style: solid;
`;
const BadButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const GoodBadText = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${c.black};
`;
const NotYet = styled.TouchableOpacity`
  width: 100%;
  height: ${d.px * 40}px;

  justify-content: center;
  align-items: center;
  border-color: ${c.darkGray};
  border-width: ${d.px * 0.5}px;
  border-style: solid;
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

// 하나짜리 컴포넌트! SutraCardsList에서 데이터 받아와서 list로...!
const OneSutraCard = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Container>
        <TopArea>
          <ImageContainer>
            <SutraImage
              style={{ resizeMode: 'cover' }}
              source={require('~/img/sample/sutraSample.jpg')}
            />
            <BookmarkContainer activeOpacity={1}>
              {/* 찜했으면 보라색으로, 찜 안 한 건 하얀색으로 */}
              {bookmarked ? (
                <BookmarkImage
                  style={{ resizeMode: 'contain' }}
                  source={require('~/img/icon/iconBookmarkSelected.png')}
                />
              ) : (
                  <BookmarkImage
                    style={{ resizeMode: 'contain' }}
                    source={require('~/img/icon/iconBookmarkUnselected.png')}
                  />
                )}
            </BookmarkContainer>
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
                    style={{ resizeMode: 'contain' }}
                    source={require('~/img/sample/purpleCharacHeadSample.png')}
                  />
                </PurpleScoreContainer>
                <SkyScoreContainer>
                  <SkyScoreWrapper>
                    <SkyScore score={68.3} />
                  </SkyScoreWrapper>
                  <SkyHead
                    style={{ resizeMode: 'contain' }}
                    source={require('~/img/sample/skyCharacHeadSample.png')}
                  />
                </SkyScoreContainer>
              </PurpleSkyScoreContainer>
            </SelectionContainer>
          ) : (
              <SelectionContainer>
                <GoodOrBadButtonContainer>
                  <GoodButton activeOpacity={1}>
                    <GoodBadText>추천</GoodBadText>
                  </GoodButton>
                  <BadButton activeOpacity={1}>
                    <GoodBadText>비추</GoodBadText>
                  </BadButton>
                </GoodOrBadButtonContainer>
                <NotYet activeOpacity={1}>
                  <GoodBadText>안 해 봤어요</GoodBadText>
                </NotYet>
              </SelectionContainer>
            )}
        </TopArea>
        <MarginNarrow />
        <SutraTitle>체위 한글 이름</SutraTitle>
        <MarginNarrow />
        <CommentWrapper>
          <CommentUsername>닉네임</CommentUsername>
          <CommentText>실시간 댓글 우와우</CommentText>
        </CommentWrapper>
      </Container>

      <MarginWide />
    </>
  );
};

export default OneSutraCard;
