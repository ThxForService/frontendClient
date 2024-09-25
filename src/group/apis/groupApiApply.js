import saveProcess from '@/commons/libs/saveProcess';

export function groupApiApply(pgmSeq, form) {
  return saveProcess(
    `/reservation/group/program/apply/${pgmSeq}`,
    'POST',
    form,
  );
}

/*
export function groupApiApply(pgmSeq, form) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(
          `/reservation/group/program/apply/${pgmSeq}`,
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
*/
