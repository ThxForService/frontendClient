import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%', // 원하는 너비로 조정
      maxWidth: '700px', // 최대 너비 설정 (필요에 따라 조정)
      height: 'auto', // 필요에 따라 높이 설정
      padding: '20px', // 패딩 추가 (선택 사항)
    },
  };

const PopupView = ({ children, visible, title }) => {
  return (
    visible && (
      <Modal
        isOpen={visible}
        style={customStyles}
        contentLabel={title ?? '팝업'}
      >
        {children}
      </Modal>
    )
  );
};

export default React.memo(PopupView);
