import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '../../../utils/constant';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '../../universal/line/LineGrayRightLong';

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;
const SutraImage = styled.Image``;
const NewText = styled.Text``;
const TextArea = styled.View``;
const SutraTitle = styled.Text``;

const CommentUsername = styled.Text``;
const CommentText = styled.Text``;

const LabSutraNewCard = () => {
  return (
    <>
      <Container>
        <SutraImage />
        <NewText>New</NewText>
        <TextArea>
          <SutraTitle>체위 이름</SutraTitle>
          <CommentUsername>닉네임</CommentUsername>
          <CommentText>실시간 댓글 우와우</CommentText>
        </TextArea>
      </Container>
      <MarginNarrow />
      <LineGrayRightLong />
      <MarginWide />
    </>
  );
};

export default LabSutraNewCard;
