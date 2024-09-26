import React from 'react';

const CommentItems = ({ items }) => {
  if (!items || items.length === 0) {
    return <h1>댓글이 없습니다.</h1>;
  }

  return (
    <div>
      {items.map(comment => (
        <div key={comment.seq}>
          <p><strong>{comment.commenter}</strong> <span>({new Date(comment.createdAt).toLocaleString()})</span></p>
          <p>{comment.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default React.memo(CommentItems);
