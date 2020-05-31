import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, l, c } from '~/utils/constant';

const Container = styled.View`
  flex-direction: row;
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
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );

  return (
    <>
      <Container>
        <GenderCircle
          genderColor={
            gender && gender === 'female'
              ? womanColor
              : gender === 'male'
              ? manColor
              : c.extraLightGray
          }
          size={size}
        />
        <PartnerGenderCircle
          partnerGenderColor={
            partnerGender && partnerGender === 'female'
              ? womanColor
              : partnerGender === 'male'
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
