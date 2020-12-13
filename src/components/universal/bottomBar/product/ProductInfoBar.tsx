import * as React from "react";
import styled from "styled-components/native";

import { d, c, l } from "~/utils/constant";
import HeartUnselected from "~/img/svgIcons/HeartUnselected";
import HeartSelected from "~/img/svgIcons/HeartSelected";

interface Props {
  children: React.ReactNode;
  isLiked: boolean;
  onPressLikeOrDeleteLike: (action: 'like' | 'deleteLike') => void;
  onPressWriteReview: () => void;
}

const Screen = styled.View`
  flex: 1;
  background-color: white;
`;

const Container = styled.View`
  height: ${l.bottomBar}px;
  width: ${d.width}px;
  position: absolute;
  bottom: 0px;
  flex: 1;
  flex-direction: row;
  background-color: white;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding-top: ${d.px * 10}px;
`;
const Title = styled.Text`
  color: ${c.darkGray};
  font-size: ${d.px * 12}px;
`;

const HeartIcon = styled.Image`
  width: ${d.px * 30}px;
  height: ${d.px * 20}px;
`;

const ProductInfoBar = ({
  children,
  isLiked,
  onPressLikeOrDeleteLike,
  onPressWriteReview,
}: Props) => {
  return (
    <Screen>
      {children}
      <Container>
        <Tab onPress={() => onPressLikeOrDeleteLike(isLiked ? 'deleteLike' : 'like')}>
          {/* for test */}
          {/* <Tab onPress={() => onPressLikeOrDeleteLike('deleteLike')}> */}
          {/* <Tab onPress={() => onPressLikeOrDeleteLike('like')}> */}
          {isLiked ? <HeartSelected /> : <HeartUnselected />}
        </Tab>
        {/* <Tab>
          <Title>공유하기</Title>
        </Tab> */}
        <Tab onPress={onPressWriteReview}>
          <Title>리뷰 쓰러 가기</Title>
        </Tab>
      </Container>
    </Screen>
  );
};

export default ProductInfoBar;
