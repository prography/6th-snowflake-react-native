import * as React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';
import { llog } from '~/utils/functions';




async function onAppleButtonPress(signup) {
  llog('apple login 버튼');
  // performs login request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
  });

  llog('🇬🇶 1', appleAuthRequestResponse, appleAuthRequestResponse.user)

  // get current authentication state for user
  // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
  const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
  llog('🇬🇶 2', credentialState)

  // use credentialState response to ensure the user is authenticated
  if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
    // user is authenticated
    llog('🇬🇶 3', credentialState)
    signup(appleAuthRequestResponse.identityToken)
  }
}

interface Props {
  signup: (token: string) => void;
}

const AppleBtn = ({ signup }: Props) => {
  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    return appleAuth.onCredentialRevoked(async () => {
      console.warn('If this function executes, User Credentials have been Revoked');
    });
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  return (
    <View>
      <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: d.px * 160,
          height: d.px * 45,
        }}
        onPress={() => onAppleButtonPress(signup)}
      />
    </View>
  )
}

export default AppleBtn;