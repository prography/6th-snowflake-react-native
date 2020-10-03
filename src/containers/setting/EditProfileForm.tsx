import * as React from "react";
import styled from "styled-components/native";
import { useState, useEffect } from "react";
import { c, d } from "~/utils/constant";

interface Props {
  title: string;
  defaultValue: string;
}

const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${d.px * 20}px;
`;

const TitleContainer = styled.View`
  justify-content: center;
  margin-right: ${d.px * 10}px;
  width: ${d.px * 50}px;
`;

const TitleText = styled.Text`
  font-size: ${d.px * 15}px;
`;

const InfoInput = styled.TextInput`
  font-size: ${d.px * 17}px;
  padding: ${d.px * 3}px;
  width: ${d.width - 120}px;
  font-family: "Jost-Bold";
  color: ${c.darkGray};
  justify-content: center;
  align-items: center;
  border-width: ${d.px * 1}px;
`;

const EditProfileForm = ({ title, defaultValue }: Props) => {
  return (
    <Container>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <InfoInput value={defaultValue} />
    </Container>
  );
};

export default EditProfileForm;
