import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';

import {
  setReviewContent,
  reviewUploadContentPlaceholder,
  setIsFilledReviewUpload3,
} from '~/store/modules/product/reviewUpload';
import { d, c, l } from '~/utils/constant';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import { RootState } from '~/store/modules';

const REVIEW_MINIMUM_LENGTH = 15;
const TitleContainer = styled.View`
  align-items: center;
  width: ${d.width - l.mR * 2}px;
  margin: 0 ${l.mR}px;
  justify-content: space-between;
  flex-direction: row;
`;
const ReviewLengthText = styled.Text`
  font-family: Jost-Medium;
  color: ${c.lightGray};
  text-align: right;
`;
const AnswerContainer = styled.View``;
const AnswerInput = styled.TextInput`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 25}px;
  color: ${c.black};
`;
const ReviewUploadContent = () => {
  const [reviewLength, setReviewLength] = useState(0);
  const dispatch = useDispatch();

  const _reviewContent = useSelector(
    (state: RootState) => state.product.reviewUpload.reviewContent,
  );

  return (
    <>
      <TitleContainer>
        <TextMiddleTitleDark title={'사용 후기를 남겨주세요.'} />
        <ReviewLengthText>{reviewLength}</ReviewLengthText>
      </TitleContainer>
      <MarginMedium />
      <AnswerContainer>
        <AnswerInput
          placeholderTextColor={c.lightGray}
          placeholder={reviewUploadContentPlaceholder}
          onChangeText={(text) => [
            dispatch(setReviewContent(text)),
            setReviewLength(text.length),
            dispatch(setIsFilledReviewUpload3(
              reviewLength < REVIEW_MINIMUM_LENGTH ? false : true
            )),
          ]}
          multiline={true}
          clearTextOnFocus={_reviewContent ? false : true}
        >
          {_reviewContent}
        </AnswerInput>
      </AnswerContainer>
    </>
  );
};

export default ReviewUploadContent;
