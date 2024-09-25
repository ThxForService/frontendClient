import apiRequest from '../../commons/libs/apiRequest';
import cookies from 'react-cookies';
import { getFiles } from '@/commons/libs/apiFile';

// 로그인 처리
export const apiLogin = (form) =>
  new Promise((resolve, reject) => {
    cookies.remove('token', { path: '/' });
    apiRequest('/member/account/token', 'POST', form)
      .then((res) => {
        if (!res.data.success) {
          // 검증 실패, 로그인 실패
          reject(res.data);
          return;
        }

        // 로그인 성공시 - 토큰 데이터
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });

// 로그인한 회원정보 조회
export const apiUser = () =>
  new Promise((resolve, reject) => {
    apiRequest('/member/account')
      .then((res) => {
        if (res.status !== 200) {
          reject(res.data);
          cookies.remove('token', { path: '/' });
          return;
        }

        const user = res.data.data;

        (async () => {
          try {
            const files = await getFiles(user.gid);
            if (files && files.length > 0) {
              const file = files[0];
              const profileImage = `${file.thumbUrl}?seq=${file.seq}&width=300&height=400`;
              user.profileImage = profileImage;
            }
          } catch (err) {
            console.error(err);
          }
        })();

        resolve(user);
      })
      .catch((err) => {
        cookies.remove('token', { path: '/' });
        reject(err);
      });
  });
