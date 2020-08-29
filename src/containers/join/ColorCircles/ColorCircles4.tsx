import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, circleColor4 } from '~/utils/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setWomanColor, setManColor } from '~/modules/join/genderColorReducer';

const OneLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ColorCircles4 = () => {
  const dispatch = useDispatch();
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );

  const setColor = (cColor) => {
    womanColor === null
      ? dispatch(setWomanColor(cColor))
      : manColor === null
        ? womanColor === cColor
          ? alert('다른 색을 골라주세요')
          : dispatch(setManColor(cColor))
        : [dispatch(setManColor(null)), dispatch(setWomanColor(cColor))];
  };

  return (
    <>
      {/* 고쳐야함... for문 안 먹어 ㅠㅠ...... */}
      <OneLine>
        {circleColor4.map((circle, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setColor(circle.cColor);
                console.log('바뀐 womanColor:', womanColor, 'man', manColor);
              }}
              style={{
                width: d.height / 20,
                height: d.height / 20,
                borderRadius: 1000,
                backgroundColor: circle.cColor,
              }}
            />
          );
        })}
      </OneLine>
    </>
  );
};

export default ColorCircles4;
