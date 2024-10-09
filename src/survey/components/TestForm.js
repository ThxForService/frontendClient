'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import StyledMessage from '@/commons/components/StyledMessage';
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';
import Pagination from '@/commons/components/Pagination';
import surveyType from '../constants/surveyType';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 100px 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
`;

const Item = styled.li`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Option = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;

  svg {
    margin-right: 5px;
    color: ${({ selected }) => (selected ? '#007bff' : '#ccc')};
  }

  &:hover {
    color: #007bff;
  }
`;

const ItemBox = ({ no, item, answers, className, onClick }) => {
  const { questionId, questionText, testType } = item;
  const { t } = useTranslation();

  const optionsMap = {
    COMPULSION: (
      <>
        <Option
          onClick={() => onClick(questionId, 1)}
          selected={answers[questionId] === 1}
        >
          {answers[questionId] === 1 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('아니다')}
        </Option>
        <Option
          onClick={() => onClick(questionId, 2)}
          selected={answers[questionId] === 2}
        >
          {answers[questionId] === 2 ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          {t('그렇다')}
        </Option>
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
    <Item className={className}>
      <div>
        {no}. {questionText}
        {optionsMap[testType] || null}
      </div>
    </Item>
  );
};

const TestForm = ({ items, form, errors, onClick, onSubmit }) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const [pagination, setPagination] = useState({
    page: 1, // 현재 페이지
    totalPages: totalPages, // 전체 페이지 수
  });

  const handlePageChange = (newPage) => {
    console.log('페이지 변경:', newPage);
    setPagination((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const { answers } = form;
  const { t } = useTranslation();

  const handleSelectAll = (value) => {
    items.forEach((item) => {
      onClick(item.questionId, value);
    });
  };

  const startIndex = (pagination.page - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  const currentTestType =
    currentItems.length > 0 ? surveyType[currentItems[0].testType] : '';

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <h1>{currentTestType ? t(currentTestType) : t('테스트 유형 없음')}</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '1rem',
          width: '100%',
        }}
      >
        <StyledButton
          size="small"
          variant="primary"
          type="button"
          onClick={() => handleSelectAll(1)}
          style={{ marginRight: '8px' }} // 버튼 간격 추가
        >
          {t('모두 선택하기 (1)')}
        </StyledButton>
        <StyledButton
          size="small"
          variant="primary"
          type="button"
          onClick={() => handleSelectAll(2)}
        >
          {t('모두 선택하기 (2)')}
        </StyledButton>
      </div>
      {currentItems && currentItems.length > 0 && (
        <List>
          {currentItems.map((item, i) => (
            <ItemBox
              key={`questionId_${item.questionId}`}
              item={item}
              no={i + 1}
              onClick={onClick}
              answers={answers}
            />
          ))}
        </List>
      )}

      {totalPages > 1 && (
        <Pagination
          pagination={{
            ...pagination,
            pages: Array.from({ length: totalPages }, (_, i) => [i + 1]),
          }}
          onClick={handlePageChange}
        />
      )}
      <StyledButton type="submit" variant="primary">
        {t('제출하기')}
      </StyledButton>
      <StyledMessage variant="danger">{errors?.global}</StyledMessage>
    </FormBox>
  );
};

export default React.memo(TestForm);

// const numberOfOptions = 5; // 1부터 5까지 선택할 수 있다고 가정
// const availableOptions = [1, 2]; // 현재 선택 가능한 옵션 (1, 2)

// return (
//   <FormBox onSubmit={onSubmit} autoComplete="off">
//       <div
//   style={{
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: '1rem',
//     width: '100%',
//   }}
// >
//   {availableOptions.includes(1) && (
//     <StyledButton
//       size="small"
//       variant="primary"
//       type="button"
//       onClick={() => handleSelectAll(1)}
//       style={{ marginRight: '8px' }} // 버튼 간격 추가
//     >
//       {t('모두 선택하기 (1)')}
//     </StyledButton>
//   )}
//   {availableOptions.includes(2) && (
//     <StyledButton
//       size="small"
//       variant="primary"
//       type="button"
//       onClick={() => handleSelectAll(2)}
//     >
//       {t('모두 선택하기 (2)')}
//     </StyledButton>
//   )}
//   {availableOptions.includes(3) && (
//     <StyledButton
//       size="small"
//       variant="primary"
//       type="button"
//       onClick={() => handleSelectAll(3)}
//     >
//       {t('모두 선택하기 (3)')}
//     </StyledButton>
//   )}
//   {availableOptions.includes(4) && (
//     <StyledButton
//       size="small"
//       variant="primary"
//       type="button"
//       onClick={() => handleSelectAll(4)}
//     >
//       {t('모두 선택하기 (4)')}
//     </StyledButton>
//   )}
//   {availableOptions.includes(5) && (
//     <StyledButton
//       size="small"
//       variant="primary"
//       type="button"
//       onClick={() => handleSelectAll(5)}
//     >
//       {t('모두 선택하기 (5)')}
//     </StyledButton>
//   )}
// </div>
//     {currentItems && currentItems.length > 0 && (
//       <List>
//         {currentItems.map((item, i) => (
//           <ItemBox
//             key={`questionId_${item.questionId}`}
//             item={item}
//             no={i + 1}
//             onClick={onClick}
//             answers={answers}
//           />
//         ))}
//       </List>
//     )}

//     {totalPages > 1 && (
//       <Pagination
//         pagination={{
//           ...pagination,
//           pages: Array.from({ length: totalPages }, (_, i) => [i + 1]),
//         }}
//         onClick={handlePageChange}
//       />
//     )}

//     <StyledButton type="submit" variant="primary">
//       {t('제출하기')}
//     </StyledButton>
//     <StyledMessage variant="danger">{errors?.global}</StyledMessage>
//   </FormBox>
// );
// };

// export default React.memo(TestForm);
