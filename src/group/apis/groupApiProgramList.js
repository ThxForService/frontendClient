import apiRequest from '../../commons/libs/apiRequest';

export function groupApiProgramList(searchParams) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(`/program/info`, 'GET', searchParams);
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