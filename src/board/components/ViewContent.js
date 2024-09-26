import React from 'react';

const ViewContent = ({ data, onDelete }) => {
  const { board } = data;

  return (
    <div>
      <h2>{data.subject}</h2>
      <div>
        <span>작성자: {data.poster}</span>
        {data.member && <span> ({data.member.email})</span>}
      </div>
      <div>
        <span>IP: {data.ip}</span>
        <span> 조회수: {data.viewCount.toLocaleString()}</span>
        <span> 작성일자: {data.createdAt}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />

      {data?.attachFiles?.length > 0 && (
        <ul>
          <li>첨부파일 목록:</li>
          {data.attachFiles.map(({ fileDownloadUrl, fileName }) => (
            <li key={fileDownloadUrl}>
              <a href={fileDownloadUrl}>{fileName}</a>
            </li>
          ))}
        </ul>
      )}
      <div>
        {data.showList && (
          <button onClick={() => window.location.href = '/board/list/' + board.bid}>
            글목록
          </button>
        )}

        {data.showEdit && (
          <>
            <button onClick={() => window.location.href = '/board/write/' + board.bid}>
              글쓰기
            </button>
            <button onClick={() => window.location.href = '/board/update/' + data.seq}>
              글수정
            </button>
          </>
        )}
        {data.showDelete && (
          <button type="button" onClick={() => onDelete(data.seq)}>
            글삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewContent;
