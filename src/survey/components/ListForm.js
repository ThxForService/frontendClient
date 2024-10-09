import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/theme/colors';
import Image from 'next/image';
import surveyType from '../constants/surveyType';

const ListWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  padding: 10px;
`;

// ListContainer 스타일 정의
const ListContainer = styled.div`
  width: 100%; /* 가로 폭을 100%로 설정하여 부모 컨테이너에 맞춤 */
  max-width: 1800px; /* 최대 폭은 1000px */
  min-width: 1500px; /* 최소 폭은 300px */
  overflow: hidden; /* 자식 요소의 테두리를 넘치지 않도록 */
  margin: 20px 0; /* 위아래 마진 추가 */

  background-color: #ffffff; /* 배경색 */
`;

// ListHeader 스타일 정의
const ListHeader = styled.div`
  padding: 10px; /* 패딩 */
  font-weight: bold; /* 글자 두껍게 */
  font-size: 24px; /* 글자 크기 */
  font-weight: 900;
  color: ${colors.darkgray}; /* 글자 색상 */
  text-align: center; /* 중앙 정렬 */
  margin-bottom: 50px;
`;

const BannerList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 자동으로 배치 */
  justify-content: flex-start;
  list-style: none; /* 기본 리스트 스타일 제거 */
  padding: 0; /* 패딩 제거 */
  margin: 0; /* 마진 제거 */
`;

// BannerItem 스타일 정의
const BannerItem = styled.li`
  display: flex;
  flex-direction: column; /* 이미지를 위에 두고 텍스트를 아래에 배치하기 위해 세로 정렬 */
  align-items: flex-start; /* 가로 중앙 정렬 */
  padding: 15px 20px; /* 패딩 */
  border-bottom: 2px solid #eee; /* 항목 아래쪽 테두리 */
  font-size: 18px; /* 글자 크기 */
  color: #333; /* 글자 색상 */
  transition: background-color 0.3s; /* 배경색 변화 애니메이션 */
  cursor: pointer; /* 클릭 가능 표시 */
  width: calc(33.33% - 20px); /* 한 줄에 3개 배치, 마진을 고려하여 너비 설정 */

  &:hover {
    
  }


  img {
  
    margin-bottom: 10px; /* 이미지와 텍스트 간격 */
    border-radius: 5px; /* 이미지 둥글게 처리 */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  &:hover img {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
  }

  a {
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: #000; /* 링크 색상 */
    font-weight: 500; /* 링크 글자 두께 */
    text-align: center; /* 텍스트 중앙 정렬 */
    width: 100%; /* 전체 너비를 사용하여 클릭 가능 영역 확대 */
  }

  &:hover a {
    font-weight: 600; /* 링크 글자 두께 */
  }
`;

// ListForm 컴포넌트
const ListForm = ({ items }) => {
  return (
    <ListWrapper>
      <ListContainer>
        <ListHeader>자가 진단</ListHeader> {/* 게시판 헤더 */}
        <BannerList>
          {items.length > 0 ? (
            items.map((item, index) => (
              <BannerItem key={`${item[0]}_${item[1]}_${index}`}>
                <Link href={`/survey/${item[0]}`}>
                  <Image
                    src={`/images/survey/${item[0]}.png`} // 이미지 경로
                    alt={item[1]} // 대체 텍스트
                    width={400} // 원하는 너비
                    height={400} // 원하는 높이
                    style={{ marginRight: '15px', borderRadius: '5px' }} // 스타일 추가
                  />
                  {/* 이미지 경로 수정 */}
                  <div style={{ textAlign: 'center', whiteSpace: 'normal' }}>
                    {surveyType[item[0]]}{' '}
                    {/* 블록 요소로 감싸고 줄바꿈 가능하게 설정 */}
                  </div>
                </Link>
              </BannerItem>
            ))
          ) : (
            <BannerItem>No items available.</BannerItem>
          )}
        </BannerList>
      </ListContainer>
    </ListWrapper>
  );
};

export default React.memo(ListForm);
