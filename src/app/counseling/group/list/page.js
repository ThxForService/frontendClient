'use client'
import React from 'react';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import MyGCListConatiner from '@/group/containers/MyGCListConatiner';

const CounselingGroupView = () => {
  return (
    <MemberOnlyContainer>
      <MyGCListConatiner />
    </MemberOnlyContainer>
  );
};
export default React.memo(CounselingGroupView);