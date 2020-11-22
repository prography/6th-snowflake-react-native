import * as React from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { fetchAPI } from "~/api";
import { SutraReview } from "~/api/interface";
import { Img } from "~/img";
import { getTokenItem } from "~/utils/asyncStorage";
import { c, d, dateCutter, l } from "~/utils/constant";
import { consoleError, llog } from "~/utils/functions";
import AntDesign from "react-native-vector-icons/AntDesign";

interface Props {
  comment_id: number;
  sutra_id: number;
  likes_count: number;
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: ${d.px * 1}px;
  border-color: ${c.purple}
  margin-right: ${d.px * 10}px;
  padding: ${d.px * 2}px ${d.px * 5}px;
  background-color: ${c.white};
  border-radius: ${d.px*10}px;
`;

const LikeButton = styled.TouchableOpacity`
  margin-right: ${d.px * 3}px;
`;

const CountContainer = styled.View``;

const CountText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  color: ${c.black};
`;
//Like API 바뀌어서 수정 필요
const SutraInfoReviewLike = ({ comment_id, sutra_id, likes_count }: Props) => {
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
    <Container>
      <LikeButton onPress={pressLike} activeOpacity={1}>
        <AntDesign name={"like2"} color={c.purple} size={15} />
      </LikeButton>
      <CountContainer>
        <CountText>{likes_count}</CountText>
      </CountContainer>
    </Container>
  );
};

export default SutraInfoReviewLike;
