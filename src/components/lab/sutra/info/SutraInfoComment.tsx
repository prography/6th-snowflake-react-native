import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { d, l, c } from "~/utils/constant";
import { Img } from "~/img";
import { fetchAPI } from "~/api";
import { consoleError, llog } from "~/utils/functions";
import { SutraReview } from "~/api/interface";
import SutraInfoReviewContainer from "~/containers/lab/sutra/info/SutraInfoReviewContainer";
import TextTitlePurpleRight from "~/components/universal/text/TextTitlePurpleRight";
import { View } from "react-native";

interface Props {
  newSutraId: int;
}

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
`;

const PurpleHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 5}px;
`;

const SkyHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 5}px;
`;

const SutraInfoComment = ({ newSutraId }: Props) => {
  const [_sutraReviews, _setSutraReviews] = useState<SutraReview[]>(null);

  const _getSutraReviews = async () => {
    try {
      const { response, status } = await fetchAPI(
        `labs/sutras/${newSutraId}/comments/`
      );
      const json = await response.json();
      const results: SutraReview[] = json.results;
      llog("Sutra Reviews Info - success!", results);

      if (status === 200) {
        _setSutraReviews(results);
      }
    } catch (error) {
      consoleError("New Card - error", error);
    }
  };

  useEffect(() => {
    _getSutraReviews();
  }, []);

  return (
    <>
      <Container>
        {_sutraReviews ? (
          _sutraReviews.map((review, i) => (
            <SutraInfoReviewContainer key={i} review={review} sutra_id={newSutraId}/>
          ))
        ) : (
          <View style={{ marginRight: l.mR }}>
            <TextTitlePurpleRight title={"Loading..."} />
          </View>
        )}
      </Container>
    </>
  );
};

export default SutraInfoComment;
