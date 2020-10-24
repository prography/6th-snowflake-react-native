import * as React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import LabIntroduceCard from '~/components/lab/main/LabIntroduceCard';

interface Props {
  onPress: () => void;
}

const LabIntroducecardsContainer = ({ onPress }: Props) => {
  return (
    <>
      <LabIntroduceCard onPress={onPress} />
    </>
  );
};

export default LabIntroducecardsContainer;
