import React from 'react';
import { getUserStates } from '@/commons/contexts/UserInfoContext';
import { useRouter } from 'next/navigation';

const ViewContent = ({ data, onDelete }) => {
  const { userInfo } = getUserStates(); 
  const { board } = data;
  const router = useRouter();

  const isAuthor = userInfo && userInfo.username === data.poster;

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
          <a href={'/board/list/' + board.bid}>
            <button type="button">글목록</button>
          </a>
        )}

        {isAuthor && data.showEdit && (
          <>
            <a href={'/board/write/' + board.bid}>
              <button type="button">글쓰기</button>
            </a>
            <a href={'/board/update/' + data.seq}>
              <button type="button">글수정</button>
            </a>
          </>
        )}

        {isAuthor && data.showDelete && (
          <button type="button" onClick={() => onDelete(data.seq)}>
            글삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewContent;
