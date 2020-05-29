import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, l } from '~/utils/constant';
import { Text } from 'react-native';

const Container = styled.View``;

const LeftWrapper = styled.View`
  width: ${l.lW}px;
  justify-content: flex-start;
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

const RightWapper = styled.View`
  width: 100%;
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
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );
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
      <RightWapper />
    </Container>
  );
};

export default ReviewCard;
