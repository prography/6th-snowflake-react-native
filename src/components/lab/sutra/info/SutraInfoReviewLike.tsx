import * as React from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { fetchAPI } from "~/api";
import { SutraReview } from "~/api/interface";
import { Img } from "~/img";
import { getTokenItem } from "~/utils/asyncStorage";
import { c, d, dateCutter, l } from "~/utils/constant";
import { consoleError, llog } from "~/utils/functions";

interface Props {
  comment_id: number;
  sutra_id: number;
}

const Container = styled.TouchableOpacity``;

const ReviewText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 23}px;
  color: ${c.black};
`;

const SutraInfoReviewLike = ({ comment_id, sutra_id }: Props) => {
  const pressLike = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        Alert.alert("❄️", "로그인 후 이용해주세요!");
        return;
      }

      const { status, response } = await fetchAPI(
        `labs/sutras/${sutra_id}/comments/${comment_id}/likes/`,
        {
          method: "POST",
          token,
        }
      );
      if (status === 201) {
        llog("수트라 리뷰 좋아요", response);
      }
    } catch (err) {
        consoleError("🍊sutra review like 생성 에러", err);
    }
  };

  return (
    <Container onPress={pressLike}>
      <ReviewText>좋아요</ReviewText>
    </Container>
  );
};

export default SutraInfoReviewLike;
