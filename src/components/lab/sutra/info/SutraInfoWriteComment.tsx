import * as React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "~/store/modules";
import { d, l, c } from "~/utils/constant";
import { Img } from "~/img";
import { getTokenItem } from "~/utils/asyncStorage";
import { fetchAPI } from "~/api";
import { consoleError, llog } from "~/utils/functions";
import { SutraReview } from "~/api/interface";

interface Props {
  newSutraId: number;
  _setSutraReviews: any;
}

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
  padding: ${d.px * 3}px;
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

const CommentText = styled.Text``;
const SaveComment = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: ${c.mint}
  padding: ${d.px * 5}px;
  border-radius:${d.px * 15}px;
  border-color: ${c.purple};
  border-width: ${d.px * 1}px;
  margin: ${d.px * 3}px;
`;
const SaveText = styled.Text``;

const CommentInput = styled.TextInput`
  font-family: Jost-Bold;
  font-size: ${d.px * 17}px;
  font-family: "Jost-Bold";
  color: ${c.darkGray};
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: ${d.width - d.px * 80}px;
  border-color: ${c.purple};
  border-width: ${d.px * 1}px;
`;

const SubContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${d.px * 7}px;
`;

const SutraInfoWriteComment = ({
  newSutraId: sutra_id,
  _setSutraReviews,
}: Props) => {
  const [content, setContent] = useState<string>("");
  const { loading, data: userInfo, error } = useSelector(
    (state: RootState) => state.join.userInfo.userInfo
  );

  const _getSutraReviews = async () => {
    try {
      const { response, status } = await fetchAPI(
        `labs/sutras/${sutra_id}/comments/`
      );
      const json = await response.json();
      const results: SutraReview[] = json.results;
      llog("Sutra Reviews Info - success!", results);
      if (status === 200) {
        _setSutraReviews(results);
        console.log("Review Refetch - Success");
      }
    } catch (error) {
      consoleError("Review Refetch - error", error);
    }
  };

  const submitContent = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        Alert.alert("❄️", "로그인 후 이용해주세요!");
        return;
      }
      console.log("등록?");
      console.log(token);
      console.log(sutra_id);
      const { status, response } = await fetchAPI(
        `labs/sutras/${sutra_id}/comments/`,
        {
          method: "POST",
          token,
          params: {
            content,
          },
        }
      );
      console.log(status, response);
      if (status === 201) {
        setContent("");
        Alert.alert("☃️", "리뷰 등록 완료");
        llog("Sutra Review 등록 성공", response);
        _getSutraReviews();
      }
    } catch (err) {
      consoleError("🍊sutra review 등록 에러", err);
    }
  };

  return (
    <>
      <Container>
        <SubContainer>
          <PurpleHead
            style={{ resizeMode: "contain" }}
            source={Img.sample.purpleCharacHead}
          />
          <UserName>{!loading && !error && userInfo.username}</UserName>
        </SubContainer>
        <SubContainer>
          <CommentInput
            returnKeyType={"done"}
            multiline={true}
            blurOnSubmit={true}
            placeholderTextColor={c.lightGray}
            placeholder={"리뷰를 입력해주세요."}
            style={{ padding: d.px * 3 }}
            value={content}
            onChangeText={(text) => setContent(text)}
          />
          <SaveComment onPress={submitContent}>
            <SaveText>작성</SaveText>
          </SaveComment>
        </SubContainer>
      </Container>
    </>
  );
};

export default SutraInfoWriteComment;
