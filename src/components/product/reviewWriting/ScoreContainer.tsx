import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { device, color } from '../../../utils/constant';
import StarRating from '../../universal/StarRating';

const Container = styled.View`
    height: ${device.width * 0.6}px
    width: ${device.width}px
`;

const TrioScoreContainer = styled.View`
  height: ${device.width * 0.1}px;
  width: ${device.width}px;
  align-items: center;
`;

const EachScoreContainer = styled.View`
  height: ${device.width * 0.16}px;
  width: ${device.width}px;
  align-items: center;
  justify-content: center;
`;

const ScoreTitle = styled.Text`
  margin-top: ${device.width * 0.01}px;
  color: ${color.grayDark};
  font-weight: 700;
  font-size: ${device.px * 13}px;
`;

const Score = styled.Text`
  color: ${color.mainDark};
  margin-top: ${device.width * 0.01}px;
  font-weight: 700;
  font-size: ${device.px * 20}px;
`;

const TotalScoreContainer = styled.View`
  height: ${device.width * 0.16}px;
  width: ${device.width}px;
  padding-top: ${device.width * 0.07}px;
  align-items: center;
  justify-content: center;
`;

const TotalScoreTitle = styled.Text`
  margin-top: ${device.width * 0.01}px;
  color: ${color.grayDark};
  font-weight: 900;
  font-size: ${device.px * 15}px;
`;

const TotalScore = styled.Text`
  color: ${color.mainLight};
  margin-top: ${device.width * 0.01}px;
  font-weight: 700;
  font-size: ${device.px * 25}px;
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
