'use client';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';
import Header from '@/commons/layouts/Header';
import {
  ContentBox,
  ContentBox2,
  ContentBox3,
} from '@/commons/layouts/StyledWrapper';

const CounselingView = ({ searchParams }) => {
  return (
    <MemberOnlyContainer>
      <Header />
      <ContentBox3>
        <CounselingListContainer searchParams={searchParams} />
      </ContentBox3>
    </MemberOnlyContainer>
  );
};

export default CounselingView;
