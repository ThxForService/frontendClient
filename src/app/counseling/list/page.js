'use client'
import React from 'react';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';

const CounselingView = () => {
  return (
    <MemberOnlyContainer>
      <CounselingListContainer />
    </MemberOnlyContainer>
  );
};
export default React.memo(CounselingView);
