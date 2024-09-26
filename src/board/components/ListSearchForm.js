import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ImSearch } from 'react-icons/im';

// 공통적인 높이와 스타일 적용
const commonStyles = `
  height: 40px; /* 모든 요소의 높이를 동일하게 설정 */
  padding: 8px 12px; /* 동일한 내부 여백 */
  font-size: 14px; /* 글꼴 크기 통일 */
  border: 1.5px solid #e1e1e1;
  box-sizing: border-box; /* padding, border를 포함하여 크기 계산 */
`;

// 검색 폼 컨테이너
const TopBox = styled.div`
  display: flex; /* 가로로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-bottom: 20px; /* 아래쪽 여백 */
`;

// 셀렉트 박스 스타일
const Select = styled.select`
  ${commonStyles} /* 공통 스타일 적용 */
  border-right: none;
  background-color: #fff;
  color: #777;
`;

// 입력 필드 스타일
const Input = styled.input`
  ${commonStyles} /* 공통 스타일 적용 */
  flex-grow: 1; /* 가능한 공간을 모두 차지 */
  border-left: none;
  border-right: none;
  outline: none; /* 포커스 시 외곽선 제거 */
`;

// 검색 버튼 스타일
const Button = styled.button`
  ${commonStyles} /* 공통 스타일 적용 */
  width: 70px;
  background-color: #00a8e8;
  color: white;
  border-left: none;
  cursor: pointer; /* 마우스 포인터 변경 */
  transition: background-color 0.3s ease; /* 배경색 전환 효과 */

  &:hover {
    background-color: #27a7d9;
  }

  &:active {
    background-color: #0056b3;
  }
`;

const ListSearchForm = ({ search, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <TopBox>
        <Select name="sopt" value={search?.sopt} onChange={onChange}>
          <option value="ALL">{t('통합검색')}</option>
          <option value="SUBJECT">{t('제목')}</option>
          <option value="CONTENT">{t('내용')}</option>
          <option value="SUBJECT_CONTENT">{t('제목+내용')}</option>
          <option value="NAME">{t('이름')}</option>
        </Select>
        <Input
          type="text"
          name="skey"
          value={search?.skey}
          onChange={onChange}
          placeholder={t('검색어를_입력하세요')}
        />
        <Button type="submit">
          <ImSearch />
        </Button>
      </TopBox>
    </form>
  );
};

export default React.memo(ListSearchForm);
