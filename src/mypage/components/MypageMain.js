import React from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import classNames from "classnames";
import styled from "styled-components";
import UserInfoContext from "@/commons/contexts/UserInfoContext";
import { FaUserCircle } from "react-icons/fa";

const MypageMain = () => {
    const {
        states: { userInfo },
        actions: { setUserInfo },
      } = useContext(UserInfoContext);

      return 
      <>
      <FaUserCircle style={{ 
              width: '14px',
              height: '20px',
              margin: 'auto 2',
            }}/>
      </>


};

export default React.memo(MypageMain);