import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components/native";

import { d, l, c } from "~/utils/constant";
import MarginNarrow from "~/components/universal/margin/MarginNarrow";
import MarginWide from "~/components/universal/margin/MarginWide";
import LineGrayRightLong from "~/components/universal/line/LineGrayRightLong";
import MarginMedium from "~/components/universal/margin/MarginMedium";
import { ResultsRes, Card } from "~/api/interface";
import { fetchAPI } from "~/api";
import { llog } from "~/utils/functions";
import { getTokenItem } from "~/utils/asyncStorage";

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
  const [_newCard, _setNewCard] = useState(null);

  const _getNewCard = async () => {
    try {
      // const token = await getTokenItem();
      // console.log(token)
      // if (!token) { return; }
      console.log("진행");


      const { status, response } = await fetchAPI("labs/sutra/new-card/");
      console.log("response", response, "st", status);
      const json = await response.json();
      llog("New Card - success!", json);
      console.log("보여줘보", json);
      if (status === 200) {
        //_setNewCard(json.results);
      }
    } catch (error) {
      llog("New Card - error", error);
    }
  };

  useEffect(() => {
    _getNewCard();
  }, []);

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
