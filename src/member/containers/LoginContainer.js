'use client';
import React, { useLayoutEffect, useState, useCallback, useEffect  } from 'react';
import cookies from 'react-cookies';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import LoginForm from '../components/LoginForm';
import { StyledWrapper } from '@/commons/layouts/StyledWrapper';
import { apiLogin, apiUser } from '../apis/apiLogin';
import { getUserActions } from '@/commons/contexts/UserInfoContext';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.png';

const LoginContainer = ({ searchParams }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('로그인'));
  }, [setMainTitle, t]);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { setIsLogin, setIsAdmin, setIsStudent, setIsCounselor, setUserInfo } =
    getUserActions();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /* 필수 항목 검증 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 필수 항목 검증 E */

      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      // 로그인 처리
      apiLogin(form)
        .then((res) => {
          const token = res.data;
          cookies.save('token', token, { path: '/' });
          (async () => {
            try {
              // 로그인 처리
              const user = await apiUser();

              setIsLogin(true); // 로그인 상태
              setUserInfo(user);

              setIsAdmin(user.authority === 'ADMIN'); // 관리자 여부
              setIsStudent(user.authority === 'STUDENT');
              setIsCounselor(user.authority === 'COUNSELOR');

              /**
               * 후속 처리 : 회원 전용 서비스 URL로 이동
               * 예) /member/login?redirectURL=로그인 이후 이동할 경로
               *
               */
              setForm({});
              const redirectURL = searchParams.redirectUrl || '/';
              router.replace(redirectURL);
            } catch (err) {
              console.error(err);
            }
          })();
        })
        .catch((err) => {
          _errors.global = _errors.global ?? [];
          _errors.global.push(err.message);
          setErrors({ ..._errors });
        });
    },
    [
      form,
      router,
      searchParams,
      setIsAdmin,
      setIsCounselor,
      setIsLogin,
      setIsStudent,
      setUserInfo,
      t,
    ],
  );

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  //km 추가부분 시작
    // 배경 클래스 상태
    const { setShowHeader, setShowFooter, setShowMainMenu } = getSomeContextActions();

    const [bgClass, setBgClass] = useState('bg1');
    useLayoutEffect(() => {
      setShowHeader(false);
      setShowFooter(false);
      setShowMainMenu(false);
    }, [setShowHeader, setShowFooter, setShowMainMenu]);
  
    /** 배경 이미지 전환 효과 스타일 */
    useEffect(() => {
      const interval = setInterval(() => {
        setBgClass((prev) => {
          if (prev === 'bg1') return 'bg2';
          if (prev === 'bg2') return 'bg3';
          if (prev === 'bg3') return 'bg4';
          if (prev === 'bg4') return 'bg5';
          if (prev === 'b5') return 'bg6';
          if (prev === 'b6') return 'bg7';
          if (prev === 'b7') return 'bg8';
          return 'bg1';
        });
      }, 4000); // 4초마다 배경 변경
  
      return () => clearInterval(interval);
    }, []);
    
  return (
    <StyledWrapper>
      <div className="outer-box">
        <div className={`background ${bgClass}`} />
        {/* 배경 이미지 애니메이션이 적용될 div */}
        <GuestOnlyContainer className="no-zoom">
          <div className="login-logobox">
            {' '}
            {/* 새로 추가한 클래스 */}

              <div className="login-header">
                <Image
                  className="hover-effect"
                  src={logo}
                  alt="로고 이미지"
                  width={100}
                  height={100}
                />
                <span className="hover-effect">당신의, 당신에 의한,</span>
                <span className="hover-effect">당신을 위한 상담합니다!</span>
              </div>
          </div>
        </GuestOnlyContainer>
      </div>

      {/* 기존의 LoginForm 컴포넌트 */}
      <LoginForm
        form={form}
        errors={errors}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </StyledWrapper>
  );
};

export default React.memo(LoginContainer);
