import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { d, l, BASE_URL, c } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ReviewCardContainer from '../review/ReviewCardContainer';
import MarginWide from '~/components/universal/margin/MarginWide';

const NARROW_MARGIN = d.px * 9;
const TEXT_HEIGHT = d.px * 16;
const FilterWrapper = styled.View`
  padding: 0 ${l.mR}px;
  flex-direction: row;
  justify-content: flex-end;
`;

const FilterBox = styled.TouchableOpacity`
  border-width: 1px;
  border-style: solid;
  border-color: ${c.extraLightGray};
  padding: ${NARROW_MARGIN}px;
  background-color: ${(props) =>
    props.showFilter ? c.purple : props.selected === '' ? 'white' : c.mint};
`;
const FilterText = styled.Text`
  font-size: ${d.px * 14}px;
  line-height: ${TEXT_HEIGHT}px;
  color: ${(props) => (props.showFilter ? 'white' : c.black)};
`;
const FilterSelectWrapper = styled.View``;
const Selection = styled.TouchableOpacity``;
interface Props {
  productId: number;
  reviewArray: any;
  setReviewArray: any;
}

enum GenderEnum {
  NONE = '',
  man = 'MAN',
  woman = 'WOMAN',
}

enum PartnerEnum {
  NONE = '',
  man = 'MAN',
  woman = 'WOMAN',
}

const ProductInfoReviewFilter = ({ setReviewArray, productId }: Props) => {
  const [genderParam, setGenderParam] = useState(GenderEnum.NONE);
  const [partnerParam, setPartnerParam] = useState(PartnerEnum.NONE);
  const [showGenderFilter, setShowGenderFilter] = useState(true);

  const genderFilterList = [
    {
      genderEnum: GenderEnum.woman,
      genderText: '여성',
    },
    {
      genderEnum: GenderEnum.man,
      genderText: '남성',
    },
  ];
  const _getReviewArray = async () => {
    let url = `${BASE_URL}/reviews/?product=${productId}`;
    if (genderParam !== GenderEnum.NONE) {
      url += `&gender=${genderParam}`;
    }
    if (partnerParam !== PartnerEnum.NONE) {
      url += `&partner = ${partnerParam}`;
    }

    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log('🌮 id', productId, '의 review array success!', json.results);
      setReviewArray(json.results);
    } catch (error) {
      console.log('🌮', productId, '의 review array', error);
    }
  };
  useEffect(() => {
    _getReviewArray();
  }, [genderParam, partnerParam]);
  return (
    <>
      <FilterWrapper>
        <FilterBox
          selected={genderParam}
          showFilter={showGenderFilter}
          onPress={() => {
            setShowGenderFilter(!showGenderFilter);
          }}
        >
          <FilterText showFilter={showGenderFilter}>{genderParam}</FilterText>
        </FilterBox>
        {showGenderFilter && (
          <FilterSelectWrapper>
            {genderFilterList.map((filter) => {
              return (
                <Selection
                  onPress={() => {
                    setGenderParam(filter.genderEnum);
                  }}
                >
                  <Text>{filter.genderText}</Text>
                </Selection>
              );
            })}
          </FilterSelectWrapper>
        )}
      </FilterWrapper>
    </>
  );
};

export default ProductInfoReviewFilter;
