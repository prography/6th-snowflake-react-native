import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, l, c } from '~/utils/constant';

const Container = styled.View`
  flex-direction: row;
`;

const GenderCircle = styled.View`
  width: ${d.px * 15}px;
  height: ${d.px * 15}px;
  border-radius: 100px;
  background-color: ${(props) => props.genderColor || c.darkGray};
  right: ${-d.px * 6}px;
  z-index: 1;
`;
const PartnerGenderCircle = styled.View`
  width: ${d.px * 15}px;
  height: ${d.px * 15}px;
  border-radius: 100px;
  border-style: solid;
  border-width: ${d.px * 4}px;
  border-color: ${(props) => props.partnerGenderColor || c.darkGray};
  z-index: 0;
`;
interface Props {
  gender: string;
  partnerGender: string;
}
const GenderLoop = ({ gender, partnerGender }: Props) => {
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
          genderColor={gender === 'female' ? womanColor : manColor}
        />
        <PartnerGenderCircle
          partnerGenderColor={
            partnerGender === 'female' ? womanColor : manColor
          }
        />
      </Container>
    </>
  );
};

export default GenderLoop;
