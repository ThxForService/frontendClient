import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { StyledInput } from '@/commons/components/StyledInput';
import StyledMessage from '@/commons/components/StyledMessage';
import { StyledButton as BaseStyledButton } from '@/commons/components/StyledButton';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';
import Status from '@/member/constants/Status';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBox = styled.form`
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;
`;

const ColumnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 2px solid #ccc;
  margin: 10px 0;
`;

const StyledInputWithMargin = styled(StyledInput)`
  margin-top: 5px;
  margin-bottom: 15px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical; /* 세로 크기 조정 가능 */
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

const StatusSpan = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  color: #333;

  svg {
    margin-right: 5px;
  }

  &:hover {
    color: #007bff;
  }
`;

/* StyledButton의 스타일 추가 */
const StyledButton = styled(BaseStyledButton)`
  margin-top: 20px;
  align-self: center;
`;

const ProfileForm = ({
  form,
  errors,
  onChange,
  onSubmit,
  onToggle,
  skey,
  professors,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <FormBox onSubmit={onSubmit} autoComplete="off">
        {/* Column들을 감싸는 Wrapper */}
        <ColumnWrapper>
          <Column>
            <dl>
              <h3>
                {t('이메일')} : {form?.email}
              </h3>
            </dl>
            <Divider />
            <dl>
              <dt>{t('비밀번호')}</dt>
              <dd>
                <StyledInputWithMargin
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
                <StyledInputWithMargin
                  type="password"
                  name="confirmPassword"
                  value={form?.confirmPassword}
                  onChange={onChange}
                />
                {errors?.confirmPassword && (
                  <StyledMessage
                    color="danger"
                    messages={errors.confirmPassword}
                  />
                )}
              </dd>
            </dl>
            <dl>
              <dt>{t('이름')}</dt>
              <dd>
                <StyledInputWithMargin
                  type="text"
                  name="username"
                  value={form?.username}
                  onChange={onChange}
                />
                {errors?.username && (
                  <StyledMessage color="danger" messages={errors.username} />
                )}
              </dd>
            </dl>
            <dl>
              <dt>{t('휴대전화번호')}</dt>
              <dd>
                <StyledInputWithMargin
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
            <dl>
              <dt>{t('우편번호')}</dt>
              <dd>
                <StyledInputWithMargin
                  type="text"
                  name="zonecode"
                  value={form?.zonecode}
                  onChange={onChange}
                />
                {errors?.zonecode && (
                  <StyledMessage color="danger" messages={errors.zonecode} />
                )}
              </dd>
            </dl>
            <dl>
              <dt>{t('주소')}</dt>
              <dd>
                <StyledInputWithMargin
                  type="text"
                  name="address"
                  value={form?.address}
                  onChange={onChange}
                />
                {errors?.address && (
                  <StyledMessage color="danger" messages={errors.address} />
                )}
              </dd>
            </dl>
            <dl>
              <dt>{t('나머지주소')}</dt>
              <dd>
                <StyledInputWithMargin
                  type="text"
                  name="addressSub"
                  value={form?.addressSub}
                  onChange={onChange}
                />
                {errors?.addressSub && (
                  <StyledMessage color="danger" messages={errors.addressSub} />
                )}
              </dd>
            </dl>
          </Column>

          <Column>
            {form?.authority === 'STUDENT' ? (
              <>
                <h3>{t('학생정보')}</h3>
                <Divider />
                <dl>
                  <h3>
                    {t('학번')} : {form?.studentNo}
                  </h3>
                </dl>

                <StatusContainer>
                  <StatusSpan
                    onClick={() => onToggle('status', 'UNDERGRADUATE')}
                  >
                    {form?.status === 'UNDERGRADUATE' ? (
                      <IoMdRadioButtonOn />
                    ) : (
                      <IoMdRadioButtonOff />
                    )}
                    {Status.UNDERGRADUATE}
                  </StatusSpan>

                  <StatusSpan
                    onClick={() => onToggle('status', 'POSTGRADUATE')}
                  >
                    {form?.status === 'POSTGRADUATE' ? (
                      <IoMdRadioButtonOn />
                    ) : (
                      <IoMdRadioButtonOff />
                    )}
                    {Status.POSTGRADUATE}
                  </StatusSpan>
                </StatusContainer>

                <dl>
                  <dt>{t('학과')}</dt>
                  <dd>
                    <StyledInputWithMargin
                      type="text"
                      name="department"
                      value={form?.department}
                      onChange={onChange}
                    />
                    <StyledMessage variant="danger">
                      {errors?.department}
                    </StyledMessage>
                  </dd>
                </dl>
                <dl>
                  <dt>{t('학년')}</dt>
                  <dd>
                    <StyledInputWithMargin
                      type="text"
                      name="grade"
                      value={form?.grade}
                      onChange={onChange}
                    />
                    <StyledMessage variant="danger">
                      {errors?.grade}
                    </StyledMessage>
                  </dd>
                </dl>
                <dl>
                  <dt>{t('지도교수')}</dt>
                  <dd>
                    <StyledInputWithMargin
                      type="text"
                      name="skey"
                      placeholder={t('검색어를_입력하세요.')}
                      onChange={onChange}
                    />
                    {skey ? (
                      <select name="professor" onChange={onChange}>
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
                    ) : (
                      form?.professorInfo &&
                      `${form.professorInfo.username}(${form.professorInfo.empNo})`
                    )}
                    <StyledMessage variant="danger">
                      {errors?.professor}
                    </StyledMessage>
                  </dd>
                </dl>
              </>
            ) : (
              <>
                <h3>{t('상담사 정보')}</h3>
                <Divider />
                <dl>
                  <dt>
                    {t('사번')} : {form?.empNo}
                  </dt>
                </dl>

                <StatusContainer>
                  <StatusSpan onClick={() => onToggle('status', 'EMPLOYED')}>
                    {form?.status === 'EMPLOYED' ? (
                      <IoMdRadioButtonOn />
                    ) : (
                      <IoMdRadioButtonOff />
                    )}
                    {Status.EMPLOYED}
                  </StatusSpan>

                  <StatusSpan onClick={() => onToggle('status', 'LEAVE')}>
                    {form?.status === 'LEAVE' ? (
                      <IoMdRadioButtonOn />
                    ) : (
                      <IoMdRadioButtonOff />
                    )}
                    {Status.LEAVE}
                  </StatusSpan>
                </StatusContainer>

                <dl>
                  <dt>{t('담당분야')}</dt>
                  <dd>
                    <StyledInputWithMargin
                      type="text"
                      name="subject"
                      value={form?.subject}
                      onChange={onChange}
                    />
                    <StyledMessage variant="danger">
                      {errors?.subject}
                    </StyledMessage>
                  </dd>
                </dl>
                <dl>
                  <dt>{t('회원 소개')}</dt>
                  <dd>
                    <StyledTextArea
                      name="introduction"
                      value={form?.introduction || ''}
                      onChange={onChange}
                      rows={5}
                    />
                    {errors?.introduction && (
                      <StyledMessage
                        color="danger"
                        messages={errors.introduction}
                      />
                    )}
                  </dd>
                </dl>
              </>
            )}
          </Column>
        </ColumnWrapper>

        {errors?.global && (
          <StyledMessage color="danger" messages={errors.global} />
        )}

        <StyledButton className="update" type="submit">
          {t('수정하기')}
        </StyledButton>
      </FormBox>
    </Container>
  );
};

export default React.memo(ProfileForm);
