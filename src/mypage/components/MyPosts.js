// MyPosts.js
import React from 'react';
import List from '@/board/components/List';
import Pagination from '@/commons/components/Pagination';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;



const MyPosts = ({ items, search, onChange, onSubmit, onRowClick, pagination }) => {
  return (
    <Wrapper>
      <Title>내가 쓴 게시글</Title>
      
      {/* 검색 폼 */}
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="search"
          value={search.search || ''}
          onChange={onChange}
          placeholder="검색어를 입력하세요"
        />
        <SearchButton type="submit">검색</SearchButton>
      </SearchForm>
      
      {/* 게시글 목록 */}
      
        <List
          items={items}             
          onRowClick={onRowClick}   
        />
      

      {/* 페이지네이션 */}
      {pagination && (
        <PaginationContainer>
          <Pagination pagination={pagination} onClick={onRowClick} />
        </PaginationContainer>
      )}
    </Wrapper>
  );
};


export default React.memo(MyPosts);
