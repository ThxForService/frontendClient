import { SourceEditing } from 'ckeditor5';
import apiRequest from '../../commons/libs/apiRequest';

export function groupApiApply(pgmSeq) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(`/reservation/group/program/apply/${pgmSeq}`, 'POST');
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