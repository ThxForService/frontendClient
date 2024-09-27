'use client';
import React, { useEffect, useState } from 'react';
import { getAnswers } from '../apis/apiAnswer';
import { useRouter } from 'next/navigation';
import AnswerListForm from '../components/AnswerListForm'; // AnswerListForm을 import
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const MySurveyAnswerContainer = ({ searchParams }) => {
  const { userInfo } = getUserStates();
  const [items, setItems] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true); // 초기 상태를 true로 설정

  useEffect(() => {
    (async () => {
      try {
        const response = await getAnswers({ searchParams, userId: userInfo.userId }); // searchParams 필요 시 여기에 정의
        setItems(data.items); // 수정된 부분
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // 데이터 가져오기 완료 후 loading 상태 변경
      }
    })();
  }, [searchParams, userInfo]);

  // const onChangePage = useCallback((p) => {
  //   setSearch((search) => ({ ...search, page: p }));
  //   window.location.hash = '#root';
  // }, []);

  return <AnswerListForm dataList={items} loading={loading} />;
};

export default React.memo(MySurveyAnswerContainer);
