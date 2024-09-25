import requestData from "@/commons/libs/requestData";
import apiRequest from "@/commons/libs/apiRequest";
import { Cookies } from "react-cookie";

export const getProfessors = (skey) =>
    requestData(`/member/account/professors?skey=${skey?.trim()}`);

export const apiGet = (memberSeq) => requestData(`/member/account/${memberSeq}`);

// 인증(로그인)한 회원 정보 조회
export const getMemberInfo = () =>
    new Promise((resolve, reject) => {
      // GET 요청으로 로그인한 회원 정보 조회
      apiRequest('/member/account', 'GET')
        .then((res) => {
          resolve(res.data); // 요청 성공 시 회원 정보 반환
        })
        .catch((err) => {
          cookies.remove('token', { path: '/' }); // 에러 발생 시 토큰 제거
          reject(err); // 요청 실패 시 에러 반환
        });
    });

    
export const getmemberList = () =>
    new Promise((resolve, reject) => {
      // GET 요청으로 랜덤 상담원 정보 조회
      apiRequest('/member/account/list', 'GET')
        .then((res) => {
          resolve(res.data); // 요청 성공 시 상담원 정보 반환
        })
        .catch((err) => {
          reject(err); // 요청 실패 시 에러 반환
        });
    });
  
// 상담원 랜덤 조회
export const getCounselor = () =>
    new Promise((resolve, reject) => {
      // GET 요청으로 랜덤 상담원 정보 조회
      apiRequest('/member/account/counselors', 'GET')
        .then((res) => {
          resolve(res.data); // 요청 성공 시 상담원 정보 반환
        })
        .catch((err) => {
          reject(err); // 요청 실패 시 에러 반환
        });
    });
