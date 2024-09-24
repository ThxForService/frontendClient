import apiRequest from '../../commons/libs/apiRequest';

export function groupApiProgramInfo(pgmSeq) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(`group/program/info/${pgmSeq}`, 'GET');
        if (res.status === 200) {
          resolve(res.data.data);
          return;
        }
        reject(res.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
}