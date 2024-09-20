'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';
import { StyledInput } from '@/commons/components/StyledInput';
import StyledMessage from '@/commons/components/StyledMessage';
import Authority from '../constants/Authority';
import Status from '../constants/Status';
import { StyledButton } from '@/commons/components/StyledButton';

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

const JoinForm = ({
  form,
  errors,
  onSubmit,
  onChange,
  onToggle,
  skey,
  professors,
}) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('가입유형')}</dt>
        <dd>
          {Object.keys(Authority)
            .filter((k) => k != 'ADMIN')
            .map((k, i) => (
              <span className='radio'
                key={`Authority_${k}`}
                onClick={() => onToggle('authority', k)}
              >
                {form?.authority === k ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {Authority[k]}
              </span>
            ))}
        </dd>
      </dl>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="email"
            value={form?.email ?? ''}
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
            value={form?.password ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.password}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <StyledInput
            type="password"
            name="confirmPassword"
            value={form?.confirmPassword ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">
            {errors?.confirmPassword}
          </StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="username"
            value={form?.username ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.username}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="mobile"
            value={form?.mobile ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.mobile}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('우편번호')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="zonecode"
            value={form?.zonecode ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.zonecode}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('주소')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="address"
            value={form?.address ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.address}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('나머지_주소')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="addressSub"
            value={form?.addressSub ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.addressSub}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{t('생년월일')}</dt>
        <dd>
          <StyledInput
            type="date"
            name="birth"
            value={form?.birth ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.birth}</StyledMessage>
        </dd>
      </dl>
      <dl>
        <dt>{form?.authority === 'STUDENT' ? t('재학상태') : t('재직상태')}</dt>
        <dd>
          {form?.authority === 'STUDENT' ? (
            <>
              <span className='radio' onClick={() => onToggle('status', 'UNDERGRADUATE')}>
                {form?.status === 'UNDERGRADUATE' ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {Status.UNDERGRADUATE}
              </span>
              <span className='radio' onClick={() => onToggle('status', 'POSTGRADUATE')}>
                {form?.status === 'POSTGRADUATE' ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {Status.POSTGRADUATE}
              </span>
              <span className='radio' onClick={() => onToggle('status', 'GRADUATE')}>
                {form?.status === 'GRADUATE' ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {Status.GRADUATE}
              </span>
            </>
          ) : (
            <>
              <span className='radio' onClick={() => onToggle('status', 'EMPLOYED')} >
                {form?.status === 'EMPLOYED' ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {Status.EMPLOYED}
              </span>
              <span className='radio' onClick={() => onToggle('status', 'LEAVE')}>
                {form?.status === 'LEAVE' ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {Status.LEAVE}
              </span>
              <span onClick={() => onToggle('status', 'RESIGN')}>
                {form?.status === 'RESIGN' ? (
                  <IoMdRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff />
                )}
                {Status.RESIGN}
              </span>
            </>
          )}
        </dd>
      </dl>
      {form?.authority === 'STUDENT' && (
        <dl>
          <dt>{t('학과명')}</dt>
          <dd>
            <StyledInput
              type="text"
              name="department"
              value={form?.department ?? ''}
              onChange={onChange}
            />
            <StyledMessage variant="danger">{errors?.department}</StyledMessage>
          </dd>
        </dl>
      )}

      {form?.authority === 'STUDENT' ? (
        <>
          <dl>
            <dt>{t('학번')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="studentNo"
                value={form?.studentNo ?? ''}
                onChange={onChange}
              />
              <StyledMessage variant="danger">
                {errors?.studentNo}
              </StyledMessage>
            </dd>
          </dl>
          <dl>
            <dt>{t('학년')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="grade"
                value={form?.grade ?? ''}
                onChange={onChange}
              />
              <StyledMessage variant="danger">{errors?.grade}</StyledMessage>
            </dd>
          </dl>
          <dl>
            <dt>{t('지도교수')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="skey"
                value={skey}
                onChange={onChange}
              />
              <select
                name="professor"
                value={form?.professor}
                onChange={onChange}
              >
                {professors && professors.length > 0 ? (
                  professors.map(({ memberSeq, username, empNo }) => (
                    <option key={memberSeq} value={memberSeq}>
                      {username}({empNo})
                    </option>
                  ))
                ) : (
                  <option value="">{t('교수를_선택하세요')}</option>
                )}
              </select>
              <StyledMessage variant="danger">
                {errors?.professor}
              </StyledMessage>
            </dd>
          </dl>
        </>
      ) : (
        <>
          <dl>
            <dt>{t('사번')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="empNo"
                value={form?.empNo ?? ''}
                onChange={onChange}
              />
              <StyledMessage variant="danger">{errors?.empNo}</StyledMessage>
            </dd>
          </dl>
          <dl>
            <dt>{t('담당분야')}</dt>
            <dd>
              <StyledInput
                type="text"
                name="subject"
                value={form?.subject ?? ''}
                onChange={onChange}
              />
              <StyledMessage variant="danger">{errors?.subject}</StyledMessage>
            </dd>
          </dl>
        </>
      )}
      <div
        className="agree"
        suppressHydrationWarning
        onClick={() => onToggle('agree', !Boolean(form?.agree))}
      >
        {form?.agree ? <FaCheckSquare /> : <FaRegCheckSquare />}
        {t('약관에_동의')}
      </div>
      <StyledMessage variant="danger">{errors?.agree}</StyledMessage>
      
        <StyledButton type="submit" variant="primary">
          {t('회원가입')}
        </StyledButton>
     
      <StyledMessage variant="danger">{errors?.global}</StyledMessage>
    </FormBox>
  );
};

export default React.memo(JoinForm);
