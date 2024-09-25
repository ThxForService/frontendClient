'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook } from 'react-content-loader';
import ListForm from './ListForm';
import { OuterBox } from '@/commons/layouts/StyledWrapper';


// uniqueKey를 추가하여 서버와 클라이언트에서 동일한 ID 값 사용
const MyFacebookLoader = () => <Facebook uniqueKey="my-loader" />;

const ItemList = ({ items, loading }) => {
  return loading ? (
    <ul>
      <OuterBox>
      <ListForm items={items} />
      </OuterBox>
    </ul>
  ) : (
    [...new Array(5)].map((_, i) => <MyFacebookLoader key={`loader_${i}`} />) // index를 명시적으로 사용하여 고유한 key 할당
  );
};

export default React.memo(ItemList);
