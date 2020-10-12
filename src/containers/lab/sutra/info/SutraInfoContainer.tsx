import * as React from 'react';
import styled from 'styled-components/native';
import SutraInfoGoodBad from '~/components/lab/sutra/info/SutraInfoGoodBad';
import SutraInfoComment from '~/components/lab/sutra/info/SutraInfoComment';
import MarginWide from '~/components/universal/margin/MarginWide';

// 여기에서 데이터 받아와서 적용!

const SutraInfoContainer = () => {
  return (
    <>
      <SutraInfoGoodBad />
      <MarginWide />
      <SutraInfoComment />
    </>
  );
};

export default SutraInfoContainer;
