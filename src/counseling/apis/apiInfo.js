import requestData from '../../commons/libs/requestData';

//목록 조회
export const apiList = (search) => {
  search = search ?? {};

  const qs = [];

  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/counseling/list';
  if (qs.length > 0) url += `?${qs.join('&')}`; //검색 조건이 있을 때

  return requestData(url);
};

// 예약된 상세조회
export const myApiGet = (cSeq) => requestData(`/counseling/list/${cSeq}`);

// 상세 조회
export const apiGet = (cSeq) => requestData(`/reservation/info/${seq}`);
