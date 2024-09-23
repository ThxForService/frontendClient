'use client';
import React, { useState } from 'react';
import CounselingApplyContainer from '@/counseling/containers/CounselingApplyContainer';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingForm from '@/counseling/components/CounselingForm';
import Header from '@/commons/layouts/Header';
import { OuterBox, ContentBox2 } from '@/commons/layouts/StyledWrapper';
import SiteTitle from '@/commons/SiteTitle';
import { useTranslation } from 'next-i18next';
import { UserInfoProvider } from '@/commons/contexts/UserInfoContext';

const Apply = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState('');
  //컨테이너에서 데이터 불러와서 사용

  return (
    <MemberOnlyContainer>
      {/* <SubTitleLink text={t('상담 예약')} href="" /> */}
      <title>{pageTitle}</title>
      <Header />
      <ContentBox2>
        <SiteTitle>{pageTitle}</SiteTitle>
        <UserInfoProvider>
          <CounselingApplyContainer setPageTitle={setPageTitle} />
        </UserInfoProvider>
        <CounselingForm />
      </ContentBox2>
    </MemberOnlyContainer>
  );
};
export default React.memo(Apply);
