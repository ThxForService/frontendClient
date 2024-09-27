import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import classNames from 'classnames';
import styled from 'styled-components';
import UserInfoContext from '@/commons/contexts/UserInfoContext';
import { FaUserCircle } from 'react-icons/fa';
import { StyledButton } from '@/commons/components/StyledButton';
import basicprofileimage from '../../../public/images/basicprofile.jpg';
import Loading from '@/commons/components/Loading';

const MyPageMainContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
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

const Wrapper = styled.div`
  width: 100%;
  word-break: break-all;
  margin: 10px 0;

  dl {
    display: flex;

    padding: 10px 15px;

    dt {
      width: 100px;
      font-weight: bold;
      font-size: 1.1em;
    }

    dd {
      width: calc(100% - 120px) l;
    }

    a {
      height: 100%;
    }
  }

  dl:first-child {
    border-bottom: 1px solid #e5e5e5;
    font-weight: bold;
    font-size: 1.1em;
  }
`;

const Seperator = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 8px;
  background-color: #ececec;
`;

const MypageMain = ({ item }) => {
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);

  const formatDate = (dateString) => {
    if (!dateString) return 'Not available';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const { t } = useTranslation();
  const router = useRouter();

  return (
    <MyPageMainContainer>
      {userInfo?.profileImage ? (
        <Link href="/mypage">
          <ImageBox src={userInfo.profileImage} alt="profile" />
        </Link>
      ) : (
        <ImageBox src="/images/basicprofile.png" alt="default profile" />
      )}

      <Wrapper>
        <dl>
          <dt>{userInfo?.username}</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>{t('ID')}</dt>
          <dd>{userInfo?.email}</dd>
        </dl>
        {userInfo?.mobile && (
          <dl>
            <dt>{t('연락처')}</dt>
            <dd>{userInfo?.mobile || '등록정보 없음'}</dd>
          </dl>
        )}
        {userInfo?.address || userInfo?.addressSub || userInfo?.zonecode ? (
          <dl>
            <dt>{t('주소')}</dt>
            <dd>
              {[userInfo?.address, userInfo?.addressSub, userInfo?.zonecode]
                .filter(Boolean) // 존재하는 값만 남기기
                .join(' ')}{' '}
              {/* 값들 사이에 공백 추가 */}
            </dd>
          </dl>
        ) : (
          <p>{t('등록정보 없음')}</p>
        )}
        <dl>
          <dt>{t('생년월일')}</dt>
          <dd>{formatDate(userInfo?.birthdate)}</dd>
        </dl>
        <Seperator />
        {userInfo?.studentNo && (
          <dl>
            <dt>{t('학번')}</dt>
            <dd>{userInfo?.studentNo}</dd>
          </dl>
        )}
        {userInfo?.empNo && (
          <dl>
            <dt>{t('사번')}</dt>
            <dd>{userInfo?.empNo}</dd>
          </dl>
        )}
        {userInfo?.department && (
          <dl>
            <dt>{t('학과')}</dt>
            <dd>{userInfo?.department}</dd>
          </dl>
        )}
        {userInfo?.grade && (
          <dl>
            <dt>{t('학년')}</dt>
            <dd>{userInfo?.grade}</dd>
          </dl>
        )}
        <dl>
          <dt>{t('상태')}</dt>
          <dd>{userInfo?.status || '등록정보 없음'}</dd>
        </dl>
        {userInfo?.authority === 'STUDENT' && (
          <dl>
            <dt>{t('지도교수')}</dt>
            <dd>{userInfo?.professor?.username || '등록정보 없음'}</dd>
          </dl>
        )}
         {userInfo?.subject && (
          <dl>
            <dt>{t('담당분야')}</dt>
            <dd>{userInfo?.subject}</dd>
          </dl>
        )}
         {userInfo?.introduction && (
          <dl>
            <dt>{t('상담사 소개')}</dt>
            <dd>{userInfo?.introduction}</dd>
          </dl>
        )}
      </Wrapper>
    </MyPageMainContainer>
  );
};

export default React.memo(MypageMain);
