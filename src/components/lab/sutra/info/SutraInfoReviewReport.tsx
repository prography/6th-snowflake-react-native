import * as React from 'react';
import styled from 'styled-components/native';
import { SutraReview } from '~/api/interface';
import { Img } from "~/img";
import { c, d, dateCutter, l } from "~/utils/constant";

interface Props {
    comment_id: number;
    sutra_id: number;
  }

const Container = styled.View``;

const ReviewText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 23}px;
  color: ${c.black};
`;

const SutraInfoReviewReport = ({comment_id, sutra_id}: Props) => {
  return (
    <Container>
      <ReviewText>신고</ReviewText>
    </Container>
  );
};

export default SutraInfoReviewReport;
