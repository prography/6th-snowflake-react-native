import * as React from 'react';
import { Text } from 'react-native';
import { useState } from 'react';
import styled from 'styled-components/native';
import { d, l, c } from '~/utils/constant';
import MarginWide from '~/components/universal/margin/MarginWide';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';

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
const BookmarkImage = styled.Image``;
const SutraImage = styled.Image`
  width: 100%;
  height: ${d.px * 120}px;
`;
const SelectionContainer = styled.View`
  flex: 1;
`;
const GoodBadScore = styled.View``;
const PurpleSkyScore = styled.View``;
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
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Container>
        <TopArea>
          <ImageContainer>
            <BookmarkImage />
            <SutraImage
              style={{ resizeMode: 'cover' }}
              source={require('~/img/sample/sutraSample.jpg')}
            />
          </ImageContainer>
          <Text />
          {selected ? (
            <SelectionContainer>
              <GoodBadScore />
              <PurpleSkyScore />
            </SelectionContainer>
          ) : (
            <SelectionContainer>
              <GoodOrBadButtonContainer>
                <GoodButton>
                  <GoodBadText>추천</GoodBadText>
                </GoodButton>
                <BadButton>
                  <GoodBadText>비추</GoodBadText>
                </BadButton>
              </GoodOrBadButtonContainer>
              <NotYet>
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
