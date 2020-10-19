import * as React from "react";
import styled from "styled-components/native";
import { useState } from "react";
import { l } from "~/utils/constant";
import TopBarBackArrowTitleRightIcon from "~/components/universal/topBar/TopBarBackArrowTitleRightIcon";
import TextTitlePurpleRight from "~/components/universal/text/TextTitlePurpleRight";
import EditProfileForm from "~/containers/setting/EditProfileForm";
import BottomBtnCollectData from "~/components/universal/bottomBar/BottomBtnCollectData";
import { RootTabParamList } from "~/navigation/RootTabNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { getUserInfoAC } from "~/store/modules/join/userInfo";
import { RootState } from "~/store/modules";
import { useDispatch, useSelector } from "react-redux";
import { llog } from "~/utils/functions";
import { fetchAPI } from "~/api";

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

  const { loading, data: userInfo, error } = useSelector((state: RootState) => state.join.userInfo.userInfo);

  const [email, setEmail] = useState<string>(userInfo?.email);
  const [username, setUsername] = useState<string>(userInfo?.username);
  const [password, setPassword] = useState<string>("");

  const infoArr = [
      {title: "변경할\n이메일", defaultValue:email, setValue:setEmail},
      {title: "변경할\n이름", defaultValue:username, setValue: setUsername},
      {title: "비밀번호\n인증", defaultVaue:password, setValue: setPassword}
  ]


  const editInfo = async () => {
    //PATCH account

    try {
      llog('😸2. /accounts 정보수정 api 호출');
      const { status, response } = await fetchAPI('accounts/', {
        method: 'PATCH',
        params: {
          email,
          username,
          password,
        },
      });
      console.log('응다븡ㄴ?',status, response)
      if (status === 201){
        navigation.navigate("JoinStack", {screen: "SettingMain"})
        alert('정보수정 완료');
        console.log(response)
      }
    } catch (error) {
      llog('😸. /accounts 정보수정 오류 catch.. ', error);
    }
  };

  
  return (
    <>
      {loading ? (
        <TextTitlePurpleRight title={"Loading..."} />
      ) : (
          <BottomBtnCollectData
          btnText={"수정 완료"}
          isFilled={true}
          onPressFunction={editInfo}
          >
        <Container>
          <KeyboardAwareView>
            <TopBarBackArrowTitleRightIcon title="회원정보 수정" />
            {infoArr.map((info, index) => (
                <EditProfileForm key={index} title={info.title} defaultValue={info.defaultValue} setValue={info.setValue}/>
            ))}
          </KeyboardAwareView>
        </Container>
        </BottomBtnCollectData>
      )}
    </>
  );
};

export default EditInfo;
