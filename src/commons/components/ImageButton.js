export const ImageButton = styled.button`
  ${commonStyles}
  ${({
    size = 'large',
    imageUrl,
    hoverImageUrl,
    buttonText = 'Button Text', // 기본 텍스트 값
    textColor = colors.white, // 기본 텍스트 색상
  }) => css`
    ${sizeStyles[size]}
    background-image: url(${imageUrl});
    background-size: cover;
    background-position: center;
    position: relative; // 텍스트를 절대 위치로 설정하기 위한 상대 위치

    &::before {
      content: '${buttonText}'; // 버튼 텍스트
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); // 중앙 정렬
      color: ${textColor}; // 텍스트 색상
      font-weight: bold;
      font-size: ${size === 'large' ? '18px' : '14px'}; // 버튼 크기에 따른 폰트 크기
      z-index: 1; // 텍스트가 이미지 위에 위치하도록
    }

    &:hover {
      background-image: url(${hoverImageUrl || imageUrl}); // 호버 시 이미지 교체

      &::before {
        // 호버 상태에서도 텍스트 유지
        content: '${buttonText}';
      }
    }
  `}
`;

/**
 * 사용할 때 코드 
 * <ImageButton 
  size="large" 
  imageUrl="/images/button.jpg" 
  hoverImageUrl="/images/button-hover.jpg" 
  buttonText="Click Me"
  textColor="black" 
/>
 */


