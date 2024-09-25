import saveProcess from '@/commons/libs/saveProcess';

export function groupApiCancel(pgmSeq) {
  return saveProcess(
    `/reservation/group/program/cancel/${pgmSeq}`,
    'DELETE'
  );
}