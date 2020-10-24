import * as React from 'react';
import styled from 'styled-components/native';

import { d, l, c } from '~/utils/constant';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';
import MarginWide from '~/components/universal/margin/MarginWide';
import LineGrayRightLong from '~/components/universal/line/LineGrayRightLong';
import MarginMedium from '~/components/universal/margin/MarginMedium';

interface Props {
  onPress: () => void;
}

const Container = styled.TouchableOpacity`
  margin-right: ${l.mR}px;
  margin-left: ${l.mL}px;
`;

const ImageArea = styled.View`
  flex-direction: row;
  width: ${d.width - l.mR - l.mL}px;
  justify-content: space-between;
`;
const SutraImage = styled.Image`
  height: ${d.px * 120}px;
  width: ${d.px * 250}px;
  background-color: ${c.purple};
`;
const NewText = styled.Text`
  font-family: Jost-Bold;
  font-size: ${d.px * 20}px;
  color: ${c.purple};
`;
const TextArea = styled.View``;

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

const LabSutraNewCard = ({ onPress }: Props) => {
  return (
    <>
      <Container onPress={onPress} activeOpacity={1.0}>
        <ImageArea>
          <SutraImage />
          <NewText>NEW!</NewText>
        </ImageArea>
        <MarginMedium />
        <TextArea>
          <SutraTitle>체위 이름</SutraTitle>
          <MarginNarrow />
          <CommentWrapper>
            <CommentUsername>닉네임</CommentUsername>
            <CommentText>실시간 댓글 우와우</CommentText>
          </CommentWrapper>
        </TextArea>
      </Container>
      <MarginMedium />

      <LineGrayRightLong />
      <MarginWide />
    </>
  );
};

export default LabSutraNewCard;
