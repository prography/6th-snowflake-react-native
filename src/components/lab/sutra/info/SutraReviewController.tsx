import * as React from "react";
import { useState } from "react";
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
  editCheck: Boolean;
  setEditCheck: any;
  editContent: string;
  refetch: () => void;
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

const ControlView = styled.View`
  margin: ${d.px * 3}px;
  padding: ${d.px * 2}px;
`;

const ControlText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 13}px;
`;

const SutraReviewController = ({
  comment_id,
  sutra_id,
  editCheck,
  setEditCheck,
  editContent,
  refetch,
}: Props) => {
  const pressFunc = async (type: string) => {
    if (type === "edit") setEditCheck(!editCheck);
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
                content: editContent,
              }
              : null,
        }
      );
      if (type === "edit" && status === 200) {
        llog("수트라 댓글 수정 성공", response);
        refetch();
      }

      if (type === "delete" && status === 204) {
        llog("수트라 댓글 삭제 성공", response);
        refetch();
      }

      console.log("response", response);
    } catch (err) {
      consoleError("🍊sutra review 수정 or 삭제 에러", err);
    }
  };

  return (
    <Container>
      <EditButton
        onPress={() =>
          editCheck ? pressFunc("edit") : setEditCheck(!editCheck)
        }
        activeOpacity={1}
      >
        <ControlView>
          <ControlText>{editCheck ? "수정완료" : "수정"}</ControlText>
        </ControlView>
      </EditButton>
      <DeleteButton onPress={() => pressFunc("delete")} activeOpacity={1}>
        <ControlView>
          <ControlText>삭제</ControlText>
        </ControlView>
      </DeleteButton>
    </Container>
  );
};

export default SutraReviewController;
