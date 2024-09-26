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

  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);

  const initialForm = { ...userInfo };
  initialForm.professorInfo = userInfo?.professor;
  initialForm.professor = userInfo?.professor?.memberSeq;
  delete initialForm.password;

  const [form, setForm] = useState(initialForm);
  const [professors, setProfessors] = useState([]);
  const [skey, setSkey] = useState('');
  const [item, setItem] = useState(null);

  const { memberSeq } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const professors = await getProfessors(skey);
        setProfessors(professors);
        if (professors && professors.length > 0) {
          setForm((form) => ({ ...form, professor: professors[0].memberSeq }));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [skey]);

  useEffect(() => {
    (async() => {
      try{
        const item = await apiGet(memberSeq);
        setItem(item);
      } catch (err) {
        console.error(err);
      }
    })();

  },[memberSeq]);

  return (
    <MypageMain item={item} />
);
};

export default React.memo(MypageContainer);
