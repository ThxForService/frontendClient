'use client';
import React, { useLayoutEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
const ListContainer = ({ bid }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();
  useLayoutEffect(() => {
    setMenuCode('board');
    setSubMenuCode('list');
  }, [setSubMenuCode, setMenuCode]);

  return <h1>게시판 목록</h1>;
};

export default React.memo(ListContainer);
