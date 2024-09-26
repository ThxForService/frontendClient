import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImSearch } from 'react-icons/im';

const ListSearchForm = ({ search, onChange, onSubmit }) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <div className="search">
        <select name="sopt" value={search?.sopt} onChange={onChange}>
          <option value="ALL">{t('통합검색')}</option>
          <option value="SUBJECT">{t('제목')}</option>
          <option value="CONTENT">{t('내용')}</option>
          <option value="SUBJECT_CONTENT">{t('제목+내용')}</option>
          <option value="NAME">{t('이름')}</option>
        </select>
        <input
          type="text"
          name="skey"
          value={search?.skey}
          onChange={onChange}
          placeholder={t('검색어를_입력하세요')}
        />
        <button type="submit">
          <ImSearch />
        </button>
      </div>
    </form>
  );
};

export default React.memo(ListSearchForm);
