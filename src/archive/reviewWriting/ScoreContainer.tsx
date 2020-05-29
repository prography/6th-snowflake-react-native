import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d } from '~/utils/constant';
import StarRating from '~/components/universal/StarRating';

const Container = styled.View`
  height: ${d.width * 0.6}px;
  width: ${d.width}px;
`;

const TrioScoreContainer = styled.View`
  height: ${d.width * 0.1}px;
  width: ${d.width}px;
  align-items: center;
`;

const EachScoreContainer = styled.View`
  height: ${d.width * 0.16}px;
  width: ${d.width}px;
  align-items: center;
  justify-content: center;
`;

const ScoreTitle = styled.Text`
  margin-top: ${d.width * 0.01}px;
  color: ${c.darkGray};
  font-weight: 700;
  font-size: ${d.px * 13}px;
`;

const Score = styled.Text`
  color: ${c.darkGray};
  margin-top: ${d.width * 0.01}px;
  font-weight: 700;
  font-size: ${d.px * 20}px;
`;

const TotalScoreContainer = styled.View`
  height: ${d.width * 0.16}px;
  width: ${d.width}px;
  padding-top: ${d.width * 0.07}px;
  align-items: center;
  justify-content: center;
`;

const TotalScoreTitle = styled.Text`
  margin-top: ${d.width * 0.01}px;
  color: ${c.darkGray};
  font-weight: 900;
  font-size: ${d.px * 15}px;
`;

const TotalScore = styled.Text`
  color: ${c.darkGray};
  margin-top: ${d.width * 0.01}px;
  font-weight: 700;
  font-size: ${d.px * 25}px;
`;

const ScoreContainer = (props) => {
  return (
    <Container>
      <TrioScoreContainer>
        <EachScoreContainer>
          <ScoreTitle>얇기</ScoreTitle>
          {/* <Score>{props.score.thinScore}</Score> */}
          <StarRating />
        </EachScoreContainer>
        <EachScoreContainer>
          <ScoreTitle>내구성</ScoreTitle>
          {/* <Score>{props.score.durableScore}</Score> */}
          <StarRating />
        </EachScoreContainer>
        <EachScoreContainer>
          <ScoreTitle>윤활제</ScoreTitle>
          {/* <Score>{props.score.slushScore}</Score> */}
          <StarRating />
        </EachScoreContainer>
        <TotalScoreContainer>
          <TotalScoreTitle>총점</TotalScoreTitle>
          <TotalScore>{props.score.totalScore}</TotalScore>
        </TotalScoreContainer>
      </TrioScoreContainer>
    </Container>
  );
};

export default ScoreContainer;
