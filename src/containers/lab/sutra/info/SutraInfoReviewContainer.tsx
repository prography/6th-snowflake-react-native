import * as React from "react";
import styled from "styled-components/native";
import { SutraReview } from "~/api/interface";
import SutraInfoReviewLike from "~/components/lab/sutra/info/SutraInfoReviewLike";
import SutraInfoReviewReport from "~/components/lab/sutra/info/SutraInfoReviewReport";
import { Img } from "~/img";
import { c, d, dateCutter, l } from "~/utils/constant";
interface Props {
  review: SutraReview;
  sutra_id: number;
}

const Container = styled.View`
  border-bottom-width: ${d.px * 1}px;
  border-bottom-color: ${c.lightGray};
  padding: ${d.px * 3}px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${d.px * 7}px;
`;

const PurpleHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 9}px;
`;

const SkyHead = styled.Image`
  height: ${d.px * 23}px;
  width: ${d.px * 35}px;
  margin-right: ${d.px * 9}px;
`;

const UserName = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 15}px;
  color: ${c.lightGray};
`;

const DateText = styled.Text`
  font-family: Jost-Light;
  font-size: ${d.px * 12}px;
  line-height: ${d.px * 20}px;
  color: ${c.lightGray};
  margin-right: ${d.px * 5}px;
`;

const ReviewText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 23}px;
  color: ${c.black};
`;

const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomSubContainer = styled.View`
  flex-direction: row;
`;

const SutraInfoReviewContainer = ({ review, sutra_id }: Props) => {
  return (
    <Container>
      <UserContainer>
        <PurpleHead
          style={{ resizeMode: "contain" }}
          source={Img.sample.purpleCharacHead}
        />
        <UserName>{review.user.username}</UserName>
      </UserContainer>
      <ReviewText>{review.content}</ReviewText>
      <BottomContainer>
        <DateText>{dateCutter(review.created_at)}</DateText>
        <BottomSubContainer>
          <SutraInfoReviewLike
            comment_id={review.id}
            sutra_id={sutra_id}
            likes_count={review.likes_count}
          />
          <SutraInfoReviewReport comment_id={review.id} />
        </BottomSubContainer>
      </BottomContainer>
    </Container>
  );
};

export default SutraInfoReviewContainer;
