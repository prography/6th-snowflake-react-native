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
  likes_count: number;
  isLiked: boolean;
  pressLike: () => void;
  pressDeleteLike: () => void;
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-width: ${d.px * 1}px;
  border-color: ${c.purple}
  margin-right: ${d.px * 10}px;
  padding: ${d.px * 2}px ${d.px * 5}px;
  background-color: ${c.white};
  border-radius: ${d.px * 10}px;
`;

const LikeView = styled.View`
  margin-right: ${d.px * 3}px;
`;

const CountContainer = styled.View``;

const CountText = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  color: ${c.black};
`;

const SutraInfoReviewLike = ({ likes_count, isLiked, pressLike, pressDeleteLike }: Props) => {
  return (
    <Container onPress={isLiked ? pressDeleteLike : pressLike} activeOpacity={1}>
      <LikeView>
        <AntDesign name={isLiked ? 'like1' : 'like2'} color={c.purple} size={15} />
      </LikeView>
      <CountContainer>
        <CountText>{likes_count}</CountText>
      </CountContainer>
    </Container>
  );
};

export default SutraInfoReviewLike;
