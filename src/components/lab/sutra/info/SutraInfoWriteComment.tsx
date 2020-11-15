import * as React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { d, l, c } from "~/utils/constant";
import { Img } from "~/img";

const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
  padding: ${d.px*3}px;
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
  margin-bottom: ${d.px*7}px;
`;

const SutraInfoWriteComment = () => {
  const [review, setReview] = useState<string>("");
  console.log("review", review);

  const submitReview = () => {
    console.log('리뷰포스트');
  }

  return (
    <>
      <Container>
        <SubContainer>
          <PurpleHead
            style={{ resizeMode: "contain" }}
            source={Img.sample.purpleCharacHead}
          />
          <UserName>지그레기</UserName>
        </SubContainer>
        <SubContainer>
          <CommentInput
            returnKeyType={"done"}
            multiline={true}
            blurOnSubmit={true}
            placeholderTextColor={c.lightGray}
            placeholder={"리뷰를 입력해주세요."}
            style={{padding:d.px*3}}
            onChangeText={(text) => setReview(text)}
          />
          <SaveComment onPress={submitReview}>
            <SaveText>작성</SaveText>
          </SaveComment>
        </SubContainer>
      </Container>
    </>
  );
};

export default SutraInfoWriteComment;
