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

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const EditButton = styled.TouchableOpacity`
  margin-right: ${d.px * 3}px;
`;
const DeleteButton = styled.TouchableOpacity`
  margin-right: ${d.px * 3}px;
`;

const LikeText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  color: ${c.black};
`;

const CountContainer = styled.View``;

const CountText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  color: ${c.black};
`;

const SutraReviewController = ({ comment_id, sutra_id }: Props) => {
  const pressFunc = async (type: string) => {
    try {
      const token = await getTokenItem();
      if (!token) {
        Alert.alert("❄️", "로그인 후 이용해주세요!");
        return;
      }

      const { status, response } = await fetchAPI(
        `labs/sutras/${sutra_id}/comments/${comment_id}/`,
        {
          method: type === "edit" ? "PATCH" : "DELETE",
          token,
          params:
            type === "edit"
              ? {
                  content: "수정된 댓글", // api 수정된 후 TextInput으로 수정할 수 있게.
                }
              : null,
        }
      );
      if (type === "edit" && status === 200) {
        llog("수트라 댓글 수정 성공", response);
      }
      if (type === "delete" && status === 204) {
        llog("수트라 댓글 삭제 성공", response);
      }

      console.log('response', response)
    } catch (err) {
      consoleError("🍊sutra review 수정 or 삭제 에러", err);
    }
  };

  return (
    <Container>
      <EditButton onPress={() => pressFunc("edit")} activeOpacity={1}>
        <LikeText>수정</LikeText>
      </EditButton>
      <DeleteButton onPress={() => pressFunc("delete")} activeOpacity={1}>
        <CountText>삭제</CountText>
      </DeleteButton>
    </Container>
  );
};

export default SutraReviewController;
