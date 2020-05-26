import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, color } from '~/utils/constant';

const Container = styled.View`
  height: ${d.width * 0.5}px;
  width: ${d.width}px;
  border-bottom-width: ${d.px}px;
  border-color: ${color.grayLight};
  padding-top: ${d.width * 0.05}px;
  padding-left: ${d.px * 27}px;
  padding-right: ${d.px * 27}px;
`;

const ReviewInfoContainer = styled.View`
  flex-direction: row;
  height: ${d.width * 0.1}px;
  justify-content: space-between;
`;

const ProfileScoreContainer = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image``;

const ScoreContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: ${d.px * 10}px;
`;

const ScoreText = styled.Text`
  color: ${color.grayDark};
  font-weight: 700;
  font-size: ${d.px * 20}px;
`;

const AgeFilterContainer = styled.View`
  width: ${d.width * 0.17}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AgeText = styled.Text`
  color: ${color.grayLight};
  font-weight: 700;
  font-size: ${d.px * 13}px;
`;

const Filter = styled.Text`
  color: ${color.grayLight};
  font-weight: 700;
  font-size: ${d.px * 15}px;
`;

const ReviewText = styled.Text`
  height: ${d.width * 0.23}px;
  color: ${color.grayDark};
  padding: ${d.px * 12}px;
  font-weight: 700;
  font-size: ${d.px * 15}px;
`;

const DateText = styled.Text`
  color: ${color.grayDark};
  padding: ${d.px * 12}px;
  font-size: ${d.px * 11}px;
`;

const LikeText = styled.Text`
  color: ${color.grayDark};
  padding: ${d.px * 12}px;
  font-size: ${d.px * 11}px;
`;
interface Props {
  uri: string;
  score: number;
  age: number;
  filter: string;
  text: string;
  date: number;
  like: number;
}
const Review = ({ uri, score, age, filter, text, date, like }: Props) => {
  return (
    <Container>
      <ReviewInfoContainer>
        <ProfileScoreContainer>
          <ProfileImage
            source={{ uri: uri }}
            style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
          />
          <ScoreContainer>
            <ScoreText>{score}</ScoreText>
          </ScoreContainer>
        </ProfileScoreContainer>
        <AgeFilterContainer>
          <AgeText>{age}대</AgeText>
          <Filter>{filter}</Filter>
        </AgeFilterContainer>
      </ReviewInfoContainer>
      <ReviewText>{text}</ReviewText>
      <ReviewInfoContainer>
        <DateText>{date} 작성됨</DateText>
        <LikeText>{like} x ❤️</LikeText>
      </ReviewInfoContainer>
    </Container>
  );
};

export default Review;
