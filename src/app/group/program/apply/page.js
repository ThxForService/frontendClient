'use client';

import React from 'react';
import GroupCounselingApplyContainer from '@/group/containers/GroupCounselingApplyContainer';
import { useTranslation } from 'react-i18next';

const GroupCounselingApplyPage = () => {
  const { t } = useTranslation();


  return (
    <div>
      <h1>{t('집단상담 신청')}</h1>
      <GroupCounselingApplyContainer/>
    </div>
  );
};

export default GroupCounselingApplyPage;