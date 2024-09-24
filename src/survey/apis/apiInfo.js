import requestData from '@/commons/libs/requestData';

export const getList = (page) => requestData(`/survey?page=${page || 1}`);

export const getInfo = (sNo) => requestData(`/survey/info/${sNo}`);
