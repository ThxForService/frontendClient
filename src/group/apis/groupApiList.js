import requestData from '@/commons/libs/requestData';

export default function groupApiList() {
  return requestData('/reservation/group/program/res/info');
}


