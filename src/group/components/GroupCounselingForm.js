'use client';
import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { useTranslation } from 'next-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { StyledButton } from '@/commons/components/StyledButton';
import { StyledInput } from '../../commons/components/StyledInput';
import MessageBox from '../../commons/components/StyledMessage';
import { colors } from '@/theme/colors';
import fontSizes from '@/theme/fontSizes';
import { format } from 'date-fns';
import moment from 'moment/moment';
import Select from 'react-select';
import {
  FcCloseUpMode,
  FcCalendar,
  FcAlarmClock,
  FcConferenceCall,
} from 'react-icons/fc';

const FormBox = styled.form`
  .infoBox {
    display: flex;
    height: 780px;
  }

  .box {
    flex-grow: 1;
    width: 0;
  }

  .box + .box {
    margin-left: 60px;
  }

  dl {
    padding: 10px 15px;
    font-size: ${fontSizes.medium}px;
    line-height: 170%;

    dt {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: ${fontSizes.big}px;
    }

    dd {
      width: calc(100% - 140px);
      font-size: ${fontSizes.normal}px;
    }
  }

  .react-calendar {
    width: 95%;
    height: 500px;
    padding: 15px;
    border-radius: 20px;
    align-content: center;
    display: flex;
    flex-direction: column;
  }

  .react-calendar__navigation {
    justify-content: center;
  }

  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: ${colors.white};
    color: ${colors.gray};
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  .react-calendar__navigation__label:hover,
  .react-calendar__navigation button:enabled:hover {
    background: ${colors.lightGreen};
    border-radius: 40px;
  }

  .react-calendar__tile {
    position: relative;
    text-align: center;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.normal}px;

    &:enabled:hover {
      background: ${colors.lightGreen};
      border-radius: 40px;
    }

    &--active {
      background: ${colors.darkGreen};
      color: ${colors.white};
      border-radius: 40px;
    }

    &--now {
      background: ${colors.white};
      color: ${colors.midGreen};
    }
  }

  .select {
    width: 300px;
    height: 50px;
    padding: 0;
    font-size: ${fontSizes.medium}px;
    margin-left: 10px;

    .css-13cymwt-control {
      height: 50px;
    }
  }

  h2 {
    font-size: ${fontSizes.extraBig}px;
  }

  li {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.big}px;
    margin: 0 0 10px 10px;

    svg {
      margin-right: 5px;
    }
  }

  .btn_box {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .rsv_btn {
      width: 350px;
      height: 50px;
    }
  }

  .select_date {
    padding-left: 50px;
    height: 100%;

    .townNm {
      font-size: ${fontSizes.big}px;
      margin: 0 0 20px 40px;
      font-weight: bold;
    }
  }

  input {
    font-size: ${fontSizes.medium}px;
  }

  .people {
    margin-bottom: 40px;
  }

  .title {
    display: flex;
    align-items: center;

    svg {
      font-size: ${fontSizes.extraBig}px;
      margin-right: 10px;
      color: ${colors.primary};
    }
  }
`;

const GroupCounselingForm = ({
  data,
  form,
  onSubmit,
  onDateChange,
  onTimeChange,
  onChange,
  errors,
  selectChange,
}) => {
  const { t } = useTranslation();
  const { minDate, maxDate, times, _availableDates } = data;

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="infoBox">
        <div className="select_date box">
          <div className="title">
            <FcCloseUpMode />
            <h2>{t('집단_상담_예약')}</h2>
          </div>
          <div className="title">
            <FcCalendar />
            <h2>{t('예약일_선택')}</h2>
          </div>
          <Calendar
            minDate={minDate}
            maxDate={maxDate}
            onChange={onDateChange}
            tileDisabled={({ date }) =>
              !_availableDates.some((d) => format(date, 'yyyy-MM-dd') === d)
            }
            formatDay={(locale, date) => moment(date).format('DD')}
            calendarType="gregory"
          />
          {errors?.rDate && (
            <MessageBox color="danger" messages={errors.rDate} />
          )}
        </div>
        <div className="select-time box">
          <div className="userInfo">
            <div className="title">
              <FcConferenceCall />
              <h2>{t('예약자_정보_입력')}</h2>
            </div>
            <dl>
              <dt>{t('이름')}</dt>
              <dd>
                <StyledInput
                  type="text"
                  name="name"
                  value={form?.name}
                  onChange={onChange}
                />
                {errors?.name && (
                  <MessageBox color="danger" messages={errors.name} />
                )}
              </dd>
            </dl>
            <dl>
              <dt>{t('이메일')}</dt>
              <dd>
                <StyledInput
                  type="email"
                  name="email"
                  value={form?.email}
                  onChange={onChange}
                />
                {errors?.email && (
                  <MessageBox color="danger" messages={errors.email} />
                )}
              </dd>
            </dl>
            <dl>
              <dt>{t('전화번호')}</dt>
              <dd>
                <StyledInput
                  type="text"
                  name="mobile"
                  value={form?.mobile}
                  onChange={onChange}
                />
                {errors?.mobile && (
                  <MessageBox color="danger" messages={errors.mobile} />
                )}
              </dd>
            </dl>
          </div>
  
          <div className="people">
            <div className="title">
              <h2>{t('인원수_선택')}</h2>
            </div>
            <Select
              value={options.find((option) => option.value === form?.persons)}
              onChange={selectChange}
              options={options}
            />
            {errors?.persons && (
              <MessageBox color="danger" messages={errors.persons} />
            )}
          </div>
  
          <div className="time_box">
            {times && times.length > 0 && (
              <div>
                <div className="title">
                  <FcAlarmClock />
                  <h2>{t('예약시간_선택')}</h2>
                </div>
                <ul>
                  {times.map((time, index) => (
                    <li key={index} onClick={() => onTimeChange(time)}>
                      {form.time === time ? (
                        <IoIosRadioButtonOn />
                      ) : (
                        <IoIosRadioButtonOff />
                      )}
                      {time}
                    </li>
                  ))}
                </ul>
                {errors?.time && (
                  <MessageBox color="danger" messages={errors.time} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="btn_box">
        <StyledButton type="submit">
          {t('신청하기')}
        </StyledButton>
        {errors?.global && (
          <MessageBox color="danger" messages={errors.global} />
        )}
      </div>
    </FormBox>
  );
};

export default React.memo(GroupCounselingForm);
