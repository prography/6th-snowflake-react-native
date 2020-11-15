import * as React from 'react';
import styled from 'styled-components/native';
interface Props {
  newSutraId: string;
}


const Container = styled.View`
  margin-right: ${l.mR}px;
  margin-left: ${l.mR}px;
  width: ${d.width - l.mR * 2}px;
`;

const SutraInfoContainer = ({newSutraId}: Props) => {
  return (
    <>
      
    </>
  );
};

export default SutraInfoContainer;
