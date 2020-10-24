import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

import OneSutraCard from "~/components/lab/sutra/list/OneSutraCard";
import { getTokenItem } from "~/utils/asyncStorage";
import { fetchAPI } from "~/api";
import { llog } from "~/utils/functions";
import { ResultsRes, Sutra } from "~/api/interface";

// 여기에서 데이터 받아와서 map 돌려서 OneSutraCard에 넘겨주면 됩니다!

const SutraCardsList = () => {

  const [_sutraCardsList, _setSutraCardsList] = useState<Sutra[]>(null);

  const _getSutraList = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        return;
      }

      const { status, response } = await fetchAPI('labs/sutra/', {
        token, // FIXME 토큰 없이
      });
      const json: ResultsRes<Sutra> = await response.json();
      llog("SutraList - success!", json);

      if (status === 200) {
        _setSutraCardsList(json.results);
      }
    } catch (error) {
      llog("StruaList - error", error);
    }
  };

  useEffect(() => {
    _getSutraList();
  }, []);

  return (
    <>
      {_sutraCardsList?.map((sutra: Sutra) => <OneSutraCard sutra={sutra} />)}
    </>
  );
};

export default SutraCardsList;
