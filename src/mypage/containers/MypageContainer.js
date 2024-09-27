import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import MypageMain from '../components/MypageMain';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import styled from 'styled-components';
import UserInfoContext from '@/commons/contexts/UserInfoContext';
import { useParams } from 'react-router-dom';
import { apiGet } from '@/member/apis/apiInfo';
import { getProfessors } from '@/member/apis/apiInfo';
const Seperator = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 8px;
  background-color: #ececec;
`;

const MypageContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('마이페이지'));
  }, [setMainTitle, t]);
  return <MypageMain />;
};

export default React.memo(MypageContainer);
