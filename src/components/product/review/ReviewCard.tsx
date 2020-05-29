import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';

import MarginMedium from '~/components/universal/margin/MarginMedium';
import LineGrayRightShort from '~/components/universal/line/LineGrayRightShort';
import GenderLoop from '~/components/universal/profile/GenderLoop';

const Container = styled.View`
  flex-direction: row;
  margin-right: ${l.mR}px;
`;

const LeftWrapper = styled.View`
  width: ${l.lW}px;
  justify-content: flex-start;
  flex-direction: column;
`;
const RightWapper = styled.View`
  width: ${d.width - l.mR * 2 - l.lW}px;
  flex-direction: column;
`;
const ProfileCircle = styled.View`
  width: ${d.px * 40}px;
  height: ${d.px * 40}px;
  border-radius: 1000px;
  background-color: ${c.purple};
  justify-content: center;
  align-items: center;
`;

const ProfileImgDummy = styled.Image`
  width: ${d.px * 30}px;
  height: ${d.px * 30}px;
`;

const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Score = styled.Text``;
const RightContainer = styled.View`
  flex-direction: row;
`;
const Age = styled.Text``;

const Review = styled.Text``;

const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Date = styled.Text``;

const Like = styled.Text``;

interface Props {
  key: number;
  score: number;
  age: number;
  gender: string;
  partnerGender: string;
  review: string;
  profileImg?: string;
  date: string;
  like: number;
}
const ReviewCard = ({
  key,
  score,
  age,
  gender,
  partnerGender,
  review,
  profileImg,
  date,
  like,
}: Props) => {
  return (
    <Container>
      <LeftWrapper>
        <ProfileCircle>
          <ProfileImgDummy
            style={{ resizeMode: 'contain' }}
            source={require('~/img/profile/pfc8.png')}
          />
        </ProfileCircle>
      </LeftWrapper>
      <RightWapper>
        <TopBar>
          <Score>★ {score}</Score>
          <RightContainer>
            <Age>{age}대</Age>
            <GenderLoop gender={gender} partnerGender={partnerGender} />
          </RightContainer>
        </TopBar>
        <Review>{review}</Review>
        <BottomBar>
          <Date>{date}</Date>
          <Like>♡{like}</Like>
        </BottomBar>

        <LineGrayRightShort />
      </RightWapper>

      <MarginMedium />
    </Container>
  );
};

export default ReviewCard;
