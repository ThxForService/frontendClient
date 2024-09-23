import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { StyledInput, StyledButton, StyledMessage } from '@/commons/components'; // 커스텀 스타일을 사용한다면 임포트
import { format } from 'date-fns';

const CounselingForm = ({ onSubmit, userInfo }) => {
  const [form, setForm] = useState({
    studentNo: '', // 로그인 정보에서 설정
    username: '', // 로그인 정보에서 설정
    email: '',
    mobile: '',
    rDate: '',
    rTime: '',
    cCase: 'PERSONAL', // 상담 유형 기본값 설정
  });
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        <StyledInput
          type="time"
          name="rTime"
          value={form.rTime}
          onChange={handleChange}
        />
        {errors.rTime && <StyledMessage>{errors.rTime}</StyledMessage>}
      </div>
      <div>
        <label>상담 유형</label>
        <select name="cCase" value={form.cCase} onChange={handleChange}>
          <option value="PERSONAL">개인 상담</option>
          <option value="GROUP">그룹 상담</option>
        </select>
      </div>
      <StyledButton type="submit">예약하기</StyledButton>
    </form>
  );
};

export default CounselingForm;