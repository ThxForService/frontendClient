'use client';
import React, {useLayoutEffect} from 'react';
import { useTranslation } from 'react-i18next';
import MyHistory from '../components/MyHistory';
import { getCommonActions } from '@/commons/contexts/CommonContext';

const MyHistoryContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('마이페이지'));
  }, [setMainTitle, t]);

  return <MyHistory />;
};

export default React.memo(MyHistoryContainer);
