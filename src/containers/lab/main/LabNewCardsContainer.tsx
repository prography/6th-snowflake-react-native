import * as React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import LabSutraNewCard from '~/components/lab/main/LabSutraNewCard';

// 여기에서 데이터 받아와서 map 돌려서 LabSutraNewCard에 넘겨주면 됩니다!

interface Props {
  onPress: () => void;
  setNewSutraId: any;
}

const LabNewCardsContainer = ({ onPress, setNewSutraId }: Props) => {
  return (
    <>
      <LabSutraNewCard onPress={onPress} setNewSutraId={setNewSutraId}/>
    </>
  );
};

export default LabNewCardsContainer;
