import apiRequest from '@/commons/libs/apiRequest';
import requestData from '@/commons/libs/requestData';


// 게시글 작성 API 호출
export const createBoardData = async (form) => {
  try {
    console.log(`${form.bid}`)
    const response = await apiRequest(`/board/write/${form.bid}`, 'POST', form);
    return response;
  } catch (error) {
    throw handleApiError(error);
  }
};

// 게시글 수정 API 호출
export const updateBoardData = async (form) => {
  try {
    const response = await apiRequest(`/board/update/${form.seq}`, 'PATCH', form);
    return response;
  } catch (error) {
    throw handleApiError(error);
  }
};


// API 에러 처리 함수
const handleApiError = (error) => {
  console.error('API 요청 중 오류 발생:', error);
  if (error.response && error.response.data && error.response.data.errors) {
    throw error.response.data.errors;
  }
  throw new Error('API 요청에 문제가 발생했습니다.');
};
