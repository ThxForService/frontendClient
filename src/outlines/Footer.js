import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { colors } from '@/theme/colors';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import cookies from 'react-cookies';

const { darkPink, black } = colors;

const FooterBox = styled.footer`
  min-height: 270px;
  background: ${black};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterWrap = styled.div`
  width: 1440px;
  display: flex;
`;

const Address = styled.div`
  width: 100%;
  font-size: 16px;
  margin-left: 100px;
  margin-bottom: 30px;
  margin-top: 10px;
  color: ${darkPink};
  font-weight: bold;
`;

const Information = styled.div`
  width: 100%;
  font-size: 13px;
  margin-left: 100px;
  margin-bottom: 20px;
  line-height: 1.5;
  color: ${darkPink};
`;

const Information2 = styled.div`
  width: 100%;
  font-size: 13px;
  margin-left: 100px;
  line-height: 1.5;
  color: ${darkPink};
`;

const FooterContentBox = styled.div`
  margin-bottom: 20px;
`;

const FooterImageBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-left: 500px;
  margin-top: 180px;
`;

const Footer = () => {
  const { t } = useTranslation();
  const { showFooter } = getCommonStates();
  const {
    states: { isLogin, userInfo, isAdmin },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = getUserContext();
  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);
  return (
    showFooter && (
      <FooterBox>
        <FooterWrap>
          <FooterContentBox>
            <Address>이진표</Address>
            <Information>
              <br />
            </Information>
            <Information2>
              주소(신촌캠퍼스) : (03722) 서울특별시 서대문구 연세로 50
              연세대학교 백양관 N408호 전화 : 02-2123-6688 이메일 :
              counsel@yonsei.ac.kr
              <br />
              주소(국제캠퍼스) : (21983) 인천광역시 연수구 송도과학로 85
              송도2학사 G동 반피득홀 전화 : 032-749-2070 이메일 :
              counselyic@yonsei.ac.kr
              <br />
              <br />
              Copyrights (c) 2017 Yonsei University Counseling Center. All
              rights reserved.
            </Information2>
          </FooterContentBox>
          <FooterImageBox>
            <Image src="/images/logo.png" alt="1" width={100} height={100} />
          </FooterImageBox>
        </FooterWrap>
      </FooterBox>
    )
  );
};

// const { sora } = colors;

// const FooterContainer = styled.footer`
//   background-color: ${sora};
//   color: white;
//   padding: 20px;
//   text-align: center;
//   position: relative;
//   bottom: 0;
//   width: 100%;
//   height: 200px;
// `;

// const Footer = () => {
//   const { showFooter } = getCommonStates();
//   return (
//     showFooter && (
//       <FooterContainer>
//         <h1>푸터</h1>
//         <p>있어보이는 말 합니다.</p>
//       </FooterContainer>
//     )
//   );
// };

export default React.memo(Footer);
