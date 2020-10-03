import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { d, l, c } from '~/utils/constant';
import MarginWide from '~/components/universal/margin/MarginWide';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
`;
const ImageContainer = styled.View``;
const BookmarkImage = styled.Image``;
const SutraImage = styled.Image``;
const SelectionContainer = styled.View``;
const GoodBadScore = styled.View``;
const PurpleSkyScore = styled.View``;
const GoodOrBad = styled.View``;
const Good = styled.TouchableOpacity``;
const Bad = styled.TouchableOpacity``;
const NotYet = styled.TouchableOpacity``;
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
        <ImageContainer>
          <BookmarkImage />
          <SutraImage />
        </ImageContainer>
        {selected ? (
          <SelectionContainer>
            <GoodBadScore />
            <PurpleSkyScore />
          </SelectionContainer>
        ) : (
          <SelectionContainer>
            <GoodOrBad>
              <Good />
              <Bad />
            </GoodOrBad>
            <NotYet />
          </SelectionContainer>
        )}
        <SutraTitle>체위 한글 이름</SutraTitle>
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
