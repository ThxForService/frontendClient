'use client';
import SurveyListContainer from '@/survey/containers/SurveyListContainer';

const ListPage = ({ searchParams }) => {
  return <SurveyListContainer searchParams={searchParams} />;
};

export default ListPage;
