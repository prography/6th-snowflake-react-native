import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextProductScoreBig from '~/components/universal/text/product/info/TextProductScoreBig';

interface Props {
  title: string;
  score?: string;
  reviewNum?: number;
}

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  align-items: center;
  flex-direction: row;
`;
const LeftWrapper = styled.View`
  width: ${l.lW}px;
`;
const RightWapper = styled.View`
  width: 100%;
`;

const TextProductMiddleBar = ({ title, score, reviewNum }: Props) => {
  return (
    <>
      <Container>
        <LeftWrapper>
          <TextMiddleTitleDark title={title} />
        </LeftWrapper>
        <RightWapper>
          {score && <TextProductScoreBig score={score} />}
          {reviewNum && <TextProductScoreBig reviewNum={reviewNum} />}
        </RightWapper>
      </Container>
    </>
  );
};

export default TextProductMiddleBar;
