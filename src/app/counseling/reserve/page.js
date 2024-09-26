'use client';
import React, { useState } from 'react';
import CounselingApplyContainer from '@/counseling/containers/CounselingApplyContainer';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import Header from '@/commons/layouts/Header';
import { OuterBox, ContentBox2 } from '@/commons/layouts/StyledWrapper';
import SiteTitle from '@/commons/SiteTitle';
import { useTranslation } from 'next-i18next';
import { UserInfoProvider } from '@/commons/contexts/UserInfoContext';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
const Apply = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState('');
  //컨테이너에서 데이터 불러와서 사용

  return (
    <MemberOnlyContainer>
      <Header />
      <ContentBox2>
        <SiteTitle>{pageTitle}</SiteTitle>
        <CounselingApplyContainer setPageTitle={setPageTitle} />
      </ContentBox2>
    </MemberOnlyContainer>
  );
};
export default React.memo(Apply);
