import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components/native";

import { RootTabParamList } from "~/navigation/RootTabNavigation";
import { d, c, l } from "~/utils/constant";
import { getTokenItem } from "~/utils/asyncStorage";
import { useSelector, useDispatch } from "react-redux";
import { llog } from "~/utils/functions";
import { RootState } from "~/store/modules";
import { fetchAPI } from "~/api";
import { Img } from "~/img";
import MyModal from "~/components/universal/modal/LoginModal";
import HeartUnselected from "~/img/svgIcons/HeartUnselected";
import HeartSelected from "~/img/svgIcons/HeartSelected";
import LoginModal from "~/components/universal/modal/LoginModal";
import { toast } from "~/utils/toast";
import { refreshTokenAC } from "~/store/modules/join/auth";
import { LoginRes, RequestType } from "~/api/interface";
import { eventUtil } from "~/utils/firebase/event";

interface Props {
  children: React.ReactNode;
  navigateToReviewUpload1: () => void;
  productId: number;
}

const Screen = styled.View`
  flex: 1;
  background-color: white;
`;

const Container = styled.View`
  height: ${l.bottomBar}px;
  width: ${d.width}px;
  position: absolute;
  bottom: 0px;
  flex: 1;
  flex-direction: row;
  background-color: white;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding-top: ${d.px * 10}px;
`;
const Title = styled.Text`
  color: ${c.darkGray};
  font-size: ${d.px * 12}px;
`;

const HeartIcon = styled.Image`
  width: ${d.px * 30}px;
  height: ${d.px * 20}px;
`;

const ProductInfoBar = ({
  children,
  navigateToReviewUpload1,
  productId,
}: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likedId, setLikedId] = useState(null);
  const _isLoggedin = useSelector(
    (state: RootState) => state.join.auth.isLoggedin
  );
  const dispatch = useDispatch();

  const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(
    false
  );
  const onCancel = () => setIsLoginModalVisible(false);

  // FIXME: 테스트로 일단 항상 토큰 재요청함. 11월 말에 다희가 고칠 것임!
  const _likeProduct = async (force = false) => {
    try {
      const token = await getTokenItem();
      if (!token) {
        setIsLoginModalVisible(true);
        return;
      }
      // if (!token) { return; } // 이 함수 들어오기 전에 체크 함.

      llog("1-1.🍊like 생성 위한 token 잘 가져옴 ", token);
      llog("token", token);
      llog("productId", productId);

      llog('🥰🥰🥰🥰', force)
      if (force === false) {
        llog('😂 토큰 만료');
        // 토큰을 다시 요청한다.
        dispatch(refreshTokenAC.request<RequestType>({ refetch: () => _likeProduct(true) }));
        return;
      }

      const { status, response } = await fetchAPI(`likes/`, {
        method: "POST",
        token,
        params: {
          model: "product",
          object_id: productId,
        },
      });
      switch (status) {
        case 201:
          llog("2. 🍊like post 성공");
          await _checkIsLiked();
          break;
        case 401:
          llog('😂 토큰 만료', response);
          // 토큰을 다시 요청한다. (모든 API마다 이렇게 해야하는데...)
          dispatch(refreshTokenAC.request<RequestType>({
            refetch: () => _likeProduct(true),
          }));
          break;
        default:
          toast(`처리 중 오류가 발생했어요. (${status})`);
          const json = await response.json()
          llog('🍊 default json', status, json)
          break;
      }
    } catch (error) {
      llog("🍊like 생성 에러 ", error);
      toast('처리 중 오류가 발생했어요.');
    }
  };

  const _deleteLiked = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        setIsLoginModalVisible(true);
        return;
      }

      const url = `likes/${likedId}/`;
      const { status, response } = await fetchAPI(url, {
        method: "DELETE",
        token,
      });

      if (status === 204) {
        llog("4. 🍊like 삭제 성공", response);
        await _checkIsLiked();
      }
    } catch (error) {
      llog("🍊like delete 에러 ", error);
    }
  };

  const _checkIsLiked = async () => {
    try {
      const token = await getTokenItem();
      if (!token) {
        setIsLoginModalVisible(true);
        return;
      }

      const { status, response } = await fetchAPI(
        `likes/?model=product&object_id=${productId}`,
        { token }
      );
      if (status === 200) {
        const json = await response.json();
        llog("3-1. 🍊like 조회 ", response, json);
        setIsLiked(json.results.length === 0 ? false : true);

        llog(
          "3-2. 🍊like가 되었다면, 그 id",
          json.results.length === 0 ? "like 안 돼서 없음" : json.results[0].id
        );

        json.results.length === 0
          ? setLikedId(null)
          : setLikedId(json.results[0].id);
      }
    } catch (error) {
      llog("🍊 check like 에러 ", error);
    }
  };

  useEffect(() => {
    _checkIsLiked();
  }, []);
  return (
    <Screen>
      {children}
      <Container>
        <Tab
          onPress={() => {
            if (_isLoggedin) {
              if (isLiked) {
                eventUtil.logEvent(eventUtil.press_delete_like, { productId });
                _deleteLiked();
              } else {
                eventUtil.logEvent(eventUtil.press_like, { productId });
                _likeProduct();
              }
            } else {
              setIsLoginModalVisible(true);
            }
          }}
        >
          {isLiked ? <HeartSelected /> : <HeartUnselected />}
        </Tab>
        {/* <Tab>
          <Title>공유하기</Title>
        </Tab> */}
        <Tab
          onPress={() => {
            if (_isLoggedin) {
              eventUtil.logEvent(eventUtil.press_review_upload, { productId });
              navigateToReviewUpload1();
            } else {
              setIsLoginModalVisible(true);
            }
          }}
        >
          <Title>리뷰 쓰러 가기</Title>
        </Tab>
      </Container>
      <LoginModal
        isVisible={isLoginModalVisible}
        message={"마이 탭에서 로그인 후\n이용 부탁드려요!"}
        onCancel={onCancel}
      />
    </Screen>
  );
};

export default ProductInfoBar;
