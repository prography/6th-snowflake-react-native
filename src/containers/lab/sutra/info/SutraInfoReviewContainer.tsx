import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import styled from "styled-components/native";

import { SutraReview } from "~/api/interface";
import SutraInfoReviewLike from "~/components/lab/sutra/info/SutraInfoReviewLike";
import SutraInfoReviewReport from "~/components/lab/sutra/info/SutraInfoReviewReport";
import SutraReviewController from "~/components/lab/sutra/info/SutraReviewController";
import { Img } from "~/img";
import { RootState } from "~/store/modules";
import { c, d, dateCutter, l } from "~/utils/constant";
import { alertUtil } from "~/utils/alert";
import { getTokenItem } from "~/utils/asyncStorage";
import { consoleError, llog } from "~/utils/functions";
import { fetchAPI } from "~/api";
interface Props {
  review: SutraReview;
  sutra_id: number;
  refetch: () => void;
  navigateToJoinStack: () => void;
}

const Container = styled.View`
  border-bottom-width: ${d.px * 1}px;
  border-bottom-color: ${c.lightGray};
  padding: ${d.px * 5}px ${d.px * 3}px ${d.px * 10}px ${d.px * 3}px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${d.px * 7}px;
`;

const UserSubContainer = styled.View`
  flex-direction: row;
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

const CommentInput = styled.TextInput`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 23}px;
  font-family: "Jost-Bold";
  color: ${c.black};
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: ${d.width - d.px * 80}px;
  border-color: ${c.purple};
  border-width: ${d.px * 1}px;
  margin-bottom: ${d.px * 7}px;
`;

const SutraInfoReviewContainer = ({
  review,
  sutra_id,
  refetch,
  navigateToJoinStack,
}: Props) => {
  const [editCheck, setEditCheck] = useState<Boolean>(false);
  const [editContent, setEditContent] = useState<string>("");

  const { loading, data: userInfo, error } = useSelector(
    (state: RootState) => state.join.userInfo.userInfo
  );

  const pressLike = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }

      const { status, response } = await fetchAPI(`likes/`, {
        method: "POST",
        token,
        params: {
          model: "sutracomment",
          object_id: review.id,
        },
      });
      const json = await response.json();
      console.log('🍊 수트라 리뷰 좋아요 누름', status, json);
      if (status === 201) {
        llog("수트라 리뷰 좋아요", response);
        refetch();
      }
    } catch (err) {
      consoleError("🍊sutra review like 생성 에러", err);
    }
  };

  const pressDeleteLike = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }

      const { status, response } = await fetchAPI(`likes/`, {
        method: "DELETE",
        token,
        params: {
          model: "sutracomment",
          object_id: review.id,
        },
      });
      console.log('🍊 수트라 리뷰 좋아요 취소 누름', status);
      if (status === 204) {
        llog("수트라 리뷰 좋아요 취소", response);
        refetch();
      }
    } catch (err) {
      consoleError("🍊sutra review like 생성 에러", err);
    }
  };

  const pressReport = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }
      const { status, response } = await fetchAPI(`reports/`, {
        method: "POST",
        token,
        params: {
          model: "sutracomment",
          object_id: review.id,
        },
      });
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
    <Container>
      <UserContainer>
        <UserSubContainer>
          <PurpleHead
            style={{ resizeMode: "contain" }}
            source={Img.sample.purpleCharacHead}
          />
          <UserName>{review.user.username}</UserName>
        </UserSubContainer>
        {!loading && !error && review.user.id === userInfo?.id ? (
          <SutraReviewController
            comment_id={review.id}
            sutra_id={sutra_id}
            editCheck={editCheck}
            setEditCheck={setEditCheck}
            editContent={editContent === "" ? review.content : editContent}
            refetch={refetch}
          />
        ) : null}
      </UserContainer>
      {editCheck ? (
        <CommentInput
          returnKeyType={"done"}
          multiline={true}
          blurOnSubmit={true}
          placeholderTextColor={c.lightGray}
          placeholder={"리뷰를 입력해주세요."}
          style={{ padding: d.px * 3 }}
          defaultValue={review.content}
          onChangeText={(text) => setEditContent(text)}
        />
      ) : (
          <ReviewText>{review.content}</ReviewText>
        )}

      <BottomContainer>
        <DateText>{dateCutter(review.created_at)}</DateText>
        <BottomSubContainer>
          <SutraInfoReviewLike
            likes_count={review.likes_count}
            isLiked={review.is_user_like}
            pressLike={pressLike}
            pressDeleteLike={pressDeleteLike}
          />
          <SutraInfoReviewReport pressReport={pressReport} />
        </BottomSubContainer>
      </BottomContainer>
    </Container>
  );
};

export default SutraInfoReviewContainer;
