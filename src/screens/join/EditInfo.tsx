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

  const infoArr = [
      {title: "이메일", defaultValue:email, setValue:setEmail},
      {title: "이름", defaultValue:username, setValue: setUsername}
  ]

  
console.log(email, username);
  return (
    <>
      {loading ? (
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
