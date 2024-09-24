import { save } from 'react-cookies';
import requestData from '../../commons/libs/requestData';
import saveProcess from '@/commons/libs/saveProcess';
import apiRequest from '@/commons/libs/apiRequest';

// 회원정보 수정
export const updateProfile2 = (form) =>
  saveProcess('/member/mypage/profile', 'PATCH', form);


export const updateProfile = async (form) => {
    try {
      const response = await apiRequest('/member/mypage/profile', 'PATCH', form);
      return response;
    } catch (error) {
      handleApiError(error);
    }
  };
