import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import StyledMessage from '@/commons/components/StyledMessage';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { colors } from '@/theme/colors';

const ButtonGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: 20px auto;

  button {
    width: 0;
    flex-grow: 1;
  }

  button + button {
    margin-left: 5px;
  }

  .linkjoin {
    color: ${colors.white};
  }
`;

const FormBox = styled.form`
  dl {
    display: flex;
    align-items: center;

    dt {
      width: 120px;
    }

    dd {
      flex-grow: 1;
    }
  }

  dl + dl {
    margin-top: 10px;
  }

  .radio {
    margin-right: 10px;
  }

  .agree {
    text-align: center;
    margin: 15px 0;

    svg {
      font-size: 1.5rem;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
`;
const LoginForm = ({ form, errors, onSubmit, onChange }) => {
  const { t } = useTranslation();

  const { setShowHeader, setShowFooter, setShowMainMenu } = getCommonActions();

  useLayoutEffect(() => {
    setShowHeader(true); // 가리기
    setShowFooter(true);
    setShowMainMenu(true);
  }, [setShowHeader, setShowFooter, setShowMainMenu]);

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="email"
            value={form?.email || ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.email}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <StyledInput
            type="password"
            name="password"
            value={form?.password || ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.password}</StyledMessage>
        </dd>
      </dl>

      <ButtonGroup>
        <StyledButton type="button" variant="primary">
          <Link href="/member/join" className="linkjoin">
            {t('회원가입')}
          </Link>
        </StyledButton>
        <StyledButton type="submit" variant="primary">
          {t('로그인')}
        </StyledButton>
      </ButtonGroup>

      <StyledMessage variant="danger">{errors?.global}</StyledMessage>
    </FormBox>
  );
};

export default React.memo(LoginForm);
