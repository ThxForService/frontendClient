import requestData from '@/commons/libs/requestData';

// 내가 참여한 설문 목록
export const getMyAnswers = (page) =>
  requestData(`/survey/answers?page=${page}`);
