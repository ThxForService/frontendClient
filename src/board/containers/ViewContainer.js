'use client';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

const ViewContainer = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('게시판'));
  }, [setMainTitle, t]);

  return (
    <section>
      <h1>게시글 보기</h1>
    </section>
  );
};

export default React.memo(ViewContainer);
