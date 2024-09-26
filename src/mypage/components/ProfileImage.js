import React from 'react';
import styled from 'styled-components';
import FileUpload from '@/commons/components/FileUpload';
import NoProfile from '../../../public/images/basicprofile.png';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  item-align: center;
  width: 170px;
  height: 170px;
  margin: auto;
  border: 2px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImage = ({ gid, profileImage, fileUploadCallback, className }) => {
  return (
    <Wrapper className={className}>
      <FileUpload
        width={170}
        imageUrl={profileImage ?? '/images/basicprofile.png'}
        gid={gid}
        imageOnly={true}
        single={true}
        done={true}
        callback={fileUploadCallback}
      />
    </Wrapper>
  );
};

export default React.memo(ProfileImage);
