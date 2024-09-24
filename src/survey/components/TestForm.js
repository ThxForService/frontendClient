'use client';
import React from 'react';
import styled from 'styled-components';
import StyledMessage from '@/commons/components/StyledMessage';
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';
import { t } from 'i18next';

const FormBox = styled.form``;

const ItemBox = ({ no, item, answers, className, onClick }) => {
  const { questionId, questionText, testType } = item;
  const { t } = useTranslation();

  const optionsMap = {
    COMPULSION: (
      <>
        <span onClick={() => onClick(questionId, 1)}>
          {answers[questionId] === 1 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('아니다')}
        </span>
        <span onClick={() => onClick(questionId, 2)}>
          {answers[questionId] === 2 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇다')}
        </span>
      </>
    ),
    EVASION: (
      <>
        <span onClick={() => onClick(questionId, 1)}>
          {answers[questionId] === 1 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('전혀 그렇지 않다')}
        </span>
        <span onClick={() => onClick(questionId, 2)}>
          {answers[questionId] === 2 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇지 않다')}
        </span>
        <span onClick={() => onClick(questionId, 3)}>
          {answers[questionId] === 3 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('보통이다')}
        </span>
        <span onClick={() => onClick(questionId, 4)}>
          {answers[questionId] === 4 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇다')}
        </span>
        <span onClick={() => onClick(questionId, 5)}>
          {answers[questionId] === 5 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('매우 그렇다')}
        </span>
      </>
    ),
    STRESS: (
      <>
        <span onClick={() => onClick(questionId, 1)}>
          {answers[questionId] === 1 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('전혀 그렇지 않다')}
        </span>
        <span onClick={() => onClick(questionId, 2)}>
          {answers[questionId] === 2 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇지 않다')}
        </span>
        <span onClick={() => onClick(questionId, 3)}>
          {answers[questionId] === 3 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇다')}
        </span>
        <span onClick={() => onClick(questionId, 4)}>
          {answers[questionId] === 4 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('매우 그렇다')}
        </span>
      </>
    ),
    INTERNET_ADDICTION: (
      <>
        <span onClick={() => onClick(questionId, 1)}>
          {answers[questionId] === 1 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('전혀 그렇지 않다')}
        </span>
        <span onClick={() => onClick(questionId, 2)}>
          {answers[questionId] === 2 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇지 않다')}
        </span>
        <span onClick={() => onClick(questionId, 3)}>
          {answers[questionId] === 3 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇다')}
        </span>
        <span onClick={() => onClick(questionId, 4)}>
          {answers[questionId] === 4 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('매우 그렇다')}
        </span>
      </>
    ),
    EATING_DISORDER: (
      <>
        <span onClick={() => onClick(questionId, 1)}>
          {answers[questionId] === 1 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('거의 드물다')}
        </span>
        <span onClick={() => onClick(questionId, 2)}>
          {answers[questionId] === 2 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('가끔 그렇다')}
        </span>
        <span onClick={() => onClick(questionId, 3)}>
          {answers[questionId] === 3 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('자주 그렇다')}
        </span>
        <span onClick={() => onClick(questionId, 4)}>
          {answers[questionId] === 4 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('매우 자주 그렇다')}
        </span>
        <span onClick={() => onClick(questionId, 5)}>
          {answers[questionId] === 5 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('항상 그렇다')}
        </span>
      </>
    ),
  };

  return (
    <li className={className}>
      <div>
        {no}. {questionText}
        {optionsMap[testType] || null}
      </div>
    </li>
  );
};

const TestForm = ({ items, form, errors, onClick, onSubmit }) => {
  const { answers } = form;
  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      {items && items.length > 0 && (
        <ul>
          {items.map((item, i) => (
            <ItemBox
              key={`questionId_${item.questionId}`}
              item={item}
              no={i + 1}
              onClick={onClick}
              answers={answers}
            />
          ))}
        </ul>
      )}
      <StyledMessage variant="danger">{errors?.global}</StyledMessage>
      <StyledButton type="submit" variant="primary">
        {t('제출하기')}
      </StyledButton>
    </FormBox>
  );
};

export default React.memo(TestForm);
