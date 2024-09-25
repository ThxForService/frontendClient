import apiRequest from '../../commons/libs/apiRequest';

export default function apiApply(form) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(
          `/reservation/counseling/apply`,
          'POST',
          form,
        );
        if (res.status === 201) {
          resolve(res.data);
          return;
        }

        reject(res.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
}
