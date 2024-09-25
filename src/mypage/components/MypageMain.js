import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import classNames from "classnames";
import styled from "styled-components";
import UserInfoContext from "@/commons/contexts/UserInfoContext";
import { FaUserCircle } from "react-icons/fa";
import { StyledButton } from "@/commons/components/StyledButton";
import basicprofileimage from "../../../public/images/basicprofile.jpg"

const MyPageMainContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px; 
  width: 350px; 
  margin: 0 auto; 
`;

const ImageBox = styled.img`
  display: block;
  width: 170px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 70%;
  overflow: hidden;
  
`;


const MypageMain = () => {
    const {
        states: { userInfo },
        actions: { setUserInfo },
      } = useContext(UserInfoContext);

    const { t } = useTranslation();
    const router = useRouter();

      return (
      <MyPageMainContainer>
          {userInfo?.profileImage ? (
        <Link href="/mypage">
          <ImageBox src={userInfo.profileImage} alt="profile" />
        </Link>
      ) : (
        <ImageBox src='/images/basicprofile.png' alt="default profile" />
      )}
      <StyledButton
      type="submit"
      onClick={() => router.push('/mypage/info')} 
      >
      <FaUserCircle style={{ 
              width: '14px',
              height: '20px',
              margin: 'auto 2',
            }}/>{t('회원정보_수정')}
      </StyledButton>
      </MyPageMainContainer>
      );
};

export default React.memo(MypageMain);