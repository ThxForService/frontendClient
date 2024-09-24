import React from 'react';

const ListItems = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>등록된 설문이 없습니다.</p>;
  }

  return (
    <div>
      {items.map((surveyInfo) => (
        <div key={surveyInfo.srvyNo}>
          <h2>{surveyInfo.srvyNm}</h2> 
          <p><strong>소요 시간:</strong> {surveyInfo.srvyReqHr}</p> 
          <p><strong>설명:</strong> {surveyInfo.srvyExpln}</p> 

          
          {surveyInfo.criteriaInfo && (
            <div>
              <strong>기준 정보:</strong>
              <pre>{JSON.stringify(JSON.parse(surveyInfo.criteriaInfo), null, 2)}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(ListItems);
