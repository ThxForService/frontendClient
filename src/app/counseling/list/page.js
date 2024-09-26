'use client';
import React from 'react';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';
import MyGCListConatiner from '@/group/containers/MyGCListConatiner';

const CounselingView = () => {
  return (
    <MemberOnlyContainer>
      <MyGCListConatiner />
      <CounselingListContainer />
    </MemberOnlyContainer>
  );
};
export default React.memo(CounselingView);
