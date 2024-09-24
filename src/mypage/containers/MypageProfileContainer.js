import React, { useState, useCallback, useContext } from "react";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation'; 
import UserInfoContext from "@/commons/contexts/UserInfoContext";
import { updateProfile } from "../apis/apiMypage";
import ProfileForm from "../components/ProfileForm";

const MypageProfileContainer = () => {
    const {
        states: { userInfo },
        actions: { setUserInfo },
      } = useContext(UserInfoContext);

      const initialForm = userInfo;
    delete initialForm.password;

    const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const router = useRouter(); 

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
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

        
    }

  );



}

export default React.memo(MypageProfileContainer);