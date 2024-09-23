'use client';
import React, { useLayoutEffect, useEffect, useState  } from 'react';
import MainContainer from '@/main/containers/MainContainer';
import LoginContainer from '@/member/containers/LoginContainer';
import { getUserStates } from '@/commons/contexts/UserInfoContext';
import { useRouter } from 'next/navigation';


export default function Home() {
    const { isLogin } = getUserStates(); // 로그인 상태를 가져옴
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true); // 초기 로딩 상태 설정
  
    useEffect(() => {
      if (isLogin) {
        setIsLoading(false); // 로그인 상태 확인 후 로딩 종료
      } else {
        router.push('/member/login'); // 미로그인 상태이면 로그인 페이지로 리다이렉트
      }
    }, [isLogin, router]);
  
    if (isLoading) {
      return <div>Loading...</div>; // 로딩 중일 때 표시할 화면
    }
  
    return <MainContainer />; // 로그인 상태일 때 메인 컨테이너 렌더링
  }



/**
 * export default function Home({ searchParams }) {
 const { isLogin } = getUserStates();

return isLogin ? <MainContainer /> : <LoginContainer />;

 return  <MainContainer /> 
}
 *
 */

