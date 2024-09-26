'use client';
import React, {useLayoutEffect} from 'react';
import { useTranslation } from 'react-i18next';
import MyPosts from '../components/MyPosts';
import { getCommonActions } from '@/commons/contexts/CommonContext';

const BoardContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('마이페이지'));
  }, [setMainTitle, t]);

  return <MyPosts />;
};

export default React.memo(BoardContainer);
