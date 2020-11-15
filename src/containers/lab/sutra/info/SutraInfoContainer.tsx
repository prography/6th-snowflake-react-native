import * as React from 'react';
import styled from 'styled-components/native';
import SutraInfoGoodBad from '~/components/lab/sutra/info/SutraInfoGoodBad';
import SutraInfoComment from '~/components/lab/sutra/info/SutraInfoComment';
import MarginWide from '~/components/universal/margin/MarginWide';
import SutraInfoWriteComment from '~/components/lab/sutra/info/SutraInfoWriteComment';
interface Props {
  newSutraId: string;
}

const SutraInfoContainer = ({newSutraId}: Props) => {
  return (
    <>
      <SutraInfoGoodBad newSutraId={newSutraId}/>
      <MarginWide />
      <SutraInfoWriteComment/>
      <SutraInfoComment newSutraId={newSutraId}/>
    </>
  );
};

export default SutraInfoContainer;
