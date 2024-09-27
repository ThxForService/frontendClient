import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  margin-top: 20px;
`;

const CommentItem = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background: #f8f8f8;
`;

const CommentHeader = styled.p`
  margin: 0;
  font-weight: bold;

  span {
    font-weight: normal;
    color: #666;
    font-size: 0.85em;
    margin-left: 5px;
  }
`;

const CommentContent = styled.p`
  margin: 5px 0;
  color: #333;
`;

const NoCommentsMessage = styled.h1`
  text-align: center;
  color: #888;
`;

const CommentItems = ({ items }) => {
  if (!items || items.length === 0) {
    return <NoCommentsMessage>댓글이 없습니다.</NoCommentsMessage>;
  }

  return (
    <Container>
      {items.map(comment => (
        <CommentItem key={comment.seq}>
          <CommentHeader>
            <strong>{comment.commenter}</strong>
            <span>({new Date(comment.createdAt).toLocaleString()})</span>
          </CommentHeader>
          <CommentContent>{comment.content}</CommentContent>
        </CommentItem>
      ))}
    </Container>
  );
};

export default React.memo(CommentItems);
