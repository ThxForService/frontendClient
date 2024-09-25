import React, { useCallback } from 'react';
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
  font-weight: bold;

  span {
    color: ${darkPink};
    cursor: pointer;
    &: hover {
      text-decoration: underline;
    }
  }
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

const Footer = ({ onOpenModal }) => {
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
            <Address>
              <span onClick={onOpenModal}>개인정보처리방침</span>
            </Address>
            
            <Information2>
              주소(이대센터) : (04104) 서울 마포구 신촌로 176  
              이메일 :qwer1234@thx.or.kr  
              <br />
              전화 :02-222-3333 
              <br/>
              주소(강남센터) : (06134) 서울 강남구 테헤란로7길 7 에스코빌딩 6층
              이메일 :JH.K77@thx.or.kr
              <br />
              전화: 02-444-5555
            
              <br />
              <br/>
              Copyrights (c) 2024 THX Counseling Center. All rights reserved.
            </Information2>
          </FooterContentBox>
          <FooterImageBox>
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
