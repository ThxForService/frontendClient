import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import classNames from "classnames";
import styled from "styled-components";
import UserInfoContext from "@/commons/contexts/UserInfoContext";
import { FaUserCircle } from "react-icons/fa";
import { StyledButton } from "@/commons/components/StyledButton";

const MypageMain = () => {
    const {
        states: { userInfo },
        actions: { setUserInfo },
      } = useContext(UserInfoContext);

    const { t } = useTranslation();
    const router = useRouter();

      return (
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
      );
};

export default React.memo(MypageMain);