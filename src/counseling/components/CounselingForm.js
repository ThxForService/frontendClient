import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { StyledInput } from '@/commons/components/StyledInput'; // 커스텀 스타일을 사용한다면 임포트
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const CounselingForm = ({ onSubmit, userInfo }) => {
  const [form, setForm] = useState({
    studentNo: '', // 로그인 정보에서 설정
    username: '', // 로그인 정보에서 설정
    email: '',
    mobile: '',
    rDate: '',
    rTime: '',
    cCase: 'FAMILY', // 상담 유형 기본값 설정
  });
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const { t } = useTranslation();

  const times = {
    morning: ['09:00', '10:00', '11:00', '12:00'],
    afternoon: ['13:00', '14:00', '15:00', '16:00', '17:00'],
  };

  // 로그인 정보 불러오기
  useEffect(() => {
    if (userInfo) {
      setForm((prevForm) => ({
        ...prevForm,
        studentNo: userInfo.studentNo,
        username: userInfo.username,
        email: userInfo.email,
        mobile: userInfo.mobile,
      }));
    }
  }, [userInfo]);

  // 날짜 선택 처리
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setForm((prevForm) => ({
      ...prevForm,
      rDate: format(date, 'yyyy-MM-dd'),
    }));
  };

  // 입력 필드 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // 시간 선택 처리
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setForm((prevForm) => ({
      ...prevForm,
      rTime: time,
    }));
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    // 검증 로직 (이메일, 전화번호 등)
    let _errors = {};
    if (!form.email) _errors.email = '이메일을 입력해주세요.';
    if (!form.mobile) _errors.mobile = '전화번호를 입력해주세요.';
    if (!form.rDate) _errors.rDate = '날짜를 선택해주세요.';
    if (!form.rTime) _errors.rTime = '시간을 선택해주세요.';

    if (Object.keys(_errors).length > 0) {
      setErrors(_errors);
      return;
    }

    onSubmit(form); // 제출 처리 함수 호출
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>학번</label>
        <StyledInput type="text" value={form.studentNo} readOnly />
      </div>
      <div>
        <label>이름</label>
        <StyledInput type="text" value={form.username} readOnly />
      </div>
      <div>
        <label>이메일</label>
        <StyledInput
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <StyledMessage>{errors.email}</StyledMessage>}
      </div>
      <div>
        <label>전화번호</label>
        <StyledInput
          type="text"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <StyledMessage>{errors.mobile}</StyledMessage>}
      </div>
      <div>
        <label>상담 날짜</label>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        {errors.rDate && <StyledMessage>{errors.rDate}</StyledMessage>}
      </div>
      <div>
        <label>상담 시간</label>
        <div>
          <h4>오전</h4>
          {times.morning.map((time) => (
            <button
              className="amTime"
              key={time}
              onClick={() => handleTimeSelect(time)}
              style={{
                backgroundColor: selectedTime === time ? 'green' : 'white',
                color: selectedTime === time ? 'white' : 'black',
                padding: '10px',
                margin: '5px',
                border: '1px solid gray',
                borderRadius: '5px',
              }}
            >
              {time}
            </button>
          ))}
        </div>
        <div>
          <h4>오후</h4>
          {times.afternoon.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              style={{
                backgroundColor: selectedTime === time ? 'green' : 'white',
                color: selectedTime === time ? 'white' : 'black',
                padding: '10px',
                margin: '5px',
                border: '1px solid gray',
                borderRadius: '5px',
              }}
            >
              {time}
            </button>
          ))}
        </div>
        {errors.rTime && <StyledMessage>{errors.rTime}</StyledMessage>}
      </div>
      <div>
        <label>상담 유형</label>
        <select name="cCase" value={form.cCase} onChange={handleChange}>
          <option value="FAMILY">{t('가족')}</option>
          <option value="ACADEMIC">{t('학업/진로')}</option>
          <option value="RELATIONSHIPS">{t('대인관계')}</option>
          <option value="EMOTIONAL">{t('심리정서')}</option>
          <option value="BEHAVIOR">{t('생활습관 및 행동문제')}</option>
          <option value="ROMANCE_SEX">{t('연애와 성')}</option>
          <option value="LIFE_VALUES">{t('삶과 가치')}</option>
          <option value="PERSONALITY">{t('성격')}</option>
          <option value="OTHER">{t('기타')}</option>
        </select>
        {form.cCase === 'OTHER' && (
          <div>
            <label>{t('기타 내용')}</label>
            <input
              type="text"
              name="customCase"
              value={form.customCase}
              onChange={handleChange}
              placeholder={t('원하는 상담 주제를 입력하세요')}
            />
          </div>
        )}
      </div>
      <StyledButton type="submit">예약하기</StyledButton>
    </form>
  );
};

export default CounselingForm;
