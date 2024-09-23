import requestData from '@/commons/libs/requestData';
import apiRequest from '@/commons/libs/apiRequest';

//채팅방 생성
export const startChat = () => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await requestData('/chat/room', 'GET');
        console.log(res);
        resolve(res); // 성공 시 응답 반환
      } catch (err) {
        console.error(err);
        reject(err); // 에러 처리
      }
    })();
  });
};

// 채팅 목록 조회 함수
export const chatList = () => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await requestData('/chat/rooms', 'GET');
        resolve(res.items); // 조회된 게시글 목록 반환
        console.log(res);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    })();
  });
};

// 채팅 메세지 조회
export const chatHistory = (roomNo) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await requestData(`/chat/room/${roomNo}`, 'GET'); // roomNo 사용
        resolve(res); // 조회된 게시글 목록 반환
        console.log(res);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    })();
  });
};



//메세지 전송
export const sendMessage = async (form) => {
  try {
    const response = await apiRequest('/chat/message', 'POST', form);
    return response;
  } catch (error) {
    handleApiError(error);
  }
};

const handleApiError = (error) => {
  console.error('API 요청 중 오류 발생:', error);
  if (error.response && error.response.data && error.response.data.errors) {
    throw error.response.data.errors;
  }
  throw new Error('API 요청에 문제가 발생했습니다.');
};
