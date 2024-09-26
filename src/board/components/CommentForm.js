import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import UserInfoContext from '../../commons/contexts/UserInfoContext';
import { useTranslation } from 'react-i18next';

// Styled Components
const FormContainer = styled.form`
  margin: 20px 0 30px;
`;

const CommenterInfo = styled.div`
  display: flex;
  margin-bottom: 5px;

  label {
    margin-right: 10px;
  }

  input {
    width: 120px;
    margin-top: 30px;
    font-size: 12px !important;
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

const CommentContent = styled.div`
  display: flex;
  height: 100px;

  textarea {
    flex-grow: 1;
    border: 1px solid #d5d5d5;
    padding: 10px;
    resize: none;
  }

  button {
    width: 100px;
    background: #30b1e3;
    color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 1.15rem;
    margin-left: 10px;

    &:hover {
      background-color: #27a7d9;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;

const CommentForm = ({ form, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  return (
    <FormContainer onSubmit={onSubmit} autoComplete="off">
      <CommenterInfo>
        <label>작성자:</label>
        {form?.commenter}
      </CommenterInfo>
      <CommentContent>
        <textarea
          name="content"
          placeholder="댓글을 입력해주세요"
          value={form?.content}
          onChange={onChange}
        />
        <button type="submit">{t('작성하기')}</button>
      </CommentContent>
      {errors?.content && <ErrorMessage>{errors.content.join(', ')}</ErrorMessage>}
    </FormContainer>
  );
};

export default React.memo(CommentForm);
