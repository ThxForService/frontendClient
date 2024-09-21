import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { useTranslation } from 'next-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { BigButton } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
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
    font-size: ${medium};
    line-height: 170%;

    dt {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: ${big};
    }

    dd {
      width: calc(100% - 140px);
      font-size: ${normal};
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
    background-color: ${white};
    color: ${gray};
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  .react-calendar__navigation__label:hover,
  .react-calendar__navigation button:enabled:hover {
    background: ${lightGreen};
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
    font-size: ${normedium};

    &:enabled:hover {
      background: ${lightGreen};
      border-radius: 40px;
    }

    &--active {
      background: ${darkGreen};
      color: ${white};
      border-radius: 40px;
    }

    &--now {
      background: ${white};
      color: ${midGreen};
    }
  }

  .select {
    width: 300px;
    height: 50px;
    padding: 0;
    font-size: ${medium};
    margin-left: 10px;

    .css-13cymwt-control {
      height: 50px;
    }
  }

  h2 {
    font-size: ${extraBig};
  }

  li {
    display: flex;
    align-items: center;
    font-size: ${big};
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
      font-size: ${big};
      margin: 0 0 20px 40px;
      font-weight: bold;
    }
  }

  input {
    font-size: ${medium};
  }

  .people {
    margin-bottom: 40px;
  }

  .title {
    display: flex;
    align-items: center;

    svg {
      font-size: ${extraBig};
      margin-right: 10px;
      color: ${primary};
    }
  }
`;

const options = [...new Array(30).keys()].map((i) => ({
  value: i + 1,
  label: `${i + 1}명`,
}));

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
  const { minDate, maxDate, times } = data;

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
                <InputBox
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
                <InputBox
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
                <InputBox
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
            {times && (
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
        <BigButton type="submit">
          {t('신청하기')}
        </BigButton>
        {errors?.global && (
          <MessageBox color="danger" messages={errors.global} />
        )}
      </div>
    </FormBox>
  );
};

export default React.memo(GroupCounselingForm);

