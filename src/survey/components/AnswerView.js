import React from 'react';

const AnswerView = ({ data }) => {
  const {
    result: { title, range, content },
  } = data;

  return (
    <>
      <div>{title}</div>
      <div>{range}</div>
      <div>{content}</div>
    </>
  );
};

export default React.memo(AnswerView);
