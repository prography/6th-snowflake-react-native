import * as React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components/native';
import { Text } from 'react-native';
import { d, l, c } from '~/utils/constant';

const Container = styled.View`
  flex-direction: row;
`;

const GenderCircle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${(props) => props.genderColor || c.darkGray};
`;
const PartnerGenderCircle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${(props) => props.partnerGenderColor || c.darkGray};
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
        <GenderCircle genderColor={womanColor} />
        <PartnerGenderCircle partnerGenderColor={manColor} />
      </Container>
    </>
  );
};

export default GenderLoop;
