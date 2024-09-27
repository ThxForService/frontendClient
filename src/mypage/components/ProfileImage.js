import React from 'react';
import styled from 'styled-components';
import FileUpload from '@/commons/components/FileUpload';

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
  let imageUrl;
  if (typeof profileImage === 'string') {
    imageUrl = profileImage;
  }

  if (!imageUrl) {
    imageUrl = profileImage
      ? `${profileImage.thumbUrl}?seq=${profileImage.seq}&width=300&height=400`
      : '/images/basicprofile.png';
  }

  return (
    <Wrapper className={className}>
      <FileUpload
        width={170}
        imageWidth={170}
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
