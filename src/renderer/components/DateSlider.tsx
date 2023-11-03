import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import dayjs from 'dayjs';
import { Button } from 'antd';
import { DateBtn } from '../style';
import Booking from './Booking';

interface Props {}

function DateSlider(props: Props) {
  const {} = props;
  const todayDate = dayjs().format('DD');
  const num_Days = useSelector((state: RootState) => state.days);

  function showDate(num_Days: number) {
    const startOfWeek = dayjs().startOf('week');
    let days = [];
    for (let i = 0; i < num_Days; i++) {
      const date = startOfWeek.add(i, 'day');
      days.push({ ddd: date.format('ddd'), dd: date.format('DD') });
    }
    return days;
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex' }}>
        {showDate(num_Days).map((item) => {
          return (
            <DateBtn
              style={
                item.dd === todayDate
                  ? { backgroundColor: '#1677FF', color: 'white' }
                  : {}
              }
            >{`${item.ddd} ${item.dd}`}</DateBtn>
          );
        })}
      </div>
      <Booking />
    </div>
  );
}

export default DateSlider;
