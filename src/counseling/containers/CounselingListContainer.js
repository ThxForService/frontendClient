import React from 'react';

function getQueryString(searchParams) {
  const qs = { limit: 9 };
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const CounselingApplyContainer = () => {};

export default React.memo(CounselingApplyContainer);
