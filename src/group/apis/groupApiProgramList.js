import requestData from '@/commons/libs/requestData';
export default function groupApiProgramList() {
  return requestData('/reservation/group/program/info');
}
