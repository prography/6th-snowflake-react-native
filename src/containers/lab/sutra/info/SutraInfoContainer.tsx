import * as React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import SutraInfoGoodBad from "~/components/lab/sutra/info/SutraInfoGoodBad";
import SutraInfoComment from "~/components/lab/sutra/info/SutraInfoComment";
import MarginWide from "~/components/universal/margin/MarginWide";
import SutraInfoWriteComment from "~/components/lab/sutra/info/SutraInfoWriteComment";
import { SutraReview } from "~/api/interface";
interface Props {
  newSutraId: number;
}

const SutraInfoContainer = ({ newSutraId }: Props) => {
  const [_sutraReviews, _setSutraReviews] = useState<SutraReview[]>(null);
  return (
    <>
      <SutraInfoGoodBad newSutraId={newSutraId} />
      <MarginWide />
      <SutraInfoWriteComment
        newSutraId={newSutraId}
        _setSutraReviews={_setSutraReviews}
      />
      <SutraInfoComment
        newSutraId={newSutraId}
        _sutraReviews={_sutraReviews}
        _setSutraReviews={_setSutraReviews}
      />
    </>
  );
};

export default SutraInfoContainer;
