import apiRequest from '../../commons/libs/apiRequest';

export function groupApiApply(form) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(`/program/apply`, 'POST', form);
        if (res.status === 201) {
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