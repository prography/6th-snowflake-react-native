import * as React from "react";
import styled from "styled-components/native";

import { c, d, dateCutter, l } from "~/utils/constant";
import AntDesign from "react-native-vector-icons/AntDesign";

interface Props {
  likes_count: number;
  isLiked: boolean;
  pressLikeOrDeleteLike: (action: 'like' | 'deleteLike') => void;
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

const SutraInfoReviewLike = ({ likes_count, isLiked, pressLikeOrDeleteLike }: Props) => {
  return (
    <Container onPress={() => pressLikeOrDeleteLike(isLiked ? 'deleteLike' : 'like')} activeOpacity={1}>
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
