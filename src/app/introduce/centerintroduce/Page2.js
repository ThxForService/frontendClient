import React from 'react';
import styled from 'styled-components';

// 스타일링 추가
const Year = styled.span`
  font-weight: bold;
  color: #7dd6f6; /* 스카이블루 색상 */
  text-decoration: underline;
  font-size: 25px;
`;

const HistoryItem = styled.p`
  margin: 10px 0;
`;

const Page2 = () => {
  return (
    <div>
      <p>
        <br />
        <strong>거경궁리</strong>의 정신에 입각하여 생명에 대한{' '}
        <strong>존중과 사랑, 신뢰</strong>를 바탕으로 창조적인 삶을 실현할 수
        있도록
        <br />
        따뜻한 마음과 전문적인 자세를 가지고 헌신적으로 돕는다.
      </p>
      <p style={{ textAlign: 'right', fontStyle: 'italic' }}></p>
      <strong>- THX 상담센터 선언문</strong>

      <h1>THX 상담 센터는</h1>

      <p>
        상담 전문가와의 심리검사 및 상담을 통해 사회생활에서 경험하는{' '}
        <strong>심리적 어려움, 적응 및 진로 선택</strong>의 어려움을 잘
        해결하도록 도우며,
        <br />
        다양한 프로그램(<strong>심리 교육 및 워크샵, 사이코드라마</strong> 등)을
        시행하여 <strong>자기 이해와 자아 개발</strong>을 돕고 적절한 맞춤형
        서비스를 제공합니다.
      </p>

      <h2>센터 소개</h2>
      <ul>
        <li>
          <strong>이대 센터</strong>: 기본적인 심리검사와 상담 + 사회인에게
          특화된 <strong>자기 이해 및 진로 탐색 워크숍</strong>을 실시하며,
          사회생활과 회사 적응을 돕는 심리지원 프로그램을 제공합니다.
        </li>
        <li>
          <strong>강남 센터</strong>: 기본적인 심리검사와 상담 + 사회생활 3년차
          이상 사회인에게 필요한 다양한 주제의{' '}
          <strong>정신건강 지원 프로그램</strong>(심리교육 및 워크숍,
          사이코드라마 등)을 내담자의 요구에 맞춰 시행합니다.
        </li>
      </ul>

      <h2>
        <strong>🍀이심전심(以心傳心)</strong>의 진정성 있는 소통🍀
      </h2>
      <p>
        여러분의 마음을 깊이 이해하고, <strong>더 나은 내일을 위한 길</strong>을
        함께 모색합니다.
        <br />
        삶의 고난 속에서도 <strong>극기복례(克己復禮)</strong>의 자세로 마음의
        균형을 찾고자 하는 모든 분들께 전문적이고 따뜻한 상담을 제공합니다.
      </p>

      <p>
        언제나 진실된 마음으로 <strong>상선약수(上善若水)</strong>처럼
        부드러우면서도 깊이 있는 상담으로 여러분의 성장을 지원하겠습니다.
      </p>

      <p>
        THX 상담센터는 센터별/연령대별 맞춤형 서비스 제공뿐만 아니라, 국내
        유관기관들과 연계되어{' '}
        <strong>내담자에게 필요한 서비스를 전문적으로 지원</strong>합니다.
      </p>

      <br />

      <h2>센터 연혁</h2>

      <hr
        style={{ border: '1px solid #222c9d', width: '40%', marginLeft: '0' }}
      />

      <HistoryItem>
        <Year>.2020년.</Year> 4월 통합상담시스템을 구축 완료하여 심리검사 및
        상담의 온라인 신청이 가능해지고, 태블릿 PC를 통한 THX 상담제도 실시가
        가능해짐.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.2019년.</Year> THX(Thanks For Service) 개발 및 이를 활용한 상담
        체계를 시작하며 이대 상담센터 개설. 윤리인권위원회 산하 심리상담센터로
        직제 개편이 이루어짐.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.2017년.</Year> 3월 윤리인권위원회 인권센터 산하 심리상담소로 직제
        변경이 이루어짐.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>2011년</Year> 강남센터에서 활동이 본격화되면서 전인교육과 글로벌
        교육에 맞는 프로그램 개발 및 교육 활동에 적극적으로 참여함.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.2008년.</Year> 사회 복지처로 통합되면서 종합적이고 체계적인
        행정업무가 실시되고 각 부서들과 긴밀한 연계 및 협력이 가능해져서
        효과적인 상담 관련 제반 서비스를 제공함.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.2004년.</Year> 업무부진 사회인들의 업무 실태와 심리적인 요인을
        탐색하여 보다 효과적인 지원을 하고자 상담을 실시하고, 유관 기관과의
        협력을 통해 정신건강을 증진시키는 데 노력함.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.2003년.</Year> 9월 「H상담센터」로, 2006년 1월에는 「T상담센터」로
        명칭을 변경하고 서비스 대상을 학생뿐만 아니라 사회인 까지 확대하여
        서비스를 제공함.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.1981년.</Year> 다양한 심리적 요구에 대응하기 위해, 체계적인 상담
        기법과 실무 중심의 훈련 프로그램을 대대적으로 도입하여 상담사들의
        전문성을 강화.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.1977년.</Year> 3월 강남 상담소 부속기관인 「담소」와 「 담소
        연구관」을 통합하여 본 센터 부설기관인 「H담소」를 설치함.
      </HistoryItem>

      <br />
      <HistoryItem>
        <Year>.1968년.</Year> 초대 소장 주도 하에 상담 서비스 확대와 전문
        인력 배치를 통해 강남 상담소를 개설함.
      </HistoryItem>
    </div>
  );
};

export default Page2;
