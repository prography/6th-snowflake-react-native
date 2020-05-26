import * as React from 'react';
import styled from 'styled-components/native';
import { d, color } from '~/utils/constant';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';

const Container = styled.View`
  width: 700px;
`;

interface Props {
  title: string;
  productCompany: string;
  productName: string;
}
const TrioBox = ({ title, productCompany, productName }: Props) => {
  return (
    <Container>
      <TextMiddleTitleDark title={title} />
    </Container>
  );
};

export default TrioBox;
