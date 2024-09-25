import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import MypageMain from '../components/MypageMain';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import styled from 'styled-components';
import UserInfoContext from '@/commons/contexts/UserInfoContext';

const MypageContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('마이페이지'));
  }, [setMainTitle, t]);

  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);

  return (
    userInfo && ( 
    <MypageMain />
  )
);
};

export default React.memo(MypageContainer);
