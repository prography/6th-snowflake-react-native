import * as React from 'react';
import styled from 'styled-components/native';
import { d, l } from '~/utils/constant';
import TextProductManufacturerBigEng from '~/components/universal/text/product/info/TextProductManufacturerBigEng';
import TextProductNameBigEng from '~/components/universal/text/product/info/TextProductNameBigEng';
import LineGrayMiddle from '~/components/universal/line/LineGrayMiddle';
import MarginMedium from '~/components/universal/margin/MarginMedium';
const Container = styled.View`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
`;
interface Props {
  nameKor: string;
  nameEng: string;
  manufacturerKor: string;
  manufacturerEng: string;
}

const ProductInfoNameManufacturer = ({
  nameKor,
  nameEng,
  manufacturerKor,
  manufacturerEng,
}: Props) => {
  return (
    <>
      <Container>
        <TextProductManufacturerBigEng
          manufacturerKor={manufacturerKor}
          manufacturerEng={manufacturerEng}
        />
        <TextProductNameBigEng nameKor={nameKor} nameEng={nameEng} />
      </Container>
    </>
  );
};

export default ProductInfoNameManufacturer;
