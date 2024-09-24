'use client';
import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD
import UserInfoContext from "@/commons/contexts/UserInfoContext";
import { updateProfile } from "../apis/apiMypage";
import ProfileForm from "../components/ProfileForm";
=======
import UserInfoContext from '@/commons/contexts/UserInfoContext';
import { updateProfile } from '../apis/apiMypage';
import ProfileForm from '../components/ProfileForm';
import ProfileImage from '../components/ProfileImage';
>>>>>>> master

const MypageProfileContainer = () => {
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);

<<<<<<< HEAD
  const initialForm = { ...userInfo };  // userInfo의 객체 복사
  delete initialForm.password;  // 비밀번호 필드를 삭제
=======
  const initialForm = userInfo;
  delete initialForm.password;
>>>>>>> master

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();
  const router = useRouter();

  // 입력값 변경 처리
  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  // 프로필 업데이트 제출 처리
  const onSubmit = useCallback(
<<<<<<< HEAD
    async (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      // 필수 항목 검증
      const requiredFields = {
        username: t('회원명을_입력하세요'),
      };

      // 필수 필드 체크
      Object.keys(requiredFields).forEach((field) => {
        if (!form[field]) {
          _errors[field] = requiredFields[field];
          hasErrors = true;
        }
      });

      // 비밀번호 검증 (선택 사항)
      if (form.password && form.password !== form.confirmPassword) {
        _errors.confirmPassword = t('비밀번호가_일치하지_않습니다');
        hasErrors = true;
      }

      if (hasErrors) {
        setErrors(_errors);
        return;
      }

      try {
        const updatedUser = await updateProfile(form);  // 프로필 업데이트 API 호출

        setUserInfo(updatedUser);  // 컨텍스트 내 사용자 정보 업데이트
        router.push('/mypage');  // 성공 후 마이페이지로 리다이렉트
      } catch (err) {
        setErrors({ apiError: t('프로필_업데이트_실패') });
        console.error('Profile update failed:', err);
      }
    },
    [form, setUserInfo, router, t]
  );

  return (
    <ProfileForm
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(MypageProfileContainer);

 

// import React, { useState, useCallback, useContext } from "react";
// import { useTranslation } from 'react-i18next';
// import { useRouter } from 'next/navigation'; 
// import UserInfoContext from "@/commons/contexts/UserInfoContext";
// import { updateProfile } from "../apis/apiMypage";
// import ProfileForm from "../components/ProfileForm";

// const MypageProfileContainer = () => {
//     const {
//         states: { userInfo },
//         actions: { setUserInfo },
//       } = useContext(UserInfoContext);

//       const initialForm = userInfo;
//     delete initialForm.password;

//     const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});

//   const { t } = useTranslation();
//   const router = useRouter(); 

//   const onChange = useCallback((e) => {
//     setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
//   }, []);

//   const onSubmit = useCallback(
//     (e) => {
//         e.preventDefault();
  
//         const _errors = {};
//         let hasErrors = false;
        
//         /**
//        * 필수항목 검증
//        * 1. 회원명(이름)
//        * 2. 비밀번호(선택), 있는 경우 confirmPassword(필수), password, confirmPassword 일치여부
//        */
//         const requiredFields = {
//             username: t('회원명을_입력하세요'),
//           };

        
//     }

//   );
=======
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /**
       * 필수항목 검증
       * 1. 회원명(이름)
       * 2. 비밀번호(선택), 있는 경우 confirmPassword(필수), password, confirmPassword 일치여부
       */
      const requiredFields = {
        username: t('회원명을_입력하세요'),
      };
      if (form?.password?.trim()) {
        requiredFields.confirmPassword = t('비밀번호를_확인하세요.');
      }

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] ?? [];

          _errors[field].push(message);
          hasErrors = true;
        }
      }

      // 비밀번호가 입력된 경우 비밀번호 확인 일치여부 체크
      if (!hasErrors && form.password !== form.confirmPassword) {
        _errors.confirmPassword = _errors.confirmPassword ?? [];
        _errors.confirmPassword.push(t('비밀번호가_일치하지_않습니다.'));
        hasErrors = true;
      }

      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      // 회원정보 수정 처리 S
      (async () => {
        try {
          const res = await updateProfile(form);
          console.log('Res', res);
          // 회원 정보 수정 완료 후 -> context api 쪽 정보 업데이트
          // form 초기화, 마이페이지 메인으로 이동
          setUserInfo(res);
          const newForm = res;
          delete newForm.password;
          setForm(newForm);

          router.replace('/mypage');
        } catch (err) {
          console.error(err);
          const messages = err.message.global
            ? err.message
            : { global: [err.message] };
          setErrors(messages);
        }
      })();
      // 회원정보 수정 처리 E
    },
    [t, form, router, setUserInfo],
  );

  const fileUploadCallback = useCallback(
    (files) => {
      if (files.length === 0) {
        return;
      }
>>>>>>> master

      const file = files[0];
      const profileImage = `${file.thumbUrl}?seq=${file.seq}&width=300&height=400`;
      setForm((form) => ({ ...form, profileImage }));
      setUserInfo((userInfo) => ({ ...userInfo, profileImage: files[0] }));
    },
    [setUserInfo],
  );

<<<<<<< HEAD

// }

// export default React.memo(MypageProfileContainer);
=======
  return (
    <>
      <ProfileImage
        gid={form?.gid}
        fileUploadCallback={fileUploadCallback}
        profileImage={form?.profileImage}
      />
      <ProfileForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
};

export default React.memo(MypageProfileContainer);
>>>>>>> master
