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
  newSutraId: number;
  _sutraReviews: SutraReview[];
  refetch: () => void;
  navigateToJoinStack: () => void;
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

const SutraInfoComment = ({ newSutraId, _sutraReviews, refetch, navigateToJoinStack }: Props) => {

  return (
    <>
      <Container>
        {_sutraReviews ? (
          _sutraReviews.map((review, i) => (
            <SutraInfoReviewContainer
              key={i}
              review={review}
              sutra_id={newSutraId}
              refetch={refetch}
              navigateToJoinStack={navigateToJoinStack}
            />
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
