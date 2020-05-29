import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, l } from '~/utils/constant';
import ReviewCard from '~/components/product/review/ReviewCard';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  flex-direction: column;
`;

const ReviewCardContainer = () => {
  const ReviewInfo = [
    {
      key: 0,
      score: 3.2,
      age: 30,
      gender: 'male',
      partnerGender: 'female',
      review:
        '성분 괜찮아요. 윤활젤도 넉넉해요. 하지만 고무냄새가 꽤 나서 5점은 아니에요. 바른생각 에어핏 다음으로 많이 쓴 것 같아요.',
      profileImg: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
      date: '2020.05.29',
      like: 3,
    },
    {
      key: 1,
      score: 2.4,
      age: 20,
      gender: 'female',
      partnerGender: 'female',
      review:
        '취지가 좋은 회사에서 나왔을 뿐만 아니라 괜찮은 내구도와 적당한 양의 윤활제가 만족스러웠다. 하지만 상대방 입장에선 콘돔속이 살짝 마르는 경향이 있다고도 하였다.',
      profileImg: 'http://pngimg.com/uploads/condom/condom_PNG21.png',
      date: '2020.05.29',
      like: 1,
    },
  ];

  return (
    <>
      <Container>
        {ReviewInfo.map((review) => {
          return (
            <ReviewCard
              key={review.key}
              score={review.score}
              age={review.age}
              gender={review.gender}
              partnerGender={review.partnerGender}
              review={review.review}
              profileImg={review.profileImg}
              date={review.date}
              like={review.like}
            />
          );
        })}
      </Container>
    </>
  );
};

export default ReviewCardContainer;
