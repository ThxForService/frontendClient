import React, { useContext } from 'react';
import UserInfoContext from '../../commons/contexts/UserInfoContext';
import { useTranslation } from 'react-i18next';

const CommentForm = ({ form, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <div>
        <div>
          <input
            type="text"
            name="commenter"
            placeholder={t('작성자')}
            value={form?.commenter}
            onChange={onChange}
          />
          {errors?.commenter && (
            <div style={{ color: 'red' }}>{errors.commenter.join(', ')}</div>
          )}
        
        </div>
        <textarea
          name="content"
          placeholder="댓글을 입력해주세요"
          value={form?.content}
          onChange={onChange}
        />
        {errors?.content && (
          <div style={{ color: 'red' }}>{errors.content.join(', ')}</div>
        )}

        <button type="submit">{t('작성하기')}</button>
      </div>
    </form>
  );
};

export default React.memo(CommentForm);
