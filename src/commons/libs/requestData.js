import apiRequest from './apiRequest';

const requestData = (url, method = 'GET') =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        // apiRequest 호출 부분 수정
        const res = await apiRequest(url, method);
        
        // 상태 코드 체크
        if (res.status < 200 || res.status >= 400) {
          throw new Error(`Error: ${res.data.message || 'Unknown error'}`);
        }

        // 성공적으로 응답을 받으면 데이터 반환
        resolve(res.data.data);
      } catch (err) {
        // 오류 처리
        console.error('API 요청 오류:', err);
        reject(new Error('API 요청 중 오류가 발생했습니다.')); // 사용자에게 적절한 오류 메시지 제공
      }
    })();
  });

export default requestData;

// import apiRequest from './apiRequest';

// const requestData = (url, method = 'GET') =>
//   new Promise((resolve, reject) => {
//     (async () => {
//       try {
//         const res = await apiRequest(url, method);
//         if (res.status < 200 || res.status >= 400) {
//           reject(res.data);
//           return;
//         }

//         resolve(res.data.data);
//       } catch (err) {
//         reject(err);
//       }
//     })();
//   });

// export default requestData;
