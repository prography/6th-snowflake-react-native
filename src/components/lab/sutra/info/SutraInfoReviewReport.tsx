import * as React from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { fetchAPI } from "~/api";
import { SutraReview } from "~/api/interface";
import { Img } from "~/img";
import { getTokenItem } from "~/utils/asyncStorage";
import { c, d, dateCutter, l } from "~/utils/constant";
import { consoleError, llog } from "~/utils/functions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
interface Props {
  comment_id: number;
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: ${d.px * 10}px;
  padding: ${d.px * 2}px ${d.px * 3}px;
`;

const ReportText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 23}px;
  color: ${c.black};
`;

const SutraInfoReviewReport = ({ comment_id }: Props) => {
  const pressReport = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        Alert.alert("❄️", "로그인 후 이용해주세요!");
        return;
      }
      console.log("신고 눌림?");
      const { status, response } = await fetchAPI(`reports/`, {
        method: "POST",
        token,
        params: {
          model: "sutracomment",
          object_id: comment_id,
        },
      });
      console.log(status);
      if (status === 201) {
        Alert.alert("☃️", "신고가 접수되었습니다!");
        llog("신고 성공", response);
      }
      if (status === 400) {
        Alert.alert("☃️", "신고를 이미 한 상태입니다!");
        llog("이미 신고함", response);
      }
    } catch (err) {
      consoleError("🍊sutra review 신고 에러", err);
    }
  };

  return (
    <Container onPress={pressReport} activeOpacity={1}>
      <MaterialCommunityIcons
        name={"alarm-light-outline"}
        color={c.red}
        size={17}
      />
    </Container>
  );
};

export default SutraInfoReviewReport;
