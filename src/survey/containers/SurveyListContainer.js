// 'use client';
// import React, { useEffect, useState, useCallback } from 'react';
// import { getList } from '../apis/apiInfo';
// import ListItems from '../components/ListItems';
// import Pagination from '@/commons/components/Pagination';
// import Loading from '@/commons/components/Loading';

// const SurveyListContainer = ({ searchParams }) => {
//   const [items, setItems] = useState([]);
//   const [pagination, setPagination] = useState({});
//   const [page, setPage] = useState(searchParams?.page ? Number(searchParams.page) : 0); // 안전한 페이지 초기화
//   const [loading, setLoading] = useState(true); // 로딩 상태 추가
//   const [error, setError] = useState(null); // 에러 상태 추가

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // 데이터 요청 시작 시 로딩 상태 설정
//       setError(null); // 에러 초기화
//       try {
//         const data = await getList(page);
//         if (data) {
//           setItems(data.items);
//           setPagination(data.pagination);
//         } else {
//           setItems([]); // 데이터가 없을 경우 빈 배열 설정
//           setPagination({});
//         }
//       } catch (err) {
//         console.error(err);
//         setError('데이터를 가져오는 데 오류가 발생했습니다.'); // 에러 메시지 설정
//       } finally {
//         setLoading(false); // 데이터 요청 완료 후 로딩 상태 해제
//       }
//     };

//     fetchData(); // 데이터 가져오기
//   }, [page]);

//   // 로딩 중일 때 로딩 컴포넌트 표시
//   if (loading) {
//     return <Loading />;
//   }

//   // 에러 발생 시 에러 메시지 표시
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // 아이템이 없는 경우
//   if (!items || items.length === 0) {
//     return <div>아이템이 없습니다.</div>; // 아이템이 없을 때 메시지
//   }

//   return (
//     <>
//       <ListItems items={items} />
//       <Pagination pagination={pagination} onClick={setPage} />
//     </>
//   );
// };

// export default React.memo(SurveyListContainer);

'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { getList } from '@/survey/apis/apiInfo';
import ListItems from '../components/ListItems';
import Pagination from '@/commons/components/Pagination';
import Loading from '@/commons/components/Loading';

const SurveyListContainer = ({ searchParams }) => {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(searchParams?.page ?? 1);

  useEffect(() => {
    (async () => {
      try {

        const data = await getList();

        if (data) {
          setItems(data.items);
          setPagination(data.pagination);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page]);

  if (!items || items.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <ListItems items={items} />
      <Pagination pagination={pagination} onClick={setPage} />
    </>
  );
};

export default React.memo(SurveyListContainer);
