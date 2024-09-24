import { save } from 'react-cookies';
import requestData from '../../commons/libs/requestData';
import saveProcess from '@/commons/libs/saveProcess';

// 회원정보 수정
export const updateProfile = (form) =>
  saveProcess('/member/mypage/profile', 'PATCH', form);
