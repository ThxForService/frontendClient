'use client';
import React from 'react';
import MyPosts from '../components/MyPosts';

const BoardContainer = () => {
  return <MyPosts />;
};

export default React.memo(BoardContainer);
