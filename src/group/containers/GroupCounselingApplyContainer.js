import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { produce } from 'immer';
// import { apiGet } from '../apis/apiInfo';
import GroupCounselingForm from '../components/GroupCounselingForm.js';
import Loading from '../../commons/components/Loading.js';
import UserInfoContext from '@/commons/contexts/UserInfoContext.js';
import { groupApiApply } from '../apis/groupApiApply';
import _useConfirm from '../../commons/hooks/useConfirm';

const GroupCounselingApplyContainer = ({ setPageTitle }) => {
  const router = useRouter();
  const { query } = useRouter();
  const { seq } = query || {};
  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    pgmSeq: seq,
    name: userInfo?.userName,
    email: userInfo?.email,
    mobile: userInfo?.mobile,
    persons: 1, // 기본값 1명
    rDate: '',
    rTime: '',
  });
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const res = await apiGet(seq);
        setPageTitle(`${res.townName} ${t('예약하기')}`);

        // 프로그램 정보를 설정
        setData(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, t, setPageTitle]);

  const onDateChange = useCallback((date) => {
    const rDate = format(date, 'yyyy-MM-dd');
    const times = data.availableDates[rDate] || [];
    setData((prevData) => ({ ...prevData, times }));
    setForm((prevForm) => ({ ...prevForm, rDate }));
  }, [data]);

  const onTimeChange = useCallback((selectedTime) => {
    setForm((prevForm) => ({ ...prevForm, rTime: selectedTime }));
  }, []);

  const onChange = useCallback((e) => {
    setForm(
      produce((draft) => {
        draft[e.target.name] = e.target.value.trim();
      }),
    );
  }, []);

  const selectChange = useCallback((selectedOption) => {
    setForm(
      produce((draft) => {
        draft.persons = selectedOption ? selectedOption.value : 1;
      }),
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let _errors = {};
      let hasErrors = false;

      setErrors({});

      // 필수 항목 검증
      const requiredFields = {
        rDate: t('예약일을_선택하세요'),
        rTime: t('시간대를_선택하세요'),
        name: t('예약자명을_입력하세요'),
        email: t('예약자_이메일을_입력하세요'),
        mobile: t('예약자_전화번호를_입력하세요'),
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field]) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }

      if (hasErrors) {
        setErrors(_errors);
        return;
      }

      // 신청 처리
      _useConfirm(t('정말_예약하시겠습니까'), () => {
        (async () => {
          try {
            const response = await apiApply(form);
            router.push(`/counseling/complete/${response.cSeq}`);
          } catch (err) {
            console.error(err);
            setErrors({ global: [err.message] });
          }
        })();
      });
    },
    [t, form, router],
  );

  if (!data) {
    return <Loading />;
  }

  return (
    <GroupCounselingForm
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

export default React.memo(GroupCounselingApplyContainer);
