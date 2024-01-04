import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import dayjs from 'dayjs';
import { Button } from 'antd';
import { DateBtn } from '../style';
import Booking from './Booking';
import { Room } from '../../types';
import { getRoomData } from '../redux/slice';

interface Props {}

function DateSlider(props: Props) {
  const {} = props;
  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootState) => state.selectedDay);
  const num_Days = useSelector((state: RootState) => state.days);

  useEffect(() => {
    window.api.getRoomData().then((res: Room[]) => {
      dispatch(getRoomData(res));
    });
  }, []);

  function showDate(num_Days: number) {
    const startOfWeek = dayjs(selectedDay).startOf('week');
    let days = [];
    for (let i = 0; i < num_Days; i++) {
      const date = startOfWeek.add(i, 'day');
      days.push({
        ddd: date.format('ddd'),
        dd: date.format('DD'),
        ts: date.unix(),
      });
    }
    return days;
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', height: '5%' }}>
        <DateBtn>Room</DateBtn>
        {showDate(num_Days).map((item, key) => {
          return (
            <DateBtn
              key={key}
              style={
                item.dd === dayjs(selectedDay).format('DD')
                  ? { backgroundColor: '#1677FF', color: 'white' }
                  : {}
              }
            >{`${item.ddd} ${item.dd}`}</DateBtn>
          );
        })}
      </div>
      <Booking days={showDate(num_Days)} />
    </div>
  );
}

export default DateSlider;
