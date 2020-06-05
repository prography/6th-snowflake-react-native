import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, l, BASE_URL } from '~/utils/constant';
import ReviewCard from '~/components/product/review/ReviewCard';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  flex-direction: column;
`;
interface Props {
  productId: number;
}
const ReviewCardContainer = ({ productId }: Props) => {
  const _getReviewArray = async () => {
    try {
      const response = await fetch(`${BASE_URL}/reviews/?product=${productId}`);
      const json = await response.json();
      console.log('🌮 id', productId, '의 review array success!', reviewArray);
      setReviewArray(json.results);
    } catch (error) {
      console.log('🌮', productId, '의 review array', error);
    }
  };
  const [reviewArray, setReviewArray] = useState(null);
  useEffect(() => {
    _getReviewArray();
  }, []);
  return (
    <>
      <Container>
        {reviewArray === null ? (
          <TextTitlePurpleRight title={'Loading...'} />
        ) : (
          reviewArray.map((review) => {
            return (
              <ReviewCard
                id={review.id}
                score={review.total}
                age={review.user.birth_year}
                gender={review.gender}
                partnerGender={review.partner_gender}
                review={review.content}
                profileImg={review.user.image}
                date={review.created_at}
                like={1}
                username={review.user.username}
              />
            );
          })
        )}
      </Container>
    </>
  );
};

export default ReviewCardContainer;
