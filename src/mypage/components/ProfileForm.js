import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { StyledInput } from '@/commons/components/StyledInput';
import StyledMessage from '@/commons/components/StyledMessage';
import { StyledButton } from '@/commons/components/StyledButton';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBox = styled.form`
  width: 300px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 15px;
  margin: 0 auto;
  dl {
    width: 100%;
  }
  dd {
    margin-bottom: 10px;
  }

  dl + dd {
    margin-top: 2px;
  }

  dl + dl {
    margin-top: 11px;
  }
`;

const ProfileForm = ({ form, errors, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <FormBox onSubmit={onSubmit} autoComplete="off">
        <dl>
          <dt>{t('이메일')}</dt>
          <dd>{form?.email}</dd>
        </dl>
        <dl>
          <dt>{t('비밀번호')}</dt>
          <dd>
            <StyledInput
              type="password"
              name="password"
              value={form?.password}
              onChange={onChange}
            />
            {errors?.password && (
              <StyledInput color="danger" messages={errors.password} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('비밀번호_확인')}</dt>
          <dd>
            <StyledInput
              type="password"
              name="confirmPassword"
              value={form?.confirmPassword}
              onChange={onChange}
            />
            {errors?.confirmPassword && (
              <StyledMessage color="danger" messages={errors.confirmPassword} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('이름')}</dt>
          <dd>
            <StyledInput
              type="text"
              name="userName"
              value={form?.userName}
              onChange={onChange}
            />
            {errors?.userName && (
              <StyledMessage color="danger" messages={errors.userName} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('휴대전화번호')}</dt>
          <dd>
            <StyledInput
              type="text"
              name="mobile"
              value={form?.mobile}
              onChange={onChange}
            />
            {errors?.mobile && (
              <StyledMessage color="danger" messages={errors.mobile} />
            )}
          </dd>
        </dl>
        {errors?.global && (
          <StyledMessage color="danger" messages={errors.global} />
        )}
        <StyledButton type="submit">{t('수정하기')}</StyledButton>
      </FormBox>
    </Container>
  );
};

export default React.memo(ProfileForm);
