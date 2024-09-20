import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { produce } from 'immer';
// import { apiGet } from '../apis/apiInfo';
import CounselingForm from '../components/CounselingForm.js';
import Loading from '../../commons/components/Loading.js';
import UserInfoContext from '../../member/modules/UserInfoContext';
import apiApply from '../apis/apiApply';
import _useConfirm from '../../commons/hooks/useConfirm';

const CounselingApplyContainer = ({ setPageTitle }) => {
  const router = useRouter(); // useNavigate 대신 사용
  const { query } = useRouter(); // useParams 대신 query 사용
  const { seq } = query || {}; // 쿼리에서 seq 가져오기

  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    activitySeq: seq,
    name: userInfo?.userName,
    email: userInfo?.email,
    mobile: userInfo?.mobile,
    persons: 1, // 기본값 1명
  });
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const res = await apiGet(seq);
        console.log('Fetched data:', res); // 데이터 확인용 로그 추가
        setPageTitle(`${res.townName} ${t('예약하기')}`);

        /* 예약 가능일 문자열 -> Date 객체  */
        const availableDates = Object.keys(res.availableDates).sort();
        res.minDate = new Date(availableDates[0]);
        res.maxDate = new Date(availableDates.pop());
        res._availableDates = availableDates;

        setData(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, t, setPageTitle]);

  const onDateChange = useCallback(
    (date) => {
      const rDate = format(date, 'yyyy-MM-dd');
      const times = data.availableDates[rDate];
      setData((data) => ({ ...data, times }));
      setForm((form) => ({ ...form, rDate }));
    },
    [data, setForm],
  );

  const onTimeChange = useCallback((ampm) => {
    setForm((form) => ({ ...form, ampm }));
  }, []);

  const onChange = useCallback((e) => {
    setForm(
      produce((draft) => {
        draft[e.target.name] = e.target.value.trim();
      }),
    );
  }, []);

  const selectChange = useCallback(
    (selectedOption) => {
      setForm(
        produce((draft) => {
          draft.persons = selectedOption ? selectedOption.value : null;
        }),
      );
    },
    [setForm],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let _errors = {};
      let hasErrors = false;

      setErrors({});

      /* 필수 항목 검증 S */
      const requiredFields = {
        username: t('예약자명을_입력하세요'),
        studentNo: t('학번을_입력하세요'),
        cCase: t('유형을_선택하세요'),
        cReason: t('경위를_선택하세요'),
        rDate: t('예약일을_선택하세요'),
        rTime: t('시간대를_선택하세요'),
        email: t('예약자_이메일을_입력하세요'),
        mobile: t('예약자_전화번호를_입력하세요'),
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (
          (typeof form[field] === 'string' && !form[field].trim()) ||
          (typeof form[field] !== 'string' && !form[field])
        ) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 필수 항목 검증 E */

      if (hasErrors) {
        setErrors(_errors);
        return;
      }

      /* 예약 접수 처리 S */
      _useConfirm(t('정말_예약하시겠습니까'), () => {
        (async () => {
          try {
            const res = await apiApply(form);
            // 예약 접수 성공시 예약 완료 페이지 이동
            router.push(`/counseling/complete/${res.cSeq}`); // navigate 대신 router.push 사용
          } catch (err) {
            console.error(err);
            setErrors({ global: [err.message] });
          }
        })();
      });
      /* 예약 접수 처리 E */
    },
    [t, form, router],
  );

  if (!data) {
    return <Loading />;
  }

  return (
    <CounselingForm
      data={data}
      form={form}
      errors={errors}
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
      onSubmit={onSubmit}
      onChange={onChange}
      selectChange={selectChange}
    />
  );
};

export default React.memo(CounselingApplyContainer);
