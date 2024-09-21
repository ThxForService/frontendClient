import React, { useEffect, useState } from 'react';

const BackgroundChanger = () => {
  const [bgClass, setBgClass] = useState('bg1');

  useEffect(() => {
    const interval = setInterval(() => {
      setBgClass((prev) => {
        if (prev === 'bg1') return 'bg2';
        if (prev === 'bg2') return 'bg3';
        return 'bg1';
      });
    }, 2000); // 2초마다 배경 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`outer-box ${bgClass}`}>
      <div className="background" />
      {/* 로그인 화면 구성 요소 추가 */}
    </div>
  );
};

export default BackgroundChanger;
