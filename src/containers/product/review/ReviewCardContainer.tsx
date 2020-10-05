import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import ReviewCard from '~/components/product/review/ReviewCard';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { Review } from '~/api/interface';

const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  flex-direction: column;
`;
interface Props {
  reviewArray: Review[];
}
const ReviewCardContainer = ({ reviewArray }: Props) => {
  return (
    <>
      <Container>
        {reviewArray === null ? (
          <TextTitlePurpleRight title={'Loading...'} />
        ) : (
            reviewArray.map((review: Review, index: number) => {
              return (
                <ReviewCard
                  key={index}
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
