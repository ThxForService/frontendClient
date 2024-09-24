import saveProcess from '@/commons/libs/saveProcess';
import requestData from '@/commons/libs/requestData';

export default function answer(form) {
  return saveProcess(`/survey/answer`, 'POST', form);
}

export const getAnswer = (resultId) =>
  requestData(`/survey/answer/${resultId}`);

export const getAnswers = (page) =>
  requestData(`/survey/answers?page=${page ?? 1}`);
