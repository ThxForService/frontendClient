'use client';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { boardDataList } from '@/board/apis/apiboard';
import BoardList from '@/board/components/BoardList';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

const ViewContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('게시판'));
  }, [setMainTitle, t]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await boardDataList({ page: 1, limit: 10 }); // 페이지 및 한 페이지당 게시글 수 설정
      setPosts(data);
    } catch (err) {
      setError(err);
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading posts: {error.message}</h1>;

  return (
    <div>
      <h1>게시글 목록</h1>
      <BoardList posts={posts} />
    </div>
  );
};

export default React.memo(ViewContainer);
