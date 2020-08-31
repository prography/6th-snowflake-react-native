import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { d, l, c } from '~/utils/constant';
import { RootState } from '~/store/modules';

const Container = styled.View`
  flex-direction: row;

  left: ${(props) => (-(d.px * props.size) / 15) * 3}px;
`;

const GenderCircle = styled.View`
  width: ${(props) => d.px * props.size}px;
  height: ${(props) => d.px * props.size}px;
  border-radius: 100px;
  background-color: ${(props) => props.genderColor || c.darkGray};
  right: ${(props) => (-(d.px * props.size) / 15) * 6}px;
  z-index: 1;
`;
const PartnerGenderCircle = styled.View`
  width: ${(props) => d.px * props.size}px;
  height: ${(props) => d.px * props.size}px;
  border-radius: 100px;
  border-style: solid;
  border-width: ${(props) => ((d.px * props.size) / 15) * 4}px;
  border-color: ${(props) => props.partnerGenderColor || c.darkGray};
  z-index: 0;
`;
interface Props {
  gender: string;
  partnerGender: string;
  size: number;
}

const GenderLoop = ({ gender, partnerGender, size }: Props) => {
  const womanColor = useSelector(
    (state: RootState) => state.join.genderColor.womanColor,
  );
  const manColor = useSelector(
    (state: RootState) => state.join.genderColor.manColor,
  );

  return (
    <>
      <Container size={size}>
        <GenderCircle
          genderColor={
            gender && gender === 'WOMAN'
              ? womanColor
              : gender === 'MAN'
                ? manColor
                : c.extraLightGray
          }
          size={size}
        />
        <PartnerGenderCircle
          partnerGenderColor={
            partnerGender && partnerGender === 'WOMAN'
              ? womanColor
              : partnerGender === 'MAN'
                ? manColor
                : c.extraLightGray
          }
          size={size}
        />
      </Container>
    </>
  );
};

export default GenderLoop;
