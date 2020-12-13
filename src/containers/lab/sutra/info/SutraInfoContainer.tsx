import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import SutraInfoGoodBad from "~/components/lab/sutra/info/SutraInfoGoodBad";
import SutraInfoComment from "~/components/lab/sutra/info/SutraInfoComment";
import MarginWide from "~/components/universal/margin/MarginWide";
import SutraInfoWriteComment from "~/components/lab/sutra/info/SutraInfoWriteComment";
import { SutraReview, Sutra, RecommendType, Position } from "~/api/interface";
import { fetchAPI } from "~/api";
import { llog, consoleError } from "~/utils/functions";
import { getTokenItem } from "~/utils/asyncStorage";
import { RootState } from '~/store/modules';
import { toast } from "~/utils/toast";
import { alertUtil } from "~/utils/alert";

interface Props {
  newSutraId: number;
  navigateToJoinStack: () => void;
}

const SutraInfoContainer = ({ newSutraId, navigateToJoinStack }: Props) => {
  // redux
  const isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);
  const userInfo = useSelector((state: RootState) => state.join.userInfo.userInfo);
  // state
  const [_sutra, _setSutra] = useState<Sutra>(null);
  const [_sutraReviews, _setSutraReviews] = useState<SutraReview[]>(null);
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);

  // 추천, 비추천, 안해봤어요
  const onPressEvaluation = async (sutraId: number, rcType: RecommendType) => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }

      if (userInfo?.position === Position.NONE) {
        setShowQuestionModal(true);
        return;
      }

      const { status, response } = await fetchAPI(`labs/sutras/${sutraId}/evaluations/`, { method: 'POST', token, params: { recommend_type: rcType } });
      const json = await response.json();
      llog('🐰 Sutra', rcType, '성공 = 201', status, json);

      if (status === 201) {
        _getSutra();
      }
    } catch (error) {
      consoleError(`SutraList - ${rcType} error`, error);
    }
  };
  // 평가 삭제
  const onPressDeleteEvaluation = async (sutraId: number) => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }

      const { status } = await fetchAPI(`labs/sutras/${sutraId}/evaluations/`, {
        method: 'DELETE',
        token,
      });

      if (status === 204) {
        _getSutra();
      } else {
        toast(`처리 중 오류가 발생했어요. (${status})`);
      }
    } catch (error) {
      consoleError('SutraList - delete 평가 error', error);
    }
  }
  // 찜 or 찜 삭제
  const onPressLikeOrDeleteLike = async (action: 'like' | 'deleteLike', sutraId: number) => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }

      const { status } = await fetchAPI('likes/', {
        method: action === 'like' ? 'POST' : 'DELETE',
        token,
        params: {
          model: 'sutra',
          object_id: sutraId,
        },
      });
      // const json = await response.json(); // 204 일 때 .json() 하면 서버쪽에서 보내주는게 없어서 에러남
      llog('🐰 Sutra Like or DeleteLike', status, sutraId);

      if (action === 'like' && status === 201) {
        _getSutra();
      } else if (action === 'deleteLike' && status === 204) {
        _getSutra();
      } else {
        toast('오류가 발생했어요');
      }
    } catch (error) {
      consoleError(`SutraList - ${action === 'like' ? '찜' : '찜 삭제'}  error`, error);
    }
  };

  const _getSutra = async () => {
    try {
      const token = await getTokenItem();

      const { response, status } = await fetchAPI(`labs/sutras/${newSutraId}/`, { token });
      const json: Sutra = await response.json();
      llog("Get Sutra", json);

      if (status === 200) {
        _setSutra(json);
      }
    } catch (error) {
      consoleError("Get Sutra - error", error);
    }
  };

  const _getSutraReviews = async () => {
    try {
      const token = await getTokenItem();

      const { response, status } = await fetchAPI(
        `labs/sutras/${newSutraId}/comments/`,
        { token }
      );
      const json = await response.json();
      const results: SutraReview[] = json.results;
      llog("Sutra Reviews", results);

      if (status === 200) {
        _setSutraReviews(results);
      }
    } catch (error) {
      consoleError("Sutra Reviews - error", error);
    }
  };

  useEffect(() => {
    _getSutra();
    _getSutraReviews();
  }, [isLoggedin]);

  return (
    <>
      <SutraInfoGoodBad
        _sutra={_sutra}
        refetch={() => _getSutra()}
        onPressEvaluation={onPressEvaluation}
        onPressDeleteEvaluation={onPressDeleteEvaluation}
        onPressLikeOrDeleteLike={onPressLikeOrDeleteLike}
      />
      <MarginWide />
      <SutraInfoWriteComment
        newSutraId={newSutraId}
        refetch={() => _getSutraReviews()}
        navigateToJoinStack={navigateToJoinStack}
      />
      <SutraInfoComment
        newSutraId={newSutraId}
        _sutraReviews={_sutraReviews}
        refetch={() => _getSutraReviews()}
        navigateToJoinStack={navigateToJoinStack}
      />
    </>
  );
};

export default SutraInfoContainer;
