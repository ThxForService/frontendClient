import requestData from '@/commons/libs/requestData';

// 질문지 조회
export const getTest = (type) => requestData(`/survey/${type}`);
