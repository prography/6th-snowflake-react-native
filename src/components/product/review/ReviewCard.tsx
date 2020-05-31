import * as React from 'react';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import LineGrayRightShort from '~/components/universal/line/LineGrayRightShort';
import GenderLoop from '~/components/universal/profile/GenderLoop';
import MarginNarrow from '~/components/universal/margin/MarginNarrow';

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
  align-items: center;
  height: ${d.px * 30}px;
`;

const Score = styled.Text`
  font-family: Jost-Semi;
  font-size: ${d.px * 15}px;
  color: ${c.black};
`;
const RightContainer = styled.View`
  flex-direction: row;
`;
const Age = styled.Text`
  font-family: Jost-Medium;
  font-size: ${d.px * 13}px;
  color: ${c.lightGray};
`;

const Review = styled.Text`
  font-family: Jost-Book;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 23}px;
  color: ${c.black};
`;

const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Date = styled.Text`
  font-family: Jost-Light;
  font-size: ${d.px * 12}px;
  line-height: ${d.px * 20}px;
  color: ${c.lightGray};
`;

const Like = styled.Text`
  font-family: Jost-Bold;
  font-size: ${d.px * 12}px;
  line-height: ${d.px * 20}px;
  color: ${c.lightGray};
`;

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
    <>
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
              <GenderLoop
                gender={gender}
                partnerGender={partnerGender}
                size={15}
              />
            </RightContainer>
          </TopBar>
          <MarginNarrow />
          <Review>{review}</Review>
          <MarginNarrow />
          <BottomBar>
            <Date>{date}</Date>
            <Like>♡ {like}</Like>
          </BottomBar>
          <MarginNarrow />
          <LineGrayRightShort />
        </RightWapper>
      </Container>

      <MarginMedium />
    </>
  );
};

export default ReviewCard;
