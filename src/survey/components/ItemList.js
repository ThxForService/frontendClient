'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook } from 'react-content-loader';
const MyFacebookLoader = () => <Facebook />;

const ItemList = ({ items, loading }) => {
  return loading ? (
    <ul>
      {items.map((item, i) => (
        <li key={`${item[0]}_${item[1]}_${i}`}>
          <Link href={`/survey/${item[0]}`}>{item[1]}</Link>
        </li>
      ))}
    </ul>
  ) : (
    [...new Array(5)].map((i) => <MyFacebookLoader key={`loader_${i}`} />)
  );
};

export default React.memo(ItemList);
