'use client';
import React from 'react';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import { useTranslation } from 'next-i18next';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';
import CounselingList from '@/counseling/components/CounselingList';
import MyGCListConatiner from '@/group/containers/MyGCListConatiner';

const list = () => {
  return (
    <MemberOnlyContainer>
      <MyGCListConatiner />
      <CounselingList />
    </MemberOnlyContainer>
  );
};
export default React.memo(list);
