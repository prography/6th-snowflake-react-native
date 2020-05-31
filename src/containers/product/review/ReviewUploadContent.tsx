import * as React from 'react';
import { useState } from 'react';
import { Text } from 'react-native';
import {
  State,
  setReviewContent,
  reviewUploadContentPlaceholder,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import MarginWide from '~/components/universal/margin/MarginWide';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import MarginMedium from '~/components/universal/margin/MarginMedium';

const TitleContainer = styled.View`
  align-items: flex-start;
  width: 100%;
  margin-left: ${l.mR}px;
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
  const dispatch = useDispatch();
  const _setReviewContent = (reviewContent: State) => {
    dispatch(setReviewContent(reviewContent));
  };
  const _reviewContent = useSelector(
    (state: State) => state.reviewUploadReducer.reviewContent
  );
  return (
    <>
      <TitleContainer>
        <TextMiddleTitleDark title={'사용 후기를 남겨주세요.'} />
      </TitleContainer>

      <MarginMedium />
      <AnswerContainer>
        <AnswerInput
          placeholderTextColor={c.lightGray}
          placeholder={reviewUploadContentPlaceholder}
          onChangeText={(text) => _setReviewContent(text)}
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
