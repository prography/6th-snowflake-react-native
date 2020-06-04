import * as React from 'react';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { useSelector } from 'react-redux';
const MyProfile = () => {
  const _isLoggedin = useSelector((state) => state.authReducer.isLoggedin);
  return (
    <>
      {_isLoggedin ? (
        <TextTitlePurpleRight title={'You are logged in ☀️'} />
      ) : (
        <TextTitlePurpleRight title={'Please join us! ☁️'} />
      )}
    </>
  );
};
export default MyProfile;
