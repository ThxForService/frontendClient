import React, {useLayoutEffect} from 'react';
import { useTranslation } from 'react-i18next';
import MypageMain from '../components/MypageMain';
import { getCommonActions } from '@/commons/contexts/CommonContext';



const MypageContainer = () => {

  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('마이페이지'));
  }, [setMainTitle, t]);
  

  return <MypageMain/>;

};

export default React.memo(MypageContainer);