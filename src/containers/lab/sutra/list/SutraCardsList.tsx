import * as React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import OneSutraCard from '~/components/lab/sutra/list/OneSutraCard';

// 여기에서 데이터 받아와서 map 돌려서 OneSutraCard에 넘겨주면 됩니다!

const SutraCardsList = () => {
  return (
    <>
      <OneSutraCard />
    </>
  );
};

export default SutraCardsList;
