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

  const imageUrl = profileImage ? `${profileImage.thumbUrl}?seq=${profileImage.seq}&width=300&height=400` : NoProfile;


  
  return (
    <Wrapper className={className}>
      <FileUpload
        width={170}
        imageUrl={imageUrl}
        gid={gid}
        imageOnly={true}
        single={true}
        done={true}
        callback={fileUploadCallback}
        style={{ cursor: 'pointer' }}
      />
    </Wrapper>
  );
};

export default React.memo(ProfileImage);
