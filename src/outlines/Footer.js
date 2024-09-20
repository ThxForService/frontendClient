import React from 'react';
import styled from 'styled-components';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { buttonColor } from '@/theme/colors';

const { darkPink, black } = buttonColor;

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

const Image = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap>
        <FooterContentBox>
          <Address className="이진표">
            서울 마포구 신촌로 176 중앙빌딩 | 502호 2조
          </Address>
          <Information>
            asdf
            <br />
          </Information>
          <Information2>
            qwer
            <br />
            <br />
            zxc
            <br />
            이진표
          </Information2>
        </FooterContentBox>
        <FooterImageBox>
          {/* <Image src={FooterImage1} alt="1" />
          <Image src={FooterImage2} alt="2" />
          <Image src={FooterImage3} alt="3" /> */}
        </FooterImageBox>
      </FooterWrap>
    </FooterBox>
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
