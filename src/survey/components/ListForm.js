import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/theme/colors';

// ListWrapper: 화면 중앙에 배치하는 컨테이너
const ListWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  padding: 20px;
`;

// ListContainer 스타일 정의 (게시판 헤더 포함)
// max-width: 최대 1000px, min-width: 최소 300px, width: 100%로 설정
const ListContainer = styled.div`
  width: 100%; /* 가로 폭을 100%로 설정하여 부모 컨테이너에 맞춤 */
  max-width: 1000px; /* 최대 폭은 1000px */
  min-width: 300px; /* 최소 폭은 300px */
  border: 1px solid #ddd; /* 테두리 색상 */
  border-radius: 10px; /* 둥근 모서리 */
  overflow: hidden; /* 자식 요소의 테두리를 넘치지 않도록 */
  margin: 20px 0; /* 위아래 마진 추가 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  background-color: #ffffff; /* 배경색 */
`;

// ListHeader 스타일 정의
const ListHeader = styled.div`
  background-color: ${colors.border}; /* 헤더 배경 색상 */
  padding: 20px; /* 패딩 */
  font-weight: bold; /* 글자 두껍게 */
  font-size: 24px; /* 글자 크기 */
  color: ${colors.darkgray}; /* 글자 색상 */
  text-align: center; /* 중앙 정렬 */
  border-bottom: 4px solid ${colors.darkgray}; /* 아래쪽 테두리 추가 */
`;

// ListItem 스타일 정의
const ListItem = styled.li`
  padding: 15px 20px; /* 패딩 */
  border-bottom: 1px solid #eee; /* 항목 아래쪽 테두리 */
  font-size: 18px; /* 글자 크기 */
  color: #333; /* 글자 색상 */
  transition: background-color 0.3s; /* 배경색 변화 애니메이션 */

  &:hover {
    background-color: #f5faff; /* 마우스를 올렸을 때 배경색 변화 */
  }

  &:last-child {
    border-bottom: none; /* 마지막 항목의 아래쪽 테두리 제거 */
  }

  a {
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: #4a90e2; /* 링크 색상 */
    font-weight: 500; /* 링크 글자 두께 */

    &:hover {
      text-decoration: underline; /* 링크에 마우스를 올렸을 때 밑줄 */
    }
  }
`;

// ListForm 컴포넌트
const ListForm = ({ items }) => {
  return (
    <ListWrapper>
      <ListContainer>
        <ListHeader>자가 진단</ListHeader> {/* 게시판 헤더 */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.length > 0 ? (
            items.map((item, index) => (
              <ListItem key={`${item[0]}_${item[1]}_${index}`}>
                <Link href={`/survey/${item[0]}`}>{item[1]}</Link>
              </ListItem>
            ))
          ) : (
            <ListItem>No items available.</ListItem>
          )}
        </ul>
      </ListContainer>
    </ListWrapper>
  );
};

export default React.memo(ListForm);

// import React from 'react';
// import styled from 'styled-components';
// import Link from 'next/link';
// import { colors } from '@/theme/colors';

// // ListContainer 스타일 정의 (게시판 헤더 포함)
// const ListContainer = styled.div`
//   width: 1000px;
//   border: 1px solid #ddd; /* 테두리 색상 */
//   border-radius: 10px; /* 둥근 모서리 */
//   overflow: hidden; /* 자식 요소의 테두리를 넘치지 않도록 */
//   margin: 20px 0; /* 위아래 마진 추가 */
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
//   background-color: #ffffff; /* 배경색 */
// `;

// // ListHeader 스타일 정의
// const ListHeader = styled.div`
//   background-color: ${colors.border}; /* 헤더 배경 색상 */
//   padding: 20px; /* 패딩 */
//   font-weight: bold; /* 글자 두껍게 */
//   font-size: 24px; /* 글자 크기 */
//   color: ${colors.darkgray}; /* 글자 색상 */
//   text-align: center; /* 중앙 정렬 */
//   border-bottom: 4px solid ${colors.darkgray}; /* 아래쪽 테두리 추가 */
// `;

// // ListItem 스타일 정의
// const ListItem = styled.li`
//   padding: 15px 20px; /* 패딩 */
//   border-bottom: 1px solid #eee; /* 항목 아래쪽 테두리 */
//   font-size: 18px; /* 글자 크기 */
//   color: #333; /* 글자 색상 */
//   transition: background-color 0.3s; /* 배경색 변화 애니메이션 */

//   &:hover {
//     background-color: #f5faff; /* 마우스를 올렸을 때 배경색 변화 */
//   }

//   &:last-child {
//     border-bottom: none; /* 마지막 항목의 아래쪽 테두리 제거 */
//   }

//   a {
//     text-decoration: none; /* 링크의 밑줄 제거 */
//     color: #4a90e2; /* 링크 색상 */
//     font-weight: 500; /* 링크 글자 두께 */

//     &:hover {
//       text-decoration: underline; /* 링크에 마우스를 올렸을 때 밑줄 */
//     }
//   }
// `;

// // ListForm 컴포넌트
// const ListForm = ({ items }) => {
//   return (
//     <ListContainer>
//       <ListHeader>자가 진단</ListHeader> {/* 게시판 헤더 */}
//       <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//         {items.length > 0 ? (
//           items.map((item, index) => (
//             <ListItem key={`${item[0]}_${item[1]}_${index}`}>
//               <Link href={`/survey/${item[0]}`}>{item[1]}</Link>
//             </ListItem>
//           ))
//         ) : (
//           <ListItem>No items available.</ListItem>
//         )}
//       </ul>
//     </ListContainer>
//   );
// };

// export default React.memo(ListForm);
