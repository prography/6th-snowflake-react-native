import * as React from "react";
import styled from "styled-components/native";
import { useState, useEffect } from "react";
import { d, c, l, BASE_URL } from "~/utils/constant";
import TopBarBackArrowTitleRightIcon from "~/components/universal/topBar/TopBarBackArrowTitleRightIcon";
import { getUserInfo } from "~/api/join/userInfo";
import TextTitlePurpleRight from "~/components/universal/text/TextTitlePurpleRight";
import { getTokenItem } from "~/utils/asyncStorage";
import { llog2 } from "~/utils/functions";
import { UserInfoRes } from "~/utils/interface";
import EditProfileForm from "~/containers/setting/EditProfileForm";
import BottomBtnCollectData from "~/components/universal/bottomBar/BottomBtnCollectData";
import { RootTabParamList } from "~/navigation/RootTabNavigation";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
    navigation: StackNavigationProp<RootTabParamList>;
}

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const KeyboardAwareView = styled.KeyboardAvoidingView`
  margin: 0 ${l.mR}px;
`;

const EditInfo = ({navigation}: Props) => {
  const [userInfo, setUserInfo] = useState(null);

  const _getUserInfo = async ():Promise<UserInfoRes> => {
    try {
      const token = await getTokenItem();
      if (!token) {
        throw Error("client - no token");
      }

      const response = await fetch(`${BASE_URL}/accounts/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json: UserInfoRes = await response.json();
      llog2("🅱️🅱️🅱️🅱️🅱️🅱️   User info 불러옴 - 성공!", json);
      setUserInfo(json);
    } catch (error) {
      console.log("getUserInfo Error");
    }
  };
  
  useEffect(() => {
    _getUserInfo();
  }, []);

  const infoArr = [
      {"title": "이메일", "defaultValue":userInfo?.email},
      {"title": "이름", "defaultValue":userInfo?.username}
  ]

  return (
    <>
      {userInfo === null ? (
        <TextTitlePurpleRight title={"Loading..."} />
      ) : (
          <BottomBtnCollectData
          btnText={"수정 완료"}
          isFilled={true}
          stack={"JoinStack"}
          screen={"SettingMain"}
          >
        <Container>
          <KeyboardAwareView>
            <TopBarBackArrowTitleRightIcon title="회원정보 수정" />
            {infoArr.map((info, index) => (
                <EditProfileForm key={index} title={info.title} defaultValue={info.defaultValue}/>
            ))}
          </KeyboardAwareView>
        </Container>
        </BottomBtnCollectData>
      )}
    </>
  );
};

export default EditInfo;
