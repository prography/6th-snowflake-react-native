import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { d, l, BASE_URL, c } from '~/utils/constant';
import TextProductMiddleBar from '~/components/universal/text/product/info/TextProductMiddleBar';
import ReviewCardContainer from '../review/ReviewCardContainer';
import MarginWide from '~/components/universal/margin/MarginWide';
import GenderLoop from '~/components/universal/profile/GenderLoop';

const NARROW_MARGIN = d.px * 9;
const TEXT_HEIGHT = d.px * 16;
const FilterWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

const FilterBox = styled.TouchableOpacity`
  border-width: 1px;
  border-style: solid;
  border-color: ${c.extraLightGray};
  padding: ${NARROW_MARGIN}px;
  background-color: ${(props) =>
    props.showFilter ? c.purple : props.selected === '' ? 'white' : c.mint};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FilterText = styled.Text`
  font-size: ${d.px * 14}px;
  line-height: ${TEXT_HEIGHT}px;
  color: ${(props) => (props.showFilter ? 'white' : c.black)};
`;
const FilterSelectionText = styled.Text``;
const GenderPartnerFilterContainer = styled.View``;
const FilterSelectWrapper = styled.View`
  flex-direction: row;
`;
const Selection = styled.TouchableOpacity`
  padding: 30px;
`;
interface Props {
  productId: number;
  reviewArray: any;
  setReviewArray: any;
}

enum GenderEnum {
  NONE = 'NONE',
  man = 'MAN',
  woman = 'WOMAN',
}

enum PartnerEnum {
  NONE = 'NONE',
  man = 'MAN',
  woman = 'WOMAN',
}

const ProductInfoReviewFilter = ({ setReviewArray, productId }: Props) => {
  const [genderParam, setGenderParam] = useState(GenderEnum.NONE);
  const [partnerParam, setPartnerParam] = useState(PartnerEnum.NONE);
  const [showGenderFilter, setShowGenderFilter] = useState(true);
  const [showPartnerFilter, setShowPartnerFilter] = useState(true);
  const [showGenderPartnerFilter, setShowGenderPartnerFilter] = useState(true);

  const genderFilterList = [
    {
      genderEnum: GenderEnum.woman,
      genderText: '여성',
    },
    {
      genderEnum: GenderEnum.man,
      genderText: '남성',
    },
    {
      genderEnum: GenderEnum.NONE,
      genderText: '초기화',
    },
  ];
  const partnerFilterList = [
    {
      partnerEnum: PartnerEnum.woman,
      partnerText: '여성',
    },
    {
      partnerEnum: PartnerEnum.man,
      partnerText: '남성',
    },
    {
      genderEnum: GenderEnum.NONE,
      genderText: '초기화',
    },
  ];
  const _getReviewArray = async () => {
    let url = `${BASE_URL}/reviews/?product=${productId}`;
    if (genderParam !== GenderEnum.NONE) {
      url += `&gender=${genderParam}`;
    }
    if (partnerParam !== PartnerEnum.NONE) {
      url += `&partner=${partnerParam}`;
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
          showFilter={showGenderPartnerFilter}
          onPress={() => {
            setShowGenderPartnerFilter(!showGenderPartnerFilter);
          }}
        >
          {!showGenderPartnerFilter && <FilterText>성별 & 파트너:</FilterText>}

          <GenderLoop
            gender={genderParam}
            partnerGender={partnerParam}
            size={d.px * 15}
          />
        </FilterBox>

        {showGenderPartnerFilter && (
          <GenderPartnerFilterContainer>
            <FilterSelectWrapper>
              <FilterSelectionText>작성자 성별:</FilterSelectionText>
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
            <FilterSelectWrapper>
              <FilterSelectionText>파트너 성별:</FilterSelectionText>
              {partnerFilterList.map((filter) => {
                return (
                  <Selection
                    onPress={() => {
                      setPartnerParam(filter.partnerEnum);
                    }}
                  >
                    <Text>{filter.partnerText}</Text>
                  </Selection>
                );
              })}
            </FilterSelectWrapper>
          </GenderPartnerFilterContainer>
        )}
      </FilterWrapper>
    </>
  );
};

export default ProductInfoReviewFilter;
