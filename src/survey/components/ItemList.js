'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook } from 'react-content-loader';

// uniqueKey를 추가하여 서버와 클라이언트에서 동일한 ID 값 사용
const MyFacebookLoader = () => <Facebook uniqueKey="my-loader" />;

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
    [...new Array(5)].map((_, i) => <MyFacebookLoader key={`loader_${i}`} />) // index를 명시적으로 사용하여 고유한 key 할당
  );
};

export default React.memo(ItemList);

// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import { Facebook } from 'react-content-loader';
// const MyFacebookLoader = () => <Facebook />;

// const ItemList = ({ items, loading }) => {
//   return loading ? (
//     <ul>
//       {items.map((item, i) => (
//         <li key={`${item[0]}_${item[1]}_${i}`}>
//           <Link href={`/survey/${item[0]}`}>{item[1]}</Link>
//         </li>
//       ))}
//     </ul>
//   ) : (
//     [...new Array(5)].map((i) => <MyFacebookLoader key={`loader_${i}`} />)
//   );
// };

// export default React.memo(ItemList);
