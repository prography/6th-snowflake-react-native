import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
interface Props {
  gender: string;
  size: number;
  who: boolean;
}

const NullCircle = styled.View`
  width: ${(props) => d.px * props.size}px;
  height: ${(props) => d.px * props.size}px;
  border-radius: 100px;
  background-color: white;
  border-color: ${c.lightGray};
  border-style: dashed;
  border-width: ${d.px}px;
  right: ${(props) => (-(d.px * props.size) / 15) * 6}px;
  z-index: 1;
`;
const MyGenderCircle = styled.View`
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

const GenderCircle = ({ gender, size, who }: Props) => {
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );

  return (
    <>
      {gender === null ? (
        <NullCircle size={size} />
      ) : who ? (
        <MyGenderCircle
          size={size}
          genderColor={gender === 'female' ? womanColor : manColor}
        />
      ) : (
        <PartnerGenderCircle
          size={size}
          genderColor={gender === 'female' ? womanColor : manColor}
        />
      )}
    </>
  );
};

export default GenderCircle;
