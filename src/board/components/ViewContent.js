import React from 'react';
import { getUserStates } from '@/commons/contexts/UserInfoContext';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { StyledButton } from '@/commons/components/StyledButton';

const Container = styled.div`
  margin: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #666;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const Separator = styled.span`
  color: #cccccc;
  font-size: 0.6em;
  line-height: 1;
  position: relative;
  top: -1.8px;
  padding: 0 1em;
`;

const ViewContent = ({ data, onDelete }) => {
  const { userInfo } = getUserStates();
  const { board } = data;
  const router = useRouter();
  const isAuthor = userInfo && userInfo.username === data.poster;

  return (
    <Container>
      <h2>{data.subject}</h2>
      <PostInfo>
        <span>
          작성자: <strong>{data.poster}</strong>
          {data.member && <span> ({data.member.email})</span>}
        </span>
        <span>
          <Separator>IP: {data.ip}</Separator>
          <Separator>조회수: {data.viewCount.toLocaleString()}</Separator>
          <Separator>작성일자: {data.createdAt}</Separator>
        </span>
      </PostInfo>
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
      <ButtonGroup>
        {data.showList && (
          <StyledButton variant="primary" size="medium" onClick={() => router.push('/board/list/' + board.bid)}>
            글목록
          </StyledButton>
        )}

        {isAuthor && data.showEdit && (
          <>
            <StyledButton variant="primary" size="medium" onClick={() => router.push('/board/write/' + board.bid)}>
              글쓰기
            </StyledButton>
            <StyledButton variant="primary" size="medium" onClick={() => router.push('/board/update/' + data.seq)}>
              글수정
            </StyledButton>
          </>
        )}

        {isAuthor && data.showDelete && (
          <StyledButton variant="primary" size="medium" onClick={() => onDelete(data.seq)}>
            글삭제
          </StyledButton>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default ViewContent;
