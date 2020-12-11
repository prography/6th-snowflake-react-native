import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";

import { d, BASE_URL, c, l } from "~/utils/constant";
import TextTitlePurpleRight from "~/components/universal/text/TextTitlePurpleRight";
import TextTitleDarkPurpleLink from "~/components/universal/text/TextTitleDarkPurpleLink";
import { manageLoginLogout } from "~/store/modules/join/auth";
import MarginNarrow from "~/components/universal/margin/MarginNarrow";
import { RootState } from "~/store/modules";
import { getUserInfoAC } from "~/store/modules/join/userInfo";

const ProfileContainer = styled.View``;
const Container = styled.View`
  margin-left: ${l.mL}px;
  margin-right: ${l.mR}px;
`;
const MyProfile = () => {
  // redux
  const dispatch = useDispatch();

  const _isLoggedin = useSelector((state: RootState) => state.join.auth.isLoggedin);
  const { loading, data: userInfo, error } = useSelector((state: RootState) => state.join.userInfo.userInfo);

  useEffect(() => {
    dispatch(getUserInfoAC.request());
  }, []);

  return (
    <Container>
      {_isLoggedin ? (
        !loading ? (
          <>
            <ProfileContainer>
              <TextTitlePurpleRight
                title={userInfo.username + "님, 반가워요 ☀️"}
              />
            </ProfileContainer>
            <MarginNarrow />
            <TextTitleDarkPurpleLink
              title={""}
              buttonText={"LOGOUT"}
              onPress={() => manageLoginLogout(dispatch, false)}
            />
            <MarginNarrow />

            <TextTitleDarkPurpleLink
              title={""}
              buttonText={"정보수정"}
              stack={"JoinStack"}
              screen={"EditInfo"}
            />
          </>
        ) : (
            <>
              <ProfileContainer>
                {/* 일단 로그아웃 버튼 달아놓긴 했는데 이러한 경우가 있을려나
             로그인은 되어있지만 userinfo가 없는... */}
              </ProfileContainer>
              <MarginNarrow />
              <TextTitleDarkPurpleLink
                title={""}
                buttonText={"LOGOUT"}
                onPress={() => manageLoginLogout(dispatch, false)}
              />
              <MarginNarrow />

              <TextTitleDarkPurpleLink
                title={""}
                buttonText={"정보수정"}
                stack={"JoinStack"}
                screen={"EditInfo"}
              />
              <TextTitlePurpleRight title={"로딩☁️"} />
            </>
          )
      ) : (
          <TextTitlePurpleRight title={"Please join us! ☁️"} />
        )}
    </Container>
  );
};
export default MyProfile;
