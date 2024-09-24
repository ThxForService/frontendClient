import { save } from 'react-cookies';
import requestData from '../../commons/libs/requestData';


// 회원정보 수정
export const updateProfile = (form) =>
    saveProcess('/mypage/profile', 'PATCH', form);