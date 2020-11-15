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
import { consoleError, llog } from "~/utils/functions";
import { getTokenItem } from "~/utils/asyncStorage";
import TextTitlePurpleRight from "~/components/universal/text/TextTitlePurpleRight";
import { useSelector } from "react-redux";
import { RootState } from "~/store/modules";
import { Img } from "~/img";

interface Props {
  onPress: () => void;
  setNewSutraId: any;
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

const LabSutraNewCard = ({ onPress, setNewSutraId }: Props) => {
  const blindState = useSelector(
    (state: RootState) => state.product.blind.blindState
  );

  const [_newCard, _setNewCard] = useState<Card>(null);

  const _getNewCard = async () => {
    try {
      const { response, status } = await fetchAPI("labs/sutras/new-card/");
      const json: Card = await response.json();
      llog("New Card - success!", json);

      if (status === 200) {
        _setNewCard(json);
        setNewSutraId(json.id);
      }
    } catch (error) {
      consoleError("New Card - error", error);
    }
  };

  useEffect(() => {
    _getNewCard();
    setNewSutraId()
  }, []);

  return (
    <>
      {_newCard === null ? (
        <TextTitlePurpleRight title={"Loading..."} />
      ) : (
          <Container onPress={onPress} activeOpacity={1.0}>
            <ImageArea>
              <SutraImage
                resizeMode="cover"
                source={
                  blindState
                    ? Img.doodle.cdBoxMintPurpleHeart
                    : { uri: _newCard.thumbnail }
                }
              />
              <NewText>NEW!</NewText>
            </ImageArea>
            <MarginMedium />
            <TextArea>
              <SutraTitle>{_newCard.name_kor}</SutraTitle>
              <MarginNarrow />
              <CommentWrapper>
                <CommentUsername>{_newCard.comment.username}</CommentUsername>
                <CommentText>{_newCard.comment.content}</CommentText>
              </CommentWrapper>
            </TextArea>
          </Container>
        )}

      <MarginMedium />

      <LineGrayRightLong />
      <MarginWide />
    </>
  );
};

export default LabSutraNewCard;
